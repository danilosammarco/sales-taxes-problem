export interface Product {
    name: string;
    price: number;
    quantity: number;
    isExempt: boolean;
    isImported: boolean;
    taxAmount: number;
    totalPrice: number;
}
