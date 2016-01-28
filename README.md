# newsboy_telegram


# Idea
Sometimes is very useful have someone more updated with news about your favorite framework or something else to tell you. Newsboy is your guy for that!

# Getting Started
### Step 1 - Create necesssary accounts
To start using **NewsBoy** is necessary create an account in [Iftt][iftt-url] and [Webstack][webstack-url].
In these services, you will configure the steps to running **NewsBoy**.

### Step 2 - Clone this repo
```sh
git clone git@github.com:thebergamo/newsboy_telegram.git

npm install

wt init # follow the steps

MONGO_URL=YOUR_MONGO_URL npm run deploy
```
P.S: You need set a mongodb url to store news for never send the same news 2 or more times.

### Step 3 - Create a new bot in Telegram
In this step you need have the [Telegram App][telegram-url] in your computer or smartphone to continue.

After installed the app, you need add the [BotFather][botfather-url]. The **BotFather** is a bot to help you to create new bots, chat with BotFather to create your awesome **NewsBoy** bot.

PS: One message per line above. Or just follow the steps in chat.
```
/newbot <enter>
your_awesome_bot_name <enter>
your_awesome_unique_username <enter> # the bot username need to end in "bot"
```

When your bot is created you must copy the access token of your bot for futher consume.

The link to start chatting with your bot is similar this: https://telegram.me/your_awesome_unique_username

### Step 4 - Discover your ChatID
You need discover your ChatID for receiving the messages.

```sh
TELEGRAM=YOUR_TOKEN npm run discover-chatId
```

After running the script, you need enter the chat and send this the `/register` after, your ChatId will show in your terminal. **Copy this!**

### Step 5 - Create a new Receipe in Iftt
In Iftt, you need create a new Receipe to discover new tweets with awesome links corelated with your subject.

* Create new Recipe 
* ![New Recipe][new-recipe-url]
* Click in **THIS** 
* ![Click This][this-url]
* Find Twitter 
* ![Find Twitter][twitter-url]
* Choose action: **New tweet from search** 
* ![Twitter Search][twitter-search-url]
* Your search (This works like Twitter's Search) 
* ![Search Box][search-box-url]
* Click **That** 
* ![Click That][that-url]
* Find **Maker**
* ![Choose Maker][maker-url]
* Choose action: **Make a web request**
* ![Web Request][maker-action-url]
* Put your url getted in `npm run deploy` and add some params: `&FirstLinkUrl={{FirstLinkUrl}}&UserName={{UserName}}&CHATID=YOUR_CHATID&TELEGRAM=YOUR_TOKEN`. Just replace YOUR_CHATID for the copied before and YOUR_TOKEN given by the BotFather. 
* ![URL][url-box-url]
* Finally DONE!
* ![DONE!][done-url]

### Step 6 - Enjoy your telegram NewsBoy!

### License

Copyright (c) 2015, Marcos Bérgamo <marcos@thedon.com.br>

Permission to use, copy, modify, and/or distribute this software for any purpose
with or without fee is hereby granted, provided that the above copyright notice
and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS
OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF
THIS SOFTWARE.

[iftt-url]: https://ifttt.com
[webstack-url]: https://webstack.io
[telegram-url]: https://telegram.org
[botfather-url]: https://telegram.me/botfather
[new-recipe-url]: http://puu.sh/mNkcH/77090ede4f.png
[this-url]: http://puu.sh/mNkdW/d123a4ac98.png
[twitter-url]: http://puu.sh/mNkga/437c5160d9.png
[twitter-search-url]: http://puu.sh/mNkkH/162f9df84a.png
[search-box-url]: http://puu.sh/mNksP/e7c495ffb7.png
[that-url]: http://puu.sh/mNkuF/bebd889c62.png
[maker-url]: http://puu.sh/mNkyI/cbb223b11f.png
[maker-action-url]: http://puu.sh/mNkzU/4a68406afd.png
[url-box-url]: http://puu.sh/mNkLW/0f8d6baa16.png
[done-url]: http://puu.sh/mNkRy/2a850c6498.png
