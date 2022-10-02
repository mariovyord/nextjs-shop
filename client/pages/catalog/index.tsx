import React from 'react';
import Head from 'next/head'
import { GetStaticProps, NextPage } from 'next';
import Catalog from '../../components/catalog/catalog';
import { TProduct } from '../../types/types';
import { getProducts } from '../../lib/products';
import { ApiError } from '../../lib/api';


const CatalogPage: NextPage<{ products: TProduct[] }> = ({ products }) => {
    return (
        <>
            <Head>
                <title>Next - Catalog</title>
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

export default CatalogPage;

export const getStaticProps: GetStaticProps = async () => {
    try {
        const products = await getProducts() as TProduct[];

        return {
            props: {
                products,
            },
            revalidate: parseInt(process.env.REVALIDATE_SECONDS),
        }
    } catch (err) {
        if (err instanceof ApiError && err.status === 404) {
            return { notFound: true, }

        }
        throw err;
    }
}