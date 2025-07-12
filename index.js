// 👑 Lord Rahl Bot - index.js  
const venom = require('venom-bot');

// Royal Plugins  
const startupPlugin = require('./plugins/startup');
const welcomePlugin = require('./plugins/welcome');
const goodbyePlugin = require('./plugins/goodbye');
const antiDeletePlugin = require('./plugins/antidelete');
const groupPlugin = require('./plugins/group');
const alivePlugin = require('./plugins/alive');
const menuPlugin = require('./plugins/menu');
const pingPlugin = require('./plugins/ping');

venom
  .create({
    session: 'lord-rahl-session',
    multidevice: true,
    headless: true,
    useChrome: false,
    disableWelcome: true,
  })
  .then(async (client) => {
    console.log("👑 Rahl: Throne established. Bot is alive.");

    // 🌟 Startup Blessing
    await startupPlugin(client);

    // 🎯 Command Center
    client.onMessage(async (message) => {
      try {
        if (!message.body || !message.from) return;

        const prefix = '.';
        const args = message.body.trim().split(/ +/);
        const command = args[0].toLowerCase();
        const text = args.slice(1).join(' ');

        // ⚡ Royal Commands
        if (command === `${prefix}ping`) return pingPlugin(client, message);
        if (command === `${prefix}alive`) return alivePlugin(client, message);
        if (command === `${prefix}menu`) return menuPlugin(client, message);

        // 🛡 Group Fortress
        if (message.isGroupMsg) await groupPlugin(client, message);

        // 📜 Goodbye Setup
        if (command === `${prefix}setgoodbye`)
          return goodbyePlugin.handleGoodbyeCommand(client, message);

      } catch (err) {
        console.error("⚠️ Rahl Error:", err);
      }
    });

    // 🕵️‍♂️ Anti-Delete Watcher
    client.onDeletedMessage((msg) => antiDeletePlugin(client, msg));

    // 🎉 Entrance & Exit
    client.onGlobalParticipantsChanged(async (event) => {
      await welcomePlugin(client, event);
      await goodbyePlugin.sendGoodbyeIfSet(client, event);
    });
  })
  .catch((err) => {
    console.error("❌ Royal Failure:", err);
  });
