export type Products = {
    quantity: number;
    title: string;
    total: number;
    id: number;
    discountPercentage: number;
    discountedPrice: number;
    price: number;
}

export type Cart  = {
    id: number;
    userId: number;
    products: Products[];
    total: number;
    totalProducts: number;
    totalQuantity: number;
    discountedTotal: number;
}