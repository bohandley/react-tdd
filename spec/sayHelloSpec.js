const sayHello = require('../src/scripts/sayHello.js');

describe('Greet', function() { 
    it('concats Hello and a name', function() {
        let actual = sayHello.greet('World');     
        let expected = 'Hello, World';
        expect(actual).toEqual(expected); 
    });

    it('returns Hello, Friend when no argument is passed', function() {
        let actual = sayHello.greet();
        let expected = 'Hello, Friend';
        expect(actual).toEqual(expected);
    });
});