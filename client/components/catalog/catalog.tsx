import Image from 'next/image'
import React from 'react'
import { TProduct } from '../../types/types'
import { formatDollars } from '../../utils/formatters'

const Catalog: React.FC<{ products: TProduct[] }> = ({ products }) => {
    return (
        <div className='grid grid-flow-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
            {products.map(product => {
                return <div className='flex justify-center'>
                    <div key={product.id} className="card card-compact w-[350px] bg-base-100 shadow-xl">
                        <figure><Image src={process.env.NEXT_PUBLIC_API_URL + product.picture.url} alt={product.picture.alternativeText} width={400} height={300}></Image></figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.title}</h2>
                            <p>{product.description}</p>
                            <p className='text-lg'>{formatDollars(product.price)}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Catalog;