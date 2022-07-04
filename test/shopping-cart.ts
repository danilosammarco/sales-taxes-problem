import { expect } from 'chai';
import { ShoppingCart } from '../src/ShoppingCart';

describe('ShoppingCart()', function () {
    context('test1.txt', function () {
        const products = [
            '2 book at 12.49',
            '1 music CD at 14.99',
            '1 chocolate bar at 0.85',
        ];

        it('Check the taxAmount', function () {
            const shoppingCart = new ShoppingCart();

            shoppingCart.postProducts(products);

            expect(shoppingCart.taxAmount.toFixed(2)).to.be.eq('1.50');
        })

        it('Check the total', function () {
            const shoppingCart = new ShoppingCart();

            shoppingCart.postProducts(products);

            expect(shoppingCart.total.toFixed(2)).to.be.eq('42.32');
        })

        it('Check the receipt', function () {
            const shoppingCart = new ShoppingCart();

            shoppingCart.postProducts(products);

            expect(shoppingCart.getReceipt()).to.have.all.members(['2 book: 24.98', '1 music CD: 16.49', '1 chocolate bar: 0.85', 'Sales Taxes: 1.50', 'Total: 42.32']);
        })
    });
    context('test2.txt', function () {
        const products = [
            '1 imported box of chocolates at 10.00',
            '1 imported bottle of perfume at 47.50',
        ];

        it('Check the taxAmount', function () {
            const shoppingCart = new ShoppingCart();

            shoppingCart.postProducts(products);

            expect(shoppingCart.taxAmount.toFixed(2)).to.be.eq('7.65');
        })

        it('Check the total', function () {
            const shoppingCart = new ShoppingCart();

            shoppingCart.postProducts(products);

            expect(shoppingCart.total.toFixed(2)).to.be.eq('65.15');
        })

        it('Check the receipt', function () {
            const shoppingCart = new ShoppingCart();

            shoppingCart.postProducts(products);

            expect(shoppingCart.getReceipt()).to.have.all.members(['1 imported box of chocolates: 10.50', '1 imported bottle of perfume: 54.65', 'Sales Taxes: 7.65', 'Total: 65.15']);
        })
    });
    context('test3.txt', function () {
        const products = [
            '1 imported bottle of perfume at 27.99',
            '1 bottle of perfume at 18.99',
            '1 packet of headache pills at 9.75',
            '3 box of imported chocolates at 11.25',
        ];

        it('Check the taxAmount', function () {
            const shoppingCart = new ShoppingCart();

            shoppingCart.postProducts(products);

            expect(shoppingCart.taxAmount.toFixed(2)).to.be.eq('7.90');
        })

        it('Check the total', function () {
            const shoppingCart = new ShoppingCart();

            shoppingCart.postProducts(products);

            expect(shoppingCart.total.toFixed(2)).to.be.eq('98.38');
        })

        it('Check the receipt', function () {
            const shoppingCart = new ShoppingCart();

            shoppingCart.postProducts(products);

            expect(shoppingCart.getReceipt()).to.have.all.members(['1 imported bottle of perfume: 32.19', '1 bottle of perfume: 20.89', '1 packet of headache pills: 9.75', '3 box of imported chocolates: 35.55', 'Sales Taxes: 7.90', 'Total: 98.38']);
        })
    });
});
