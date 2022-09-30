export const getProducts = async () => {
    const res = await fetch(process.env.API_URL + '/products')

    if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
    }

    const products = await res.json();
    return products;
}

export const getProductById = async (id: string) => {
    const res = await fetch(process.env.API_URL + '/products/' + id);

    if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
    }

    const product = await res.json();
    return product;
}