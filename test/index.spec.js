const addon = require('../lib/index.js');

describe('addon test', () => {
    it('basic', (done) => {
        if (addon.hello() == 'hello') {
            done();
        } else {
            done(new Error('Result: ' + addon.hello()))
        }
    });
});