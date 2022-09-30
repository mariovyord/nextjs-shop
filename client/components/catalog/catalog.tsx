import Image from 'next/image'
import React from 'react'

const Catalog = ({ products }) => {
    return (
        <div className='flex flex-wrap gap-3 justify-around'>
            {products.map(product => {
                return <div key={product.id} className="card card-compact w-[350px] bg-base-100 shadow-xl">
                    <figure><Image src="https://placeimg.com/400/225/arch" alt="Shoes" width={400} height={300}></Image></figure>
                    <div className="card-body">
                        <h2 className="card-title">{product.title}</h2>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Catalog;