const fs = require('fs');
const readline = require('readline');
const Discord = require('discord.js');
const spawn = require('child_process').spawn;

class DiscordSfx {
    constructor() {
        this.client = new Discord.Client();
    }

    loadConfig() {
        return new Promise((resolve, reject) => {
            fs.readFile('config.json', (err, data) => {
                if(err) return reject(err);
                this.config = JSON.parse(data.toString());
                return resolve();
            });
        });
    }

    async connectDiscord() {
        await this.client.login(this.config.token);
        console.log('Connected to Discord');
        let chan = this.client.channels.get(this.config.channel);
        this.channel = await chan.join();
        console.log('Connected to channel');
    }

    createLogListener() {
        this.childProc = spawn('/usr/bin/tail', ['-n', '0', '-f', this.config.log]);
        this.logRl = readline.createInterface({input: this.childProc.stdout});
        this.logRl.on('line', (line) => this.onLogLine(line));

        this.childProc.on('error', (err) => {
            console.log(`Child process spawn error: ${err}`)
        });

        this.childProc.stderr.on('data', (data) => console.log(data.toString()));

        this.childProc.on('exit', (code) => {
            console.log(`Log listener died (code ${code}), respawning...`);
            this.destroyLogListener();
            this.createLogListener();
        });
    }

    destroyLogListener() {
        this.logRl.close();
        this.childProc.kill();
        this.childProc.removeAllListeners();
    }

    onLogLine(line) {
        console.log('Received log line ' + line);
        const split = line.split(' ');

        // Parse INFO logs
        if(split.length > 4 && split[1] + split[2] == '[Serverthread/INFO]:') {
            const content = split.slice(3).join(' ');
            for(let def of this.config.sounds) {
                if(def.type === 'info' && content.match(def.trigger)) {
                    console.log(`Playing file ${def.file}`)
                    this.channel.playFile(def.file);
                }
            }
        }
    }

    async run() {
        await this.loadConfig();
        await this.connectDiscord();
        this.createLogListener();
    }
}

const discordSfx = new DiscordSfx();
discordSfx.run();