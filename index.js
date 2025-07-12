import venom from 'venom-bot';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const {
  APP_NAME,
  OWNER_NUMBER,
  SESSION_ID
} = process.env;

venom
  .create({
    session: APP_NAME,
    multidevice: true,
    headless: true,
    disableWelcome: true,
    sessionToken: {
      waToken1: SESSION_ID
    }
  })
  .then((client) => start(client))
  .catch((err) => console.log(err));

function start(client) {
  client.onMessage(async (message) => {
    if (message.body === '!ping') {
      await client.sendText(message.from, `🏓 Pong from ${APP_NAME}`);
    }
    if (message.body === '!owner') {
      
