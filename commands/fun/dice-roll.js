const commando = require('discord.js-commando');

class DiceRoll extends commando.Command {
  constructor(client) {
    super(client,
      {
        name: 'roll',
        group: 'fun',
        memberName: 'roll',
        description: 'Rolls a dice',
      });
  }

  async run(msg) {
    const roll = Math.floor(Math.random() * 6) + 1;
    msg.channel.send(`You rolled a ${roll}!`);
  }
}

module.exports = DiceRoll;
