const settings = require('./hydrate.json');
const Bot = require('../../modules/Bot.js');

module.exports = {
  name: 'Hydrate',
  description: 'Remind the streamer to hydrate',
  chat: true,
  event: false,
  type: 5004,
  command: 'hydrate',
  permissions: [],
  cooldown: 60,
  settings: true,
  credits: `Made by Rehkloos`,
  execute(client) {
    const minutes = settings.time;
    const TIME_BETWEEN_DRINKS = minutes * 60 * 1000;
    const startDate = Date().toString();

    if (!settings.active) {
      Bot.log('Please change active to true for command to work');
      client.sendMessage('Streamer disabled this command');
    } else {
      Bot.log(`starting hydration messages at ${startDate}`);
      client.sendMessage(
        `Great, I will make sure the streamer stays hydrated! 💧💧 (every ${settings.time} mins) `,
      );
      setInterval(() => {
        const dateTime = Date().toString();
        Bot.log(`sending message at ${dateTime}`);
        client.sendMessage(
          `Streamer, I recommend you drink some water! I will remind you again in ${settings.time} minutes`,
        );
      }, TIME_BETWEEN_DRINKS);
    }
  },
};