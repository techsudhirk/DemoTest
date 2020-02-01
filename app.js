// const path = require('path');
// var pathObj = path.parse(__filename)
// console.log(pathObj);
const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a listener
emitter.on('messageLogged', (arg)=>{
    console.log('listener called',arg);
})

//Raise an event
emitter.emit('messageLogged',5);