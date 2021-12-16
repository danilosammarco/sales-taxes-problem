import { expect } from 'chai';
import { approx, getTax, getTaxAmount, getTotalPrice, round } from '../src/utils';

describe('round(price)', function () {
    context('Check return value', function() {
        it('Should return a number with 2 digits', function() {
            expect(round(1.192)).to.equal('1.19');
            expect(round(1.910)).to.equal('1.91');
            expect(round(1.99)).to.equal('1.99');
            expect(round(1.999)).to.equal('2.00');
        })
    })

    context('Check return type', function() {
        it('Should return a string', function() {
            expect(round(1.192)).to.be.a.string;
            expect(round(1.910)).to.be.a.string;
            expect(round(1.99)).to.be.a.string;
            expect(round(1.999)).to.be.a.string;
        })
    })
});

describe('getTax(isImported, isExempt)', function () {
    context('Check return value', function() {
        it('Should return 0, 5, 10 or 15', function() {
            expect(getTax(false, false)).to.equal(10);
            expect(getTax(false, true)).to.equal(0);
            expect(getTax(true, false)).to.equal(15);
            expect(getTax(true, true)).to.equal(5);
        })
    })

    context('Check return type', function() {
        it('Should return a number', function() {
            expect(getTax(false, false)).to.be.an('number');
            expect(getTax(false, true)).to.be.an('number');
            expect(getTax(true, false)).to.be.an('number');
            expect(getTax(true, true)).to.be.an('number');
        })
    })
});


describe('approx(price)', function () {
    context('Check return value', function() {
        it('Should return a number and the second digit have to be 0 or 5', function() {
            expect(approx(1.192)).to.equal(1.20);
            expect(approx(1.149)).to.equal(1.15);
            expect(approx(1.910)).to.equal(1.95);
            expect(approx(1.99)).to.equal(2.00);
            expect(approx(1.999)).to.equal(2.00);
            expect(approx(1.50)).to.equal(1.50);
        })
    })

    context('Check return type', function() {
        it('Should return a number', function() {
            expect(approx(1.192)).to.be.an('number');
            expect(approx(1.149)).to.be.an('number');
            expect(approx(1.910)).to.be.an('number');
            expect(approx(1.99)).to.be.an('number');
            expect(approx(1.999)).to.be.an('number');
            expect(approx(1.50)).to.be.an('number');
        })
    })
});

describe('getTaxAmount(price, isImported, isExempt)', function () {
    context('Check return value', function() {
        it('Should return tax amount', function() {
            expect(getTaxAmount(2.00, false, false)).to.equal(0.20);
            expect(getTaxAmount(2.00, false, true)).to.equal(0.00);
            expect(getTaxAmount(2.00, true, false)).to.equal(0.30);
            expect(getTaxAmount(2.00, true, true)).to.equal(0.10);
        })
    })

    context('Check return type', function() {
        it('Should return a number', function() {
            expect(getTaxAmount(2.00, false, false)).to.be.an('number');
            expect(getTaxAmount(2.00, false, true)).to.be.an('number');
            expect(getTaxAmount(2.00, true, false)).to.be.an('number');
            expect(getTaxAmount(2.00, true, true)).to.be.an('number');
        })
    })
});

describe('getTotalPrice(price, taxAmount, quantity)', function () {
    context('Check return value', function() {
        it('Should return the total price of a product', function() {
            expect(getTotalPrice(2.00, 0, 1)).to.equal(2.00);
            expect(getTotalPrice(2.00, 0.1, 1)).to.equal(2.10);
            expect(getTotalPrice(2.00, 0.2, 1)).to.equal(2.20);
            expect(getTotalPrice(2.00, 0.3, 1)).to.equal(2.30);
            expect(getTotalPrice(2.00, 0, 2)).to.equal(4.00);
            expect(getTotalPrice(2.00, 0.1, 2)).to.equal(4.20);
            expect(getTotalPrice(2.00, 0.2, 2)).to.equal(4.40);
            expect(getTotalPrice(2.00, 0.3, 2)).to.equal(4.60);
        })
    })

    context('Check return type', function() {
        it('Should return a number', function() {
            expect(getTotalPrice(2.00, 0, 1)).to.be.an('number');
            expect(getTotalPrice(2.00, 0.1, 1)).to.be.an('number');
            expect(getTotalPrice(2.00, 0.2, 1)).to.be.an('number');
            expect(getTotalPrice(2.00, 0.3, 1)).to.be.an('number');
            expect(getTotalPrice(2.00, 0, 2)).to.be.an('number');
            expect(getTotalPrice(2.00, 0.1, 2)).to.be.an('number');
            expect(getTotalPrice(2.00, 0.2, 2)).to.be.an('number');
            expect(getTotalPrice(2.00, 0.3, 2)).to.be.an('number');
        })
    })
});
