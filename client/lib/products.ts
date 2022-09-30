import { fetchJson } from './api';

export const getProducts = async () => {
    const products = await fetchJson('/products')
    return products;
}

export const getProductById = async (id: string) => {
    const product = await fetchJson(`/products/${id}`);
    return product;
}