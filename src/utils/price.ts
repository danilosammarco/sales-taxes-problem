import { Product } from '../interface';

const importedTax = 5;
const generalTax = 10;

function getTax(isImported: boolean, isExempt: boolean) {
    const tax = (isImported ? importedTax : 0) + (!isExempt ? generalTax : 0);

    return tax;
}

export function round(price: number): string {
    return price.toFixed(2);
}

function approx(price: number): number {
    return Number(round(Math.ceil(price * 20) / 20));
}

export function getTaxAmount(
    price: number,
    isImported: boolean,
    isExempt: boolean
): number {
    const taxAmount = approx((price / 100) * getTax(isImported, isExempt));

    return taxAmount;
}

export function getTotalPrice(
    price: number,
    taxAmount: number,
    quantity: number
): number {
    const totalPrice = Number(round((price + taxAmount) * quantity));

    return totalPrice;
}
