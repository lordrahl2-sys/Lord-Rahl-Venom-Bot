// plugins/tts.js
const gTTS = require('gtts');

module.exports = async function ttsCommand(client, message) {
  const prefix = '.';
  const command = message.body?.toLowerCase().split(' ')[0];

  if (command === `${prefix}tts`) {
    const text = message.body.slice(5).trim();
    if (!text) {
      return client.sendText(
        message.from,
        '📢 *Royal Reminder:*\nPlease provide text for TTS.\n\nUsage: `.tts I am your king!`'
      );
    }

    const gtts = new gTTS(text, 'en');

    const filePath = `./temp/tts_${Date.now()}.mp3`;
    gtts.save(filePath, async function (err) {
      if (err) {
        console.error("❌ TTS error:", err);
        return client.sendText(message.from, "⚠️ Failed to generate royal voice.");
      }

      await client.sendFile(message.from, filePath, 'tts.mp3', '🔊 *Voice of Rahl*');
    });
  }
};
