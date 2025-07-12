module.exports = async (client, msg) => {
  const bannerUrl = "https://raw.githubusercontent.com/lordrahl2-sys/Lord-Rahl-bot/main/public/rahl-banner.jpg";
  const image = await venom.MessageMedia.fromUrl(bannerUrl);
  const caption = `
╭━━〔 *⎈ Lord Rahl ⎈* 〕━━┈⊷
┃◈ *Owner:* 254740694462
┃◈ *Commands:* .ping .menu .owner
╰━━━━━━━━━━━━━━━⊷
  `;
  client.sendImage(msg.from, image, "rahl-banner.jpg", caption);
};
