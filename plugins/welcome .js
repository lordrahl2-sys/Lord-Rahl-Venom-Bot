// plugins/welcome.js

module.exports = async (client, message) => {
  const { chatId, isGroupMsg, event, contact } = message;

  if (event === "add" && isGroupMsg) {
    const name = contact?.pushname || "new member";

    const welcomeText = `👋 Welcome *${name}* to the group!
I’m *Lord Rahl Venom Bot*. Type *!menu* to get started.`;

    client.sendText(chatId, welcomeText).catch(console.error);
  }
};
