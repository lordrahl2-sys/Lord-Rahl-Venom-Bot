// plugins/ping.js

module.exports = async function ping(client, message) {
  if (message.body.toLowerCase() === '.ping') {
    const start = Date.now();
    await client.sendText(message.from, '🏹 Scouting the realm for latency...');
    const end = Date.now();
    const ping = end - start;

    const response = `
╭━━〔 *🏓 Royal Ping Report* 〕━━━╮
┃ 👑 *Status:* Alive & Alert
┃ 🕰️ *Response Time:* *${ping}ms*
┃ 🏰 *Server:* Rahl Dominion Node
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯
    `;
    await client.sendText(message.from, response);
  }
};
