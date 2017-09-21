# discord-sfx

A simple Discord bot to play sound files over a voice channel when new lines
in a log file match predefined regexps. Mainly to be used with Minecraft (see
example).

## Getting started

1. Create a Discord Bot API application
2. Authorise it to your server with ```https://discordapp.com/oauth2/authorize?client_id=CLIENT_ID&scope=bot&permissions=3148800```, replacing CLIENT_ID with your bot's client ID.
3. Copy config.example.json to config.json, substituting the token with your bot's token, channel ID with your voice channel ID, and log with the path to your game log.
4. Add sound triggers in the format provided.

## LICENSE

Copyright 2017 Nick Vella <nick@nxk.me>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.