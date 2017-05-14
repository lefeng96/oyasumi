const commando = require('discord.js-commando');
const fun = require('../../lists/jpen-fun-dictionary.json');

class JPFun extends commando.Command {
  constructor(client) {
    super(client,
      {
        name: 'jpfun',
        group: 'fun',
        memberName: 'jpfun',
        description: 'Fun with Japanese and English!',
      });
  }

  randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  async run(msg) {
    msg.channel.send(this.randomElement(fun.words));
  }
}

module.exports = JPFun;
