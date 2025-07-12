// plugins/antidelete.js

module.exports = async function antideletePlugin(client, message) {
  try {
    const chatId = message.chatId;
    const sender = message.author || message.sender?.id || "unknown";
    const username = sender.replace('@c.us', '');
    const deletedContent = message.body || '📦 *[Media or Non-text content]*';

    const royalReveal = `
╭━━〔 👑 *Anti-Delete Triggered* 〕━━
┃
┃ 🧍 *User*: @${username}
┃ ⏰ *Time*: ${new Date().toLocaleTimeString()}
┃ 🗑️ *Message Deleted*
┃
┃ ✦ *Revealed by* 𝙇𝙤𝙧𝙙 𝙍𝙖𝙝𝙡 ✦
┃ ${deletedContent}
┃
╰━━━━━━━━━━━━━━━━━━━━━━━╯
`;

    await client.sendText(chatId, royalReveal);
  } catch (err) {
    console.error("❌ Error in antideletePlugin:", err);
  }
};
