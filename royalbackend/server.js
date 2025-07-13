const express = require('express');
const { create } = require('venom-bot');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const SESSION_DIR = path.join(__dirname, 'sessions');
if (!fs.existsSync(SESSION_DIR)) fs.mkdirSync(SESSION_DIR);

let clients = {};

app.post('/pair', async (req, res) => {
  const { phone } = req.body;
  if (!phone) return res.status(400).json({ error: 'Phone number required' });

  const sessionName = `royal-session-${phone}`;

  const client = await create({
    session: sessionName,
    multidevice: true,
    headless: true,
    disableWelcome: true,
    useChrome: false,
    catchQR: () => {},
    browserArgs: ['--no-sandbox']
  });

  clients[phone] = client;

  try {
    const code = await client.getPairingCode(); // pairing code from WhatsApp
    res.json({ code });
  } catch (err) {
    res.status(500).json({ error: 'Failed to get pairing code.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`👑 Royal Pairing Server running on port ${PORT}`);
});
