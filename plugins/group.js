// plugins/group.js

module.exports = async function handleGroupCommands(client, message) {
  const prefix = '.';
  const command = message.body?.split(' ')[0]?.toLowerCase();

  // Only allow group commands in group chats
  if (!message.isGroupMsg) return;

  // 📣 .tagall – Mention all group members
  if (command === `${prefix}tagall`) {
    const groupMetadata = await client.getGroupMembers(message.chatId);
    let royalMessage = `
👑 *Royal Decree:*
📢 Summoning all nobles in the realm...
    `;

    for (let member of groupMetadata) {
      royalMessage += `\n@${member.id.user}`;
    }

    await client.sendTextWithMentions(message.chatId, royalMessage);
  }

  // ⚔️ .kick – Remove mentioned user(s)
  if (command === `${prefix}kick`) {
    if (!message.mentionedJidList.length) {
      return await client.sendText(
        message.chatId,
        '🚫 *Royal Notice:* Please mention the rogue to banish.'
      );
    }

    for (let user of message.mentionedJidList) {
      await client.removeParticipant(message.chatId, user);
    }

    await client.sendText(message.chatId, '🛡️ The mentioned warrior(s) have been exiled.');
  }

  // 🛡️ .promote – Grant noble status (admin)
  if (command === `${prefix}promote`) {
    for (let user of message.mentionedJidList) {
      await client.promoteParticipant(message.chatId, user);
    }

    await client.sendText(message.chatId, '🎖️ Rise, noble one. You have been knighted.');
  }

  // 🛡️ .demote – Strip noble status (remove admin)
  if (command === `${prefix}demote`) {
    for (let user of message.mentionedJidList) {
      await client.demoteParticipant(message.chatId, user);
    }

    await client.sendText(message.chatId, '⚔️ Royal order: Noble rights revoked.');
  }

  // 🔒 .lockgc – Restrict messaging to royals only (admins)
  if (command === `${prefix}lockgc`) {
    await client.setGroupToAdminsOnly(message.chatId, true);
    await client.sendText(message.chatId, '🔒 *Kingdom Shielded:* Only royals may speak.');
  }

  // 🔓 .unlockgc – Allow all citizens to speak
  if (command === `${prefix}unlockgc`) {
    await client.setGroupToAdminsOnly(message.chatId, false);
    await client.sendText(message.chatId, '🔓 *Kingdom Opened:* All voices are welcome.');
  }
};
