// index.js
const venom = require('venom-bot');
const fs = require('fs');
const path = require('path');

// Import plugins (you can add more later)
const startupPlugin = require('./plugins/startup');
// const welcomePlugin = require('./plugins/welcome'); // optional later

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

    // Command handler
    client.onMessage(async (message) => {
      try {
        if (!message.body || !message.from) return;

        const prefix = '.';
        const args = message.body.trim().split(/ +/);
        const command = args[0].toLowerCase();

        // Sample command handlers
        if (command === `${prefix}ping`) {
          await client.sendText(message.from, '🏓 Pong! Rahl Bot is awake.');
        }

        if (command === `${prefix}menu`) {
          const menuText = `
╭━━━〔 *👑 Rahl Command Menu* 〕━━━╮
┃ ✦ .ping  – Bot Status
┃ ✦ .menu  – Show this menu
┃ ✦ .alive – Show bot info
┃ ✦ .ai [msg] – Ask AI assistant
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯
          `;
          await client.sendText(message.from, menuText);
        }

        if (command === `${prefix}alive`) {
          await client.sendText(message.from, "👑 Lord Rahl is Alive and Listening!");
        }

        // Add more commands here
      } catch (err) {
        console.error("❌ Error handling message:", err);
      }
    });
  })
  .catch((err) => {
    console.error("❌ Venom failed to initialize:", err);
  });
