const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var crypto = require('crypto');

var config = require('./config');
var utils = require('./utils');
const { create, update } = require('mongoose/lib/model');
const { has } = require('mongoose/lib/helpers/populate/leanPopulateMap');
var sandbox = sinon.createSandbox();


describe('utils', () => {
    let secretStub, digestStub, updateStub, createHashStub, hash;

    beforeEach(() => {
        secretStub = sandbox.stub(config, 'secret').returns('fake_secret');
        digestStub = sandbox.stub().returns('ABC123');
        updateStub = sandbox.stub().returns({
            digest: digestStub,

        });

        createHashStub = sandbox.stub(crypto, 'createHash').returns({
            update: updateStub
        });

        hash = utils.getHash('foo');
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should return null if invalid string is passed', () => {
         sandbox.reset();
         
         let hash2 = utils.getHash(null);
         let hash3 = utils.getHash(123);
         let hash4 = utils.getHash({name: 'bar'});
         expect(hash2).to.be.null;
         expect(hash3).to.be.null;
         expect(hash4).to.be.null;

    });
});