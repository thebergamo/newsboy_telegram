'use strict';

var Bot = require('telegram-api');
var Message = require('telegram-api/types/Message');

if (!process.env.TELEGRAM) {
  throw new Error('You must set TELEGRAM environment variable before run!');
}

var bot = new Bot({
  token: process.env.TELEGRAM 
});
 

bot.start();

bot.command('register', function (message) {
  console.log('Your chatID: ', message.chat.id);
  var msg = new Message().text('Hey! You\'re registred! Your chatId is: ' + message.chat.id).to(message.chat.id);

  bot.send(msg);
  process.exit();
});
