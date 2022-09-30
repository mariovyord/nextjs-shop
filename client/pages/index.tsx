import React from 'react';
import Head from 'next/head'
import Catalog from '../components/catalog/catalog';
import { GetStaticProps, NextPage } from 'next';
import { getProducts } from '../lib/products';
import { TProduct } from '../types/types';

const Home: NextPage<{ products: TProduct[] }> = ({ products }) => {
    return (
        <>
            <Head>
                <title>Next Shop</title>
            </Head>
            <main>
                <header className='py-10'>
                    <h1 className='text-center font-bold text-4xl'>Next Shop</h1>
                </header>
                <Catalog products={products} />
            </main>
        </>
    )
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
    const products = await getProducts() as TProduct;

    return {
        props: {
            products,
        },
        revalidate: 300,
    }
}