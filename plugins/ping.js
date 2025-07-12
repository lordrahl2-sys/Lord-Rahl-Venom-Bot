module.exports = async function ping(client, message) {
  if (message.body.toLowerCase() === '.ping') {
    const start = Date.now();
    await client.sendText(message.from, '🏓 Pinging...');
    const end = Date.now();
    const ping = end - start;

    await client.sendText(message.from, `🏓 Pong! Response time: *${ping}ms*`);
  }
};
