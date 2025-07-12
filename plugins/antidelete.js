// plugins/antidelete.js

module.exports = async function antideletePlugin(client, message) {
  const chatId = message.chatId;
  const sender = message.author || message.sender?.id || "unknown";
  const username = sender.replace('@c.us', '');

  const deletedContent = message.body || '[media or deleted content]';

  const msgInfo = `
🚨 *Anti-Delete Alert*
👤 @${username}
🕒 ${new Date().toLocaleTimeString()}

👑 *Revealed by Rahl:*
${deletedContent}
  `;

  client.sendText(chatId, msgInfo);
};
