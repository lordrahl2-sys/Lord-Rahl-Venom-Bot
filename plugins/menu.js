// plugins/menu.js

module.exports = async function (client, message) {
  const menuText = `
╭━━━〔 *🏰 𝐑𝐎𝐘𝐀𝐋 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐒𝐂𝐑𝐎𝐋𝐋* 〕━━━╮
┃ 📜 *Behold, noble commands of Lord Rahl:*
┃
┃ ✦ .ping       – 🏓 Pulse of the Kingdom
┃ ✦ .alive      – 👑 Status of Lord Rahl
┃ ✦ .menu       – 📖 Reveal this sacred scroll
┃ ✦ .sticker    – 🎨 Forge royal stickers
┃ ✦ .kick       – ⚔️ Banish a rebel
┃ ✦ .tagall     – 🗣️ Summon all citizens
┃ ✦ .ytmp3      – 🎵 Summon royal audio
┃ ✦ .ytmp4      – 🎬 Summon royal video
┃ ✦ .lockgc     – 🔒 Seal the court
┃ ✦ .unlockgc   – 🔓 Open the gates
┃ ✦ .setgoodbye – 📩 Set a farewell decree
┃ ✦ .goodbye    – 👋 Send noble goodbye
┃
┃ More magic soon from the Rahl Realm...
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯
  `;
  await client.sendText(message.from, menuText);
};
