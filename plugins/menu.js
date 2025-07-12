// plugins/menu.js
module.exports = async function (client, message) {
  const menuText = `
╭━━━〔 *👑 RAHL BOT COMMANDS* 〕━━━╮
┃ ✦ .ping       – Bot Status
┃ ✦ .alive      – Check if bot is active
┃ ✦ .menu       – Display all commands
┃ ✦ .ai [text]  – Chat with Rahl AI
┃ ✦ .sticker    – Convert image/video to sticker
┃ ✦ .kick       – Remove user from group
┃ ✦ .tagall     – Tag all members
┃ ✦ .ytmp3      – Download YouTube audio
┃ ✦ .ytmp4      – Download YouTube video
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯
  `;
  await client.sendText(message.from, menuText);
};
