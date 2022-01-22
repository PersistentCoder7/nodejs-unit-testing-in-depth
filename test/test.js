const assert = require('assert');

describe('file to be tested', () => {
    context('function to be tested', () => {
        it('should do something', () => {
            assert.equal(1,1);
        });

        it('should do something else', () => {
            assert.deepEqual({a:1, b:2},{a:1, b:2});
        });
        it('this is a pending test');
    });
});