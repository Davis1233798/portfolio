// 引用linebot SDK
const linebot = require('linebot');
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();
//讀入API KEY 實作
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function ask(prompt) {
    const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
const answer = response.data.choices[0].text;
console.log(answer);
}

// 用於辨識Line Channel的資訊
var bot = linebot({
  channelId: process.env.CHANNELID,
  channelSecret: process.env.SECRET,
  channelAccessToken: process.env.ACCESSTOKEN
});

// 當有人傳送訊息給Bot時
bot.on('message', function (event) {
  // event.message.text是使用者傳給bot的訊息
  let replyMSG = ask(event.message.text)
  // 使用event.reply(要回傳的訊息)方法可將訊息回傳給使用者
  event.reply(replyMSG).then(function (data) {
    // 當訊息成功回傳後的處理
  }).catch(function (error) {
    // 當訊息回傳失敗後的處理
  });
});



// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 3000, function () {
    console.log('[BOT已準備就緒]');
});