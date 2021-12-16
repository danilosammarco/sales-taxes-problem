import { expect } from "chai";
import { main } from "../src";
import { readFile } from "../src/utils";

describe('main()', function () {
    context('Check output file', function() {
        it('Should return a string', function() {
            main('./input/test1.txt', './output/output.txt');
            expect(readFile('./output/output.txt')).to.equal('2 book: 24.98\n1 music CD: 16.49\n1 chocolate bar: 0.85\nSales Taxes: 1.50\nTotal: 42.32');
        })
        it('Should return a string', function() {
            main('./input/test2.txt', './output/output.txt');
            expect(readFile('./output/output.txt')).to.equal('1 imported box of chocolates: 10.50\n1 imported bottle of perfume: 54.65\nSales Taxes: 7.65\nTotal: 65.15');
        })
        it('Should return a string', function() {
            main('./input/test3.txt', './output/output.txt');
            expect(readFile('./output/output.txt')).to.equal('1 imported bottle of perfume: 32.19\n1 bottle of perfume: 20.89\n1 packet of headache pills: 9.75\n3 box of imported chocolates: 35.55\nSales Taxes: 7.90\nTotal: 98.38');
        })
    })
});
