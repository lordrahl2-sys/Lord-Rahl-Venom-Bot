// plugins/startup.js

module.exports = async (client) => {
  console.log("✅ Lord Rahl Venom Bot has ascended the throne!");

  const banner = `
╭━━━〔 *⎈ 𝐋𝐎𝐑𝐃 𝐑𝐀𝐇𝐋 𝐕𝐄𝐍𝐎𝐌 𝐁𝐎𝐓 ⎈* 〕━━━┈⊷
┃📣 *Status:* Online & Majestic
┃⚔️ *Mode:* Royal Deployment Active
┃🤖 *Bot:* Venom Framework | Multidevice
┃🧠 *Core:* Rahl Royal Intelligence
┃📅 *Time:* ${new Date().toLocaleString()}
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯
  `;

  const ownerNumber = process.env.OWNER_NUMBER || '254740694462'; // fallback
  await client.sendText(`${ownerNumber}@c.us`, banner).catch(() => {});
};
