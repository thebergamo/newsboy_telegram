'use latest';

const url = require('url');
const Bot = require('telegram-api');
const Message = require('telegram-api/types/Message');
const MongoClient = require('mongodb').MongoClient;

function storeNews (link, acc, db, cb) {
  const newsInfo = url.parse(link);
  const news = { t_acc: acc, link: newsInfo.href, host: newsInfo.host, path: newsInfo.pathname };
  const options = { upsert: true };
  const update = { $set: news, $inc: { send: 1 } };
  
  db.collection('news')
    .updateOne({host: news.host, path: news.path}, update, options, (err, result) => cb(err, result));
}

module.exports = (ctx, done) => {
  let fired = false;

  const bot = new Bot({ token: ctx.data.TELEGRAM});

  MongoClient.connect(ctx.data.MONGO_URL, (err, db) => {
    if (err) {
      console.log('ERROR ON CONNECT DB', err);
      return done();
    }
    
    console.log('start');
    bot.start();

      storeNews(ctx.data.FirstLinkUrl, ctx.data.UserName, db, (err, result) => {
        if (err) {
          console.log('STORE NEWS ERROR', err);
          return done();
        }

        if (result.result.nModified > 0) {
          console.log('MESSAGE SHIPED PREVIOUSLY!');
          return done();
        }

        const msg = new Message()
        .text(ctx.data.UserName + ' send a link to you: ' + ctx.data.FirstLinkUrl)
        .to(ctx.data.CHATID);

        console.log('MSG SENDED: ', msg);
        bot.send(msg);
      });
  });
};
