import React from 'react';
import TestUtils from 'react-dom/test-utils';
import SayHello from '../src/scripts/SayHello.js';

describe('Greet', function(){
    it('renders without problems', function(){
        const sayhello = TestUtils.renderIntoDocument(<SayHello />);
        expect(sayhello).toEqual(jasmine.anything());
    });
});

// // ES6 syntax
// import * as sayHello from '../src/scripts/sayHello.js';
// // const sayHello = require('../src/scripts/sayHello.js');

// describe('Greet', function() { 
//     it('concats Hello and a name', function() {
//         let actual = sayHello.greet('World');     
//         let expected = 'Hello, World';
//         expect(actual).toEqual(expected); 
//     });

//     it('returns Hello, Friend when no argument is passed', function() {
//         let actual = sayHello.greet();
//         let expected = 'Hello, Friend';
//         expect(actual).toEqual(expected);
//     });
// });