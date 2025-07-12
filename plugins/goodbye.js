// plugins/goodbye.js
const fs = require('fs');
const path = require('path');

const goodbyePath = path.join(__dirname, '..', 'data', 'goodbye.json');

// Ensure the goodbye message file exists
if (!fs.existsSync(goodbyePath)) {
  fs.writeFileSync(goodbyePath, JSON.stringify({}));
}

let goodbyeMessages = JSON.parse(fs.readFileSync(goodbyePath));

function saveGoodbyeMessages() {
  fs.writeFileSync(goodbyePath, JSON.stringify(goodbyeMessages, null, 2));
}

module.exports = {
  handleGoodbyeCommand: async (client, message) => {
    const prefix = '.';
    const args = message.body.trim().split(' ');
    const command = args[0].toLowerCase();

    if (command === `${prefix}setgoodbye`) {
      const customMessage = args.slice(1).join(' ');
      if (!customMessage) {
        return client.sendText(
          message.chatId,
          '🚫 *Royal Alert:* Please provide a goodbye message, noble one.'
        );
      }

      goodbyeMessages[message.chatId] = customMessage;
      saveGoodbyeMessages();

      return client.sendText(
        message.chatId,
        '✅ *Royal Scroll:* Goodbye message has been engraved in the kingdom’s memory.'
      );
    }
  },

  sendGoodbyeIfSet: async (client, event) => {
    const chatId = event.chat;

    if (
      event.action === 'remove' &&
      goodbyeMessages[chatId] &&
      event.who !== event.by
    ) {
      const farewellUser = `@${event.who.replace('@c.us', '')}`;
      const farewellMsg = goodbyeMessages[chatId]
        .replace(/@user/gi, farewellUser);

      const royalFarewell = `
╭━━━〔 👋 *Farewell Ceremony* 〕━━━
┃ ✦ Noble: ${farewellUser}
┃ ✦ Departed the Kingdom
┃
┃ 📝 *Final Words:*
┃ ${farewellMsg}
╰━━━━━━━━━━━━━━━━━━━━━━━━━━╯
      `;

      await client.sendTextWithMentions(chatId, royalFarewell);
    }
  },
};
