import { Product } from './interface';
import { getProducts, getRows, printRows, round } from './utils';

export function main(
    in_file: string | undefined,
    out_file: string | undefined,
    viewInConsole: boolean
): void {
    // Read file
    const inRows = getRows(in_file);

    // Generate products
    const products = getProducts(inRows);

    // Calculate the amounts
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
                `${product.quantity} ${product.name}: ${round(
                    product.totalPrice
                )}`
        ),
        `Sales Taxes: ${round(taxAmount)}`,
        `Total: ${round(total)}`,
    ];

    printRows(outRows, out_file, viewInConsole);
}

main(process.env.npm_config_in_file, process.env.npm_config_out_file, true);
