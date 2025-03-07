//console.log(process.env.USERNAME);



/*
const {EventEmitter} = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('lunch', () => {
    console.log('Hello from event emitter')
});


eventEmitter.emit('lunch');
eventEmitter.emit('lunch');
*/




/*
const { readFile, readFileSync } = require('fs');

const txt = readFileSync('./hello.txt', 'utf8');

console.log(txt);
console.log('do this ASAP');
*/





/*
const { readFile, readFileSync } = require('fs');

readFile('./hello.txt', 'utf8', (err, txt) => {
    console.log(txt);
});

console.log('do this ASAP');
*/



/*
const { readFile } = require('fs').promises;

async function hello() {
    const file = await readFile('./hello.txt', 'utf8');
};
*/



/*
const myModule = require('./my-module');

console.log(myModule);
*/





/*
const express = require('express');
const { readFile } = require('fs');

const app = express()

app.get('/', (request, response) => {

    readFile('./home.html', 'utf8', (err, html) => {

        if(err){
            response.status(500).send('sorry, out of order')
        }

        response.send(html);

    })


});

app.listen(process.env.PORT || 3000, console.log('App available on http://localhost:3000'))
*/

const http = require('http');
const https = require('https');
const express = require('express');
const { readFile } = require('fs').promises;
const app = express()


app.get('/', async (require, response) => {

    response.send(await readFile('./home.html', 'utf8'));

});

http.createServer(app).listen(8080);
https.createServer(app).listen(443);



