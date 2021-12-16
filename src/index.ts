import { Product } from './interface';
import { getProducts, getRows, printRows, round } from './utils';

// Read file
const inRows = getRows();

// Generate products
const products = getProducts(inRows);

// Calculate amounts
let taxAmount = 0;
let total = 0;

for (const product of products) {
    taxAmount += product.taxAmount * product.quantity;
    total += product.totalPrice;
}

// Print shopping cart
const outRows = [
    ...products.map(
        (product: Product) =>
            `${product.quantity} ${product.name}: ${product.totalPrice}`
    ),
    `Sales Taxes: ${round(taxAmount)}`,
    `Total: ${round(total)}`,
];

printRows(outRows);
