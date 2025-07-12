// plugins/startup.js

module.exports = async (client) => {
  console.log("✅ Lord Rahl Venom Bot is up and running!");

  const banner = `
╭━━〔 *⎈ 𝐋𝐎𝐑𝐃 𝐑𝐀𝐇𝐋 𝐕𝐄𝐍𝐎𝐌* 〕━━┈⊷
┃◈ Welcome to the most royal Venom bot.
┃◈ Powered by Rahl Intelligence 💡
╰──────────────┈⊷
  `;

  client.sendText(process.env.OWNER_NUMBER + "@c.us", banner).catch(() => {});
};
