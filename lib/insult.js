#! /usr/bin/env node
var Hook = require('hook.io').Hook;

var insult = new Hook( {
  name: 'insult'
});

insult.connect({
  port: 5000,
  host: "localhost"
});

insult.on('ready', function(){
  insult.on('in.requestInsult', function(){
    insult.emit('out.getInsult', 'bugger off!');
  });
});

/*

"insults": [
  "%% is a wombat-loving heifer-puncher!",
  "%% is an unsightly trouser stain!",
  "%% is a venomous lily-licker!",
  "%% smells of elderberry wine!",
  "%% is like one of those callbacks that just won't fire.",
  "I slap thee verily with a trout quite large, %%!",
  "%% actually looks rather nice today."
],

*/
