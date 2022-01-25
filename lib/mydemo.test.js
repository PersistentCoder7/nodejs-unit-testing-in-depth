const chai = require('chai');
const { exp } = require('prelude-ls');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const rewire = require('rewire');

chai.use(sinonChai);

chai.use(chaiAsPromised);
var demo = rewire('./demo');

describe('demo', () => {
    context('add', () => {
        it('should add two numbers', () => {
            expect(demo.add(1, 2)).to.equal(3);
        });
    });
    context('callback add', () => {
        it('should test the callback', (done) => {
            demo.addCallback(1, 2, (err, result) => {
                expect(err).to.not.exist;
                expect(result).to.be.equal(3);
                done();
            })
        });
    });

    context('test promise', () => {
        it('should add with a promise callback', (done) => {
            demo.addPromise(1, 2).then(result => {
                expect(result).to.be.equal(3);
                done();
            }).catch(err => {
                console.log('exception was caught');
                done(err);
            })
        });
        it('should test promise with async await', async () => {
            let result = await demo.addPromise(1, 2);
            expect(result).to.be.equal(3);
        });

        it('should test promise with chai as promised', async () => {
            await expect(demo.addPromise(1, 2)).to.eventually.equal(3);
        });
    });

    context('test doubles', () => {
        it('should spy on log', () => {
            let spy = sinon.spy(console, 'log');
            demo.foo();
            expect(spy.calledOnce).to.be.true;
            expect(spy).to.have.been.calledOnce;
            spy.restore();
        });
        it('should stub console.warn', () => {
            let stub = sinon.stub(console,'warn').callsFake(()=> {console.log('message from stub')});
            demo.foo();

            expect(stub).to.have.been.calledOnce;
            expect(stub).to.have.been.calledWith('console.warn was called');
        });
    });
    context('stub private function', () => {
        it('should stub createfile', async() => {
            let createStub = sinon.stub(demo, 'createFile').resolves('create_stub');
            let callStub = sinon.stub().resolves('calldb_stub');

            demo.__set__('callDB',callStub);

            let result = await demo.bar('text.txt');

            expect(result).to.equal('calldb_stub');
            expect(createStub).to.have.been.calledOnce;
            expect(createStub).to.have.been.calledWith('text.txt');
            expect(callStub).to.have.been.calledOnce;
            
        });
    });
});