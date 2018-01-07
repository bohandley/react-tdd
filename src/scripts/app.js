console.log('Hello world!');
var sayHello = require('./sayHello.js');
window.addEventListener('load',()=>{
    document.getElementById('welcome-message').innerHTML = sayHello.greet('Brendan');
});