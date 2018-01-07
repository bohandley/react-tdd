// ES6 syntax
import * as sayHello from './sayHello.js'
window.addEventListener('load',()=>{
    document.getElementById('welcome-message').innerHTML = sayHello.greet('Brendan');
});

// console.log('Hello world!');
// var sayHello = require('./sayHello.js');
