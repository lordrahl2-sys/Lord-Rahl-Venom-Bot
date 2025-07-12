module.exports = async function alive(client, message) {
  if (message.body.toLowerCase() === '.alive') {
    await client.sendText(
      message.from,
      `╭━━━〔 *⎈ 𝐋𝐎𝐑𝐃 𝐑𝐀𝐇𝐋 ⎈* 〕━━━┈⊷\n` +
      `┃ ✅ *Bot is alive and running perfectly!*\n` +
      `┃ 🛠 Version: 1.0.0\n` +
      `┃ 🧠 Powered by Venom-Bot\n` +
      `┃ 👑 Lord Rahl Panel Online\n` +
      `╰━━━━━━━━━━━━━━━━━━━━━┈⊷`
    );
  }
};
