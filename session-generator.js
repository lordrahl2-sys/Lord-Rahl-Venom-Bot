const venom = require('venom-bot');

venom
  .create({
    session: 'lord-rahl-session',
    multidevice: true,
    headless: false,
    useChrome: false,
  })
  .then((client) => {
    console.log("✅ QR Code Scanned — Session Saved.");
    client.sendText('YOUR_NUMBER@c.us', '🤴🏽 Your Royal Session is Active.');
  })
  .catch((err) => {
    console.error("❌ Session Creation Failed:", err);
  });
