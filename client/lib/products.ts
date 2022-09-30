export async function getProducts() {
    const res = await fetch(process.env.API_URL + '/products')
    const products = await res.json();
    return products;
}