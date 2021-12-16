import { Product } from '../interface';
import { getConfig, getTaxAmount, getTotalPrice } from './';

function getIsExempt(name: string, exemptKeywords: string[]): boolean {
    for (const keyword of exemptKeywords) {
        if (name.includes(keyword)) {
            return true;
        }
    }

    return false;
}

export function getProducts(rows: string[]) {
    const products: Product[] = [];
    const config = getConfig();

    for (const row of rows) {
        const [quantityStr, name, priceStr, ...other] =
            row.split(/\s(.*)\sat\s/);

        if (other && other.length > 0) {
            throw new Error('Input file malformed');
        }

        const quantity = Number(quantityStr);
        const price = Number(priceStr);

        const isExempt = getIsExempt(name, config.exemptKeywords);
        const isImported = name.indexOf('imported') > -1;
        const taxAmount = getTaxAmount(Number(price), isImported, isExempt);
        const totalPrice = getTotalPrice(Number(price), taxAmount, quantity);

        const product: Product = {
            name,
            quantity,
            price,
            isExempt,
            isImported,
            taxAmount,
            totalPrice,
        };

        products.push(product);
    }

    return products;
}
