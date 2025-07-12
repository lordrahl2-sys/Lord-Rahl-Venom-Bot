module.exports = async function group(client, message) {
  const isGroup = message.isGroupMsg;
  const command = message.body.toLowerCase();

  if (!isGroup) return;

  if (command === '.kick' && message.mentionedJidList.length > 0) {
    for (let user of message.mentionedJidList) {
      await client.removeParticipant(message.chatId, user);
    }
  }

  if (command === '.promote' && message.mentionedJidList.length > 0) {
    for (let user of message.mentionedJidList) {
      await client.promoteParticipant(message.chatId, user);
    }
  }

  if (command === '.demote' && message.mentionedJidList.length > 0) {
    for (let user of message.mentionedJidList) {
      await client.demoteParticipant(message.chatId, user);
    }
  }
};
