// plugins/welcome.js

module.exports = async (client, message) => {
  const { chatId, isGroupMsg, event, contact } = message;

  if (event === "add" && isGroupMsg) {
    const name = contact?.pushname || "noble guest";

    const welcomeText = `
╭━━━〔 *🎉 WELCOME TO THE KINGDOM* 〕━━━╮
┃ 👑 Hail *${name}*!
┃ ✦ You’ve entered a royal chamber.
┃ 🤖 I am *Lord Rahl Venom Bot*.
┃ 📜 Type *.menu* to summon my powers.
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯
    `;

    client.sendText(chatId, welcomeText).catch(console.error);
  }
};
