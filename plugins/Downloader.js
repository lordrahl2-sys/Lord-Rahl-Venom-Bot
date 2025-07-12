const axios = require("axios");

module.exports = async function downloader(client, message) {
  const prefix = ".";
  const body = message.body?.trim();
  const command = body.split(" ")[0].toLowerCase();
  const args = body.slice(command.length).trim();

  // YouTube MP3
  if (command === `${prefix}ytmp3`) {
    if (!args) return client.sendText(message.from, "🎵 Please provide a YouTube link.");
    client.sendText(message.from, "🔎 Fetching audio...");

    try {
      const res = await axios.get(`https://api.akuari.my.id/downloader/yta?link=${args}`);
      const { result } = res.data;
      await client.sendFile(message.from, result.url_audio, "audio.mp3", `🎶 Title: ${result.title}`);
    } catch (err) {
      client.sendText(message.from, "❌ Failed to fetch audio.");
    }
  }

  // YouTube MP4
  if (command === `${prefix}ytmp4`) {
    if (!args) return client.sendText(message.from, "🎬 Please provide a YouTube link.");
    client.sendText(message.from, "🔎 Fetching video...");

    try {
      const res = await axios.get(`https://api.akuari.my.id/downloader/ytv?link=${args}`);
      const { result } = res.data;
      await client.sendFile(message.from, result.url_video, "video.mp4", `🎥 Title: ${result.title}`);
    } catch (err) {
      client.sendText(message.from, "❌ Failed to fetch video.");
    }
  }

  // Play (search and download audio)
  if (command === `${prefix}play` || command === `${prefix}song`) {
    if (!args) return client.sendText(message.from, "🎧 Provide a song name to search.");
    client.sendText(message.from, `🔎 Searching for: *${args}*`);

    try {
      const res = await axios.get(`https://api.akuari.my.id/downloader/play?query=${args}`);
      const { result } = res.data;
      await client.sendFile(message.from, result.url_audio, "song.mp3", `🎶 ${result.title}`);
    } catch (err) {
      client.sendText(message.from, "❌ Failed to fetch the song.");
    }
  }

  // Mediafire Downloader
  if (command === `${prefix}mediafire`) {
    if (!args.includes("mediafire.com")) {
      return client.sendText(message.from, "❌ Invalid Mediafire link.");
    }

    client.sendText(message.from, "📦 Downloading Mediafire file...");

    try {
      const res = await axios.get(`https://api.akuari.my.id/downloader/mediafire?link=${args}`);
      const { result } = res.data;
      await client.sendFile(message.from, result.link, result.filename, `📥 ${result.filename}`);
    } catch (err) {
      client.sendText(message.from, "❌ Failed to download the Mediafire file.");
    }
  }
};
