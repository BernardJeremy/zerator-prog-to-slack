# zerator-prog-to-slack
Node.JS script sending slack message with zerator's stream programmation

## Features
- Fetch current image link of ZeratoR programmation
- Send a message to a Slack webhook with the link

## Installation
- Simply clone this depot anywhere on your server.
- Copy [config.json.exemple](https://github.com/BernardJeremy/zerator-prog-to-slack/blob/master/config.json.example) file into a `config.json` file.
- Perform `npm install` command.
- Install a [incoming-webhooks](https://api.slack.com/incoming-webhooks) on your Slack.
- Add your link of the Slack incoming-webhooks in the `config.json` file.
- Optional (but recommended) : Install a task scheduler (like `CRON`) to run the script regularly.

## Configuration
- `APILink` : Link to the website API page (You shouldn't have to change this).
- `slackHookUrl` :  Link to your Slack incoming-webhooks.
- `slackHookName` :  Name to display when you will get notified on Slack.
