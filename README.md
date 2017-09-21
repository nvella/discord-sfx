# discord-sfx

A simple Discord bot to play sound files over a voice channel when new lines
in a log file match predefined regexps. Mainly to be used with Minecraft (see
example).

## Getting started

1. Create a Discord Bot API application
2. Authorise it to your server with ```https://discordapp.com/oauth2/authorize?client_id=CLIENT_ID&scope=bot&permissions=3148800```, replacing CLIENT_ID with your bot's client ID.
3. Copy config.example.json to config.json, substituting the token with your bot's token, channel ID with your voice channel ID, and log with the path to your game log.
4. Add sound triggers in the format provided.
