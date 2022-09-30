import React from 'react';
import Head from 'next/head'
import Catalog from '../components/catalog/catalog';

const products = [
    { id: 1, title: 'Product 1', description: 'Nice product', price: 9.99 },
    { id: 2, title: 'Product 1', description: 'Nice product', price: 9.99 },
    { id: 3, title: 'Product 1', description: 'Nice product', price: 9.99 },
    { id: 4, title: 'Product 1', description: 'Nice product', price: 9.99 },
]

const Home = () => {
    return (
        <>
            <Head>
                <title>Next Shop</title>
            </Head>
            <main>
                <header className='py-10'>
                    <h1 className='text-center font-bold text-4xl'>Next Shop</h1>
                </header>
                <div>
                    <Catalog products={products} />
                </div>
            </main>
        </>
    )
}

export default Home;