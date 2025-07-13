const express = require('express');
const venom = require('venom-bot');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.post('/session', async (req, res) => {
  const number = req.body.number.replace(/\D/g, '');
  const sessionName = `rahl-session-${number}`;

  venom.create(
    sessionName,
    (base64Qrimg) => {
      res.json({ qr: base64Qrimg });
    },
    undefined,
    {
      multidevice: true,
      folderNameToken: 'tokens',
      mkdirFolderToken: '',
    }
  ).then(client => {
    console.log(`🤖 Royal Session ${sessionName} is ready!`);
  }).catch(err => {
    console.error(err);
    res.status(500).json({ error: 'Session failed' });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`👑 Rahl Panel running on port ${PORT}`));
