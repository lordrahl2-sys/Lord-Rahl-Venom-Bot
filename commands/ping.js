module.exports = async (client, msg) => {
  const start = Date.now();
  await client.sendText(msg.from, "Ping?");
  const latency = Date.now() - start;
  client.sendText(msg.from, `Pong! 🏓 ${latency}ms`);
};
