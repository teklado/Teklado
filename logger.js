console.log(__filename);
console.log(__dirname)

const EventEmitter = require('events');
//const emitter = new EventEmitter();

class Logger extends EventEmitter {
    log(message) {
        //Send HTTP
        console.log(message);
        this.emit('messageLogged', {id: 1, url: 'http://'});
    
    }
}

var url = 'http://mylogger.io/log';



module.exports = Logger;
// keep private 
//module.exports.endPointurl = url;

//console.log(module);

