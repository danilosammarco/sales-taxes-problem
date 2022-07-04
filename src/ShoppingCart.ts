import { Config } from './Config';
import { FileManager } from './FileManager';
import { Product } from './Product';

export class ShoppingCart {
    config: Config;
    products: Product[] = [];
    taxAmount = 0;
    total = 0;

    constructor() {
        const fileManager = new FileManager();
        this.config = fileManager.getConfig();
    }

    postProduct(row: string): void {
        const [quantity, name, price, ...other] = row.split(/\s(.*)\sat\s/);

        if (other && other.length > 0) {
            throw new Error('Input file malformed');
        }

        const product = new Product(name, Number(price), Number(quantity));

        this.products.push(product);
        this.taxAmount += product.taxAmount;
        this.total += product.totalPrice;
    }

    postProducts(rows: string[]): void {
        for (const row of rows) {
            this.postProduct(row);
        }
    }

    getReceipt(): string[] {
        return [
            ...this.products.map(
                (p: Product) =>
                    `${p.quantity} ${p.name}: ${p.totalPrice.toFixed(2)}`
            ),
            `Sales Taxes: ${this.taxAmount.toFixed(2)}`,
            `Total: ${this.total.toFixed(2)}`,
        ];
    }
}
