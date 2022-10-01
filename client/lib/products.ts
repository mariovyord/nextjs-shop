import { fetchJson } from './api';

export const getProducts = async () => {
    const products = await fetchJson(`${process.env.NEXT_PUBLIC_API_URL}/products`)
    return products;
}

export const getProductById = async (id: string) => {
    const product = await fetchJson(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);
    return product;
}