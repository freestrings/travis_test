const addon = require('../lib/index.js');

describe('addon test', () => {
    it('basic', (done) => {
        if (addon.hello() == 'aaa') {
            done();
        }
    });
});