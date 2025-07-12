module.exports = async (client, message) => {
  const response = `
╭━━━━〔 👑 *LORD RAHL STATUS* 〕━━━━╮
┃ ⚔️ *Status*: Online & Listening
┃ 👤 *Owner*: Lord Rahl
┃ 💬 *Prefix*: [.]
┃ 🧠 *Mode*: Public
┃ ⚡ *Power*: 100%
┃ 🕰️ *Uptime*: Eternal
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯
  `;
  await client.sendText(message.from, response);
};
