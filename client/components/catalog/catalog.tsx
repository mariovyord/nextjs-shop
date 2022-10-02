import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TProduct } from '../../types/types'
import { formatDollars } from '../../utils/formatters'

const Catalog: React.FC<{ products: TProduct[] }> = ({ products }) => {
    return (
        <div className='grid grid-flow-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
            {products.map(product => {
                return <div key={product.id} className='flex justify-center'>
                    <div key={product.id} className="card card-compact w-full sm:w-[350px] bg-base-100 shadow-xl">
                        <figure><Image src={process.env.NEXT_PUBLIC_CMS_URL + product.picture.url} alt={product.picture.alternativeText} width={400} height={300}></Image></figure>
                        <div className="card-body">
                            <div className='flex justify-between align-baseline'>
                                <h2 className="card-title">{product.title}</h2>
                                <p className='text-lg max-w-fit px-2 py-1 bg-neutral text-neutral-content rounded-md'>{formatDollars(product.price)}</p>
                            </div>
                            <p>{product.description}</p>
                            <div className="card-actions justify-end">
                                <Link href={`/products/${product.id}`}>
                                    <a className="btn btn-primary w-full">Details</a>
                                </Link >
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Catalog;