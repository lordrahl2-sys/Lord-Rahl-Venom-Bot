// plugins/startup.js
module.exports = async (client) => {
  console.log("👑 Lord Rahl Bot is starting...");

  const welcomeMsg = `
╭━━━〔 *👑 𝐑𝐀𝐇𝐋 𝐁𝐎𝐓 𝐀𝐂𝐓𝐈𝐕𝐀𝐓𝐄𝐃* 〕━━━╮
┃ ✦ Version: *v2.0 Quantum*
┃ ✦ Owner: *Lord Rahl 👑*
┃ ✦ Mode: *Public AI*
┃ ✦ Prefix: *"."*
┃ ✦ Status: *Fully Operational*
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━╯
💬 Type *.menu* to explore royal powers.
  `;

  await client.sendText(client.info.wid._serialized, welcomeMsg);
};
