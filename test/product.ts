import { expect } from "chai";
import { getIsExempt, getProducts } from "../src/utils";

describe('getIsExempt(name: string, exemptKeywords): boolean {', function () {
    context('Check return value', function() {
        it('Should return a number with 2 digits', function() {
            expect(getIsExempt(
                '1 music CD at 14.99', 
                ['chocolate', 'book']
            )).to.equal(false);
            expect(getIsExempt(
                '1 chocolate bar at 0.85', 
                ['chocolate', 'book']
            )).to.equal(true);
        })
    })

    context('Check return type', function() {
        it('Should return a string', function() {
            expect(getIsExempt(
                '1 music CD at 14.99', 
                ['chocolate', 'book']
            )).to.be.an('boolean');
            expect(getIsExempt(
                '1 chocolate bar at 0.85', 
                ['chocolate', 'book']
            )).to.be.an('boolean');
        })
    })
});

describe('getProducts(rows)', function () {
    context('Check return value', function() {
        it('Should return an array of products', function() {
            expect(getProducts([
                '2 book at 12.49',
                '1 music CD at 14.99',
                '1 chocolate bar at 0.85',
            ])).to.eql([
                {
                    isExempt: true,
                    isImported: false,
                    name: "book",
                    price: 12.49,
                    quantity: 2,
                    taxAmount: 0,
                    totalPrice: 24.98,
                },
                {
                    isExempt: false,
                    isImported: false,
                    name: "music CD",
                    price: 14.99,
                    quantity: 1,
                    taxAmount: 1.5,
                    totalPrice: 16.49,
                },
                {
                    isExempt: true,
                    isImported: false,
                    name: "chocolate bar",
                    price: 0.85,
                    quantity: 1,
                    taxAmount: 0,
                    totalPrice: 0.85
                }
            ]);
        })
    })
});