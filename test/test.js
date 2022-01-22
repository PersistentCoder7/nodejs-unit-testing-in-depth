const assert = require('assert');

describe('file to be tested', () => {
   
    context('function to be tested', () => {
         //These functions are executed before executing any test and after completing all the tests.
        before(() => {
            console.log('===before');
        });

        after(() => {
            console.log('===after');
        });

        //These test are executed before and after each 'it' block of the test is executed.
        beforeEach(() => {
            console.log('===before each');
        });

        afterEach(() => {
            console.log('===after each');
        });


        it('should do something', () => {
            assert.equal(1,1);
        });

        it('should do something else', () => {
            assert.deepEqual({a:1, b:2},{a:1, b:2});
        });
        it('this is a pending test');
    });

    context('another function', () => {
        it('test a new function within the new context');
    });
});