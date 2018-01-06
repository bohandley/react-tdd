console.log('Hello world!');
var sayHello = require('./sayHello.js');
document.getElementById('welcome-message').innerHTML = sayHello.greet('Your name');