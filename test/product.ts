import { expect } from 'chai';
import { Product } from '../src/Product';

describe('Product()', function () {
    context('2 book at 12.49', function () {
        const product = new Product('book', 12.49, 2);

        it('Check the name', function () {
            expect(product.name).to.be.eq('book');
        })
        it('Check the price', function () {
            expect(product.price).to.be.eq(12.49);
        })
        it('Check the quantity', function () {
            expect(product.quantity).to.be.eq(2);
        })
        it('Check the isExempt', function () {
            expect(product.isExempt).to.be.eq(true);
        })
        it('Check the isImported', function () {
            expect(product.isImported).to.be.eq(false);
        })
        it('Check the taxAmount', function () {
            expect(product.taxAmount.toFixed(2)).to.be.eq('0.00');
        })
        it('Check the totalPrice', function () {
            expect(product.totalPrice.toFixed(2)).to.be.eq('24.98');
        })
    });
    context('1 music CD at 14.99', function () {
        const product = new Product('music CD', 14.99, 1);

        it('Check the name', function () {
            expect(product.name).to.be.eq('music CD');
        })
        it('Check the price', function () {
            expect(product.price).to.be.eq(14.99);
        })
        it('Check the quantity', function () {
            expect(product.quantity).to.be.eq(1);
        })
        it('Check the isExempt', function () {
            expect(product.isExempt).to.be.eq(false);
        })
        it('Check the isImported', function () {
            expect(product.isImported).to.be.eq(false);
        })
        it('Check the taxAmount', function () {
            expect(product.taxAmount.toFixed(2)).to.be.eq('1.50');
        })
        it('Check the totalPrice', function () {
            expect(product.totalPrice.toFixed(2)).to.be.eq('16.49');
        })
    });
    context('1 chocolate bar at 0.85', function () {
        const product = new Product('chocolate bar', 0.85, 1);

        it('Check the name', function () {
            expect(product.name).to.be.eq('chocolate bar');
        })
        it('Check the price', function () {
            expect(product.price).to.be.eq(0.85);
        })
        it('Check the quantity', function () {
            expect(product.quantity).to.be.eq(1);
        })
        it('Check the isExempt', function () {
            expect(product.isExempt).to.be.eq(true);
        })
        it('Check the isImported', function () {
            expect(product.isImported).to.be.eq(false);
        })
        it('Check the taxAmount', function () {
            expect(product.taxAmount.toFixed(2)).to.be.eq('0.00');
        })
        it('Check the totalPrice', function () {
            expect(product.totalPrice.toFixed(2)).to.be.eq('0.85');
        })
    });
    context('1 imported box of chocolates at 10.00', function () {
        const product = new Product('imported box of chocolates', 10.00, 1);

        it('Check the name', function () {
            expect(product.name).to.be.eq('imported box of chocolates');
        })
        it('Check the price', function () {
            expect(product.price).to.be.eq(10.00);
        })
        it('Check the quantity', function () {
            expect(product.quantity).to.be.eq(1);
        })
        it('Check the isExempt', function () {
            expect(product.isExempt).to.be.eq(true);
        })
        it('Check the isImported', function () {
            expect(product.isImported).to.be.eq(true);
        })
        it('Check the taxAmount', function () {
            expect(product.taxAmount.toFixed(2)).to.be.eq('0.50');
        })
        it('Check the totalPrice', function () {
            expect(product.totalPrice.toFixed(2)).to.be.eq('10.50');
        })
    });
    context('1 imported bottle of perfume at 47.50', function () {
        const product = new Product('imported bottle of perfume', 47.50, 1);

        it('Check the name', function () {
            expect(product.name).to.be.eq('imported bottle of perfume');
        })
        it('Check the price', function () {
            expect(product.price).to.be.eq(47.50);
        })
        it('Check the quantity', function () {
            expect(product.quantity).to.be.eq(1);
        })
        it('Check the isExempt', function () {
            expect(product.isExempt).to.be.eq(false);
        })
        it('Check the isImported', function () {
            expect(product.isImported).to.be.eq(true);
        })
        it('Check the taxAmount', function () {
            expect(product.taxAmount.toFixed(2)).to.be.eq('7.15');
        })
        it('Check the totalPrice', function () {
            expect(product.totalPrice.toFixed(2)).to.be.eq('54.65');
        })
    });
    context('1 imported bottle of perfume at 27.99', function () {
        const product = new Product('imported bottle of perfume', 27.99, 1);

        it('Check the name', function () {
            expect(product.name).to.be.eq('imported bottle of perfume');
        })
        it('Check the price', function () {
            expect(product.price).to.be.eq(27.99);
        })
        it('Check the quantity', function () {
            expect(product.quantity).to.be.eq(1);
        })
        it('Check the isExempt', function () {
            expect(product.isExempt).to.be.eq(false);
        })
        it('Check the isImported', function () {
            expect(product.isImported).to.be.eq(true);
        })
        it('Check the taxAmount', function () {
            expect(product.taxAmount.toFixed(2)).to.be.eq('4.20');
        })
        it('Check the totalPrice', function () {
            expect(product.totalPrice.toFixed(2)).to.be.eq('32.19');
        })
    });
    context('1 bottle of perfume at 18.99', function () {
        const product = new Product('bottle of perfume', 18.99, 1);

        it('Check the name', function () {
            expect(product.name).to.be.eq('bottle of perfume');
        })
        it('Check the price', function () {
            expect(product.price).to.be.eq(18.99);
        })
        it('Check the quantity', function () {
            expect(product.quantity).to.be.eq(1);
        })
        it('Check the isExempt', function () {
            expect(product.isExempt).to.be.eq(false);
        })
        it('Check the isImported', function () {
            expect(product.isImported).to.be.eq(false);
        })
        it('Check the taxAmount', function () {
            expect(product.taxAmount.toFixed(2)).to.be.eq('1.90');
        })
        it('Check the totalPrice', function () {
            expect(product.totalPrice.toFixed(2)).to.be.eq('20.89');
        })
    });
    context('1 packet of headache pills at 9.75', function () {
        const product = new Product('packet of headache pills', 9.75, 1);

        it('Check the name', function () {
            expect(product.name).to.be.eq('packet of headache pills');
        })
        it('Check the price', function () {
            expect(product.price).to.be.eq(9.75);
        })
        it('Check the quantity', function () {
            expect(product.quantity).to.be.eq(1);
        })
        it('Check the isExempt', function () {
            expect(product.isExempt).to.be.eq(true);
        })
        it('Check the isImported', function () {
            expect(product.isImported).to.be.eq(false);
        })
        it('Check the taxAmount', function () {
            expect(product.taxAmount.toFixed(2)).to.be.eq('0.00');
        })
        it('Check the totalPrice', function () {
            expect(product.totalPrice.toFixed(2)).to.be.eq('9.75');
        })
    });
    context('3 box of imported chocolates at 11.25', function () {
        const product = new Product('box of imported chocolates', 11.25, 3);

        it('Check the name', function () {
            expect(product.name).to.be.eq('box of imported chocolates');
        })
        it('Check the price', function () {
            expect(product.price).to.be.eq(11.25);
        })
        it('Check the quantity', function () {
            expect(product.quantity).to.be.eq(3);
        })
        it('Check the isExempt', function () {
            expect(product.isExempt).to.be.eq(true);
        })
        it('Check the isImported', function () {
            expect(product.isImported).to.be.eq(true);
        })
        it('Check the taxAmount', function () {
            expect(product.taxAmount.toFixed(2)).to.be.eq('1.80');
        })
        it('Check the totalPrice', function () {
            expect(product.totalPrice.toFixed(2)).to.be.eq('35.55');
        })
    });
});
