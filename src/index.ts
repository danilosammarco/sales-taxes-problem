import { FileManager } from './FileManager';
import { ShoppingCart } from './ShoppingCart';

export function main(in_file: string, out_file: string): void {
    const fileManager = new FileManager();
    const shoppingCart = new ShoppingCart();

    shoppingCart.postProducts(fileManager.getRows(in_file));
    fileManager.postRows(shoppingCart.getReceipt(), out_file);
}

main(
    process.env.npm_config_in_file || './input/test1.txt',
    process.env.npm_config_out_file || './output/output.txt'
);
