// plugins/group.js

module.exports = async function handleGroupCommands(client, message) {
  const prefix = '.';
  const command = message.body?.split(' ')[0]?.toLowerCase();

  // Only allow group commands in groups
  if (!message.isGroupMsg) return;

  // .tagall - Mention all members
  if (command === `${prefix}tagall`) {
    const groupMetadata = await client.getGroupMembers(message.chatId);
    let text = `📢 *Tagging all members:*\n\n`;

    for (let member of groupMetadata) {
      text += `@${member.id.user} `;
    }

    await client.sendTextWithMentions(message.chatId, text);
  }

  // .kick - Remove mentioned user
  if (command === `${prefix}kick`) {
    if (!message.mentionedJidList.length) {
      return await client.sendText(message.chatId, "❌ Mention a user to kick.");
    }
    for (let user of message.mentionedJidList) {
      await client.removeParticipant(message.chatId, user);
    }
  }

  // .promote - Make user admin
  if (command === `${prefix}promote`) {
    for (let user of message.mentionedJidList) {
      await client.promoteParticipant(message.chatId, user);
    }
  }

  // .demote - Remove admin rights
  if (command === `${prefix}demote`) {
    for (let user of message.mentionedJidList) {
      await client.demoteParticipant(message.chatId, user);
    }
  }

  // .lockgc - Only admins can message
  if (command === `${prefix}lockgc`) {
    await client.setGroupToAdminsOnly(message.chatId, true);
    await client.sendText(message.chatId, "🔒 Group has been locked.");
  }

  // .unlockgc - Everyone can message
  if (command === `${prefix}unlockgc`) {
    await client.setGroupToAdminsOnly(message.chatId, false);
    await client.sendText(message.chatId, "🔓 Group has been unlocked.");
  }
};
