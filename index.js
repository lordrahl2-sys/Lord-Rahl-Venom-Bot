const venom = require('venom-bot');
const fs = require('fs');
const path = require('path');

// Import plugins
const startupPlugin = require('./plugins/startup');
const welcomePlugin = require('./plugins/welcome');
const aiPlugin = require('./plugins/ai');
const antideletePlugin = require('./plugins/antidelete');
const menuPlugin = require('./plugins/menu');
const alivePlugin = require('./plugins/alive');
const pingPlugin = require('./plugins/ping');

// Initialize Venom
venom
  .create({
    session: 'lord-rahl-session', // folder where session will be stored
    multidevice: true,
    headless: true,
    useChrome: false,
    disableWelcome: true,
  })
  .then(async (client) => {
    console.log("✅ Venom client created successfully.");

    // Run startup message plugin
    await startupPlugin(client);

    // Welcome new users (optional)
    client.onGlobalParticipantsChanged((event) => {
      welcomePlugin(client, event);
    });

    // Anti-delete functionality
    client.onMessageDeleted((message) => {
      antideletePlugin(client, message);
    });

    // Command handler
    client.onMessage(async (message) => {
      try {
        if (!message.body || !message.from) return;

        const prefix = '.'; // Can be dynamically set or configured
        const args = message.body.trim().split(/ +/);
        const command = args[0].toLowerCase();

        // Sample command handlers
        if (command === `${prefix}ping`) {
          await pingPlugin(client, message);
        }

        if (command === `${prefix}menu`) {
          await menuPlugin(client, message);
        }

        if (command === `${prefix}alive`) {
          await alivePlugin(client, message);
        }

        if (command === `${prefix}ai`) {
          const query = args.slice(1).join(' ');
          await aiPlugin(client, message, query);
        }

        // Add more commands here, like group management, etc.
      } catch (err) {
        console.error("❌ Error handling message:", err);
      }
    });
  })
  .catch((err) => {
    console.error("❌ Venom failed to initialize:", err);
  });
