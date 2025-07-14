// server.js - Lord Rahl Royal Backend
const express = require("express");
const cors = require("cors");
const { create } = require("venom-bot");

const app = express();
app.use(cors());
app.use(express.json());

let sessions = {};

app.get("/", (req, res) => {
  res.send("👑 Lord Rahl Backend is Live");
});

// 🟣 Option 1: Start session using QR scan
app.post("/start-session", async (req, res) => {
  const { phone } = req.body;
  if (!phone) return res.status(400).json({ error: "Phone is required" });

  try {
    const sessionName = `rahl-session-${phone}`;
    const client = await create({
      session: sessionName,
      multidevice: true,
    });

    sessions[phone] = client;

    client.onMessage((msg) => {
      console.log(`📨 Message from ${msg.from}: ${msg.body}`);
    });

    res.json({
      status: "pending",
      method: "qr-scan",
      message: "Scan QR code from terminal to link device",
    });
  } catch (err) {
    console.error("❌ Failed to start session:", err);
    res.status(500).json({ error: "Failed to create QR session" });
  }
});

// 🧾 Option 2: Generate Pairing Code (Manual Input)
app.get("/pair-code/:phone", async (req, res) => {
  const phone = req.params.phone;
  if (!phone) return res.status(400).json({ error: "Phone is required" });

  try {
    const sessionName = `rahl-session-${phone}`;

    const client = await create({
      session: sessionName,
      multidevice: true,
      browserless: true,
    });

    client.onStateChange(async (state) => {
      if (state === "PAIRING") {
        const code = await client.getPairingCode();
        console.log(`🔑 Pairing Code for ${phone}: ${code}`);
        res.json({
          status: "pending",
          method: "pair-code",
          pairingCode: code,
          message: "Use this code in WhatsApp to pair manually",
        });
      }
    });

    sessions[phone] = client;

    client.onMessage((msg) => {
      console.log(`📨 Message from ${msg.from}: ${msg.body}`);
    });
  } catch (err) {
    console.error("❌ Pairing code error:", err);
    res.status(500).json({ error: "Failed to generate pairing code" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Royal Backend running on http://0.0.0.0:${PORT}`);
});
