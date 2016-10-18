const fs = require('fs');

const request = require('request');
const Slack = require('slack-node');

// Retrieve config
let link = require('./config.json').APILink;
let slackUrl = require('./config.json').slackHookUrl;
let slackName = require('./config.json').slackHookName;

//Return current Date
function getNowDate() {
  var d = new Date();
  var month = d.getMonth()+1;
  var day = d.getDate();

  var output = (day<10 ? '0' : '') + day + "-"
              + (month<10 ? '0' : '') + month + '-'
              + d.getFullYear();

  return output;
};


// Send the slack message to the config's webhook
function sendSlackMessage(data) {
  let text = 'Zerator\'s stream programmation : ';
  text += '<' + data.acf.thumbnail + '|Week ' + getNowDate() + '>';

  let msgParameters = {
    username: slackName,
    text: text,
  };

  let slack = new Slack();
  slack.setWebhook(slackUrl);
  slack.webhook(msgParameters, function (err, response) {
    if (response.statusCode != 200) {
      console.log(err, response);
    }
  });
}

// Request data to the website API
function sendProg() {
  request(link, function (err, resp, html) {
    if (err) return console.error(err);

    let data = JSON.parse(html);
    sendSlackMessage(data);
  });
}

sendProg();
