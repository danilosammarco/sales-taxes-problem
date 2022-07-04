import { Config } from './Config';

export class Product {
    name: string;
    price: number;
    quantity: number;
    isExempt: boolean;
    isImported: boolean;
    taxAmount: number;
    totalPrice: number;

    private importedTax = 5;
    private generalTax = 10;

    constructor(name: string, price: number, quantity: number) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;

        this.isExempt = this.getIsExempt();
        this.isImported = this.getIsImported();
        this.taxAmount = this.getTaxAmount();
        this.totalPrice = this.getTotalPrice();
    }

    private getIsExempt(): boolean {
        const config = new Config();

        for (const keyword of config.exemptKeywords) {
            if (this.name.includes(keyword)) {
                return true;
            }
        }

        return false;
    }

    private getIsImported(): boolean {
        return this.name.indexOf('imported') > -1;
    }

    private getTaxAmount(): number {
        const taxAmount = this.approx((this.price / 100) * this.getTax());

        return taxAmount * this.quantity;
    }

    private getTotalPrice(): number {
        const totalPrice = this.round(
            this.price * this.quantity + this.taxAmount
        );

        return totalPrice;
    }

    private getTax(): number {
        const tax =
            (this.isImported ? this.importedTax : 0) +
            (!this.isExempt ? this.generalTax : 0);

        return tax;
    }

    private round(price: number): number {
        return Number(price.toFixed(2));
    }

    private approx(price: number): number {
        return Number(this.round(Math.ceil(price * 20) / 20));
    }
}
