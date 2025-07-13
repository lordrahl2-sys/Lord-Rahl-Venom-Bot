const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;
const WPP_SERVER = 'https://wppconnect-server-render-url.com'; // Replace with real WPP server

app.use(cors());
app.use(express.json());

// Royal Endpoint for creating session
app.post('/session', async (req, res) => {
  const { phone } = req.body;
  if (!phone) return res.status(400).json({ error: 'Phone number required' });

  try {
    const response = await axios.post(`${WPP_SERVER}/api/session/add`, {
      session: phone,
    });

    if (response.data.status === 'success') {
      return res.status(200).json({ message: 'Session started. Check WhatsApp for confirmation.' });
    } else {
      return res.status(500).json({ error: response.data.message || 'Failed to start session' });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🟣 Royal Session Server running on http://localhost:${PORT}`);
});
