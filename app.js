
//global is global object

//var message = '';
//console.log(module);

//node has module scoped in that file
//every file is a module
//variables and fu

//const log = require('./logger');

//logger = 1;

//log('meesge');

//console.log(log);

const path = require('path');
var pathObj = path.parse(__filename)
var dirObj = path.parse(__dirname);
console.log(pathObj);
console.log(dirObj.dir);

const os = require('os');
var freeMemory = os.freemem();
var totalMemory = os.totalmem();
console.log('Free Memory' +freeMemory);

console.log('Total Memory' +  totalMemory);
console.log(`Total Memory ${totalMemory}`);

const fs = require('fs');

const files = fs.readdirSync('./');
console.log(files);

fs.readdir('./', function(err,files){
    if(err) console.log('Error', err);
    else console.log('Result', files, 'test');
});


//Always use asynchronous methods

const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a listener
emitter.on('messageLogged', (arg) => {
    console.log('Listener called', arg)
})



//Raise and event
//emitter.emit('messageLogged');
//emitter.emit('messageLogged', {id: 1, url: 'http://'});

//emitter.emit('logging', {data: 'test message'});

const Logger = require('./logger')
const logger = new Logger();

logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg)
})

logger.log('message');

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.write('Hello World');
        res.end();
    }
    if (req.url == '/api/course') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

//server.on('connection', (socket) => {
//    console.log('New connection');
//}) 

server.listen(3000);

console.log('Listening on port 3000...');