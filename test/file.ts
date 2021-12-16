import { expect } from "chai";
import { readFile } from "../src/utils";

describe('readFile(filePath)', function () {
    context('Check return value', function() {
        it('Should return a string', function() {
            expect(readFile('./input/test1.txt')).to.equal('2 book at 12.49\n1 music CD at 14.99\n1 chocolate bar at 0.85');
            expect(readFile('./input/test2.txt')).to.equal('1 imported box of chocolates at 10.00\n1 imported bottle of perfume at 47.50');
            expect(readFile('./input/test3.txt')).to.equal('1 imported bottle of perfume at 27.99\n1 bottle of perfume at 18.99\n1 packet of headache pills at 9.75\n3 box of imported chocolates at 11.25');
        })
    })

    context('Check return type', function() {
        it('Should return a string', function() {
            expect(readFile('./input/test1.txt')).to.be.a.string;
            expect(readFile('./input/test2.txt')).to.be.a.string;
            expect(readFile('./input/test3.txt')).to.be.a.string;
        })
    })
});
