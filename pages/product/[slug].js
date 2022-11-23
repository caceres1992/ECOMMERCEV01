import React, { useEffect, useState } from 'react'
import { client, urlFor } from '../../lib/client'
import { AiFillStar, AiOutlineStar, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import Product from '../../components/Product'
import useCart from '../../hooks/useCart'
const ProductDetails = ({ product, products }) => {
    const { image, name, details, price } = product
    const [imageSeleted, setImageSeleted] = useState(image && image[0]);
    const { qty, incQty, decQty, onAdd, setQty } = useCart()




    useEffect(() => {
        console.log('recargando')
        setQty(1)
        setImageSeleted(image && image[0])
    }, [product])
    return (
        <div className='w-full max-w-7xl mx-auto p-5'>
            <div className='flex flex-col md:flex-row gap-10'>

                <div className='flex-1 space-y-2'>
                    <div className='h-96 rounded-lg bg-gray-200 lg:h-[500px] p-10 flex items-center justify-center'>
                        <img className='w-full h-full object-contain' src={urlFor(imageSeleted)} />
                    </div>
                    <div className='grid grid-cols-4 '>
                        {image?.map((item, index) => {
                            return <img
                                className={`h-24 w-24 object-contain ${item._key === imageSeleted._key && 'bg-gradient-to-t to-rose-500 from-orange-300'}  p-2 rounded-lg`}
                                key={index}
                                src={urlFor(item)}
                                onMouseEnter={() => {
                                    console.log(item)
                                    setImageSeleted(item)
                                }}
                            />
                        })}
                    </div>
                </div>

                <div className='space-y-2 flex-1'>

                    <h1 className=' text-gray-700 font-medium text-5xl'>{name}</h1>
                    <div className='flex items-center gap-x-1'>
                        <div className='text-orange-500 flex items-center gap-x-0.5'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <p className='font-extralight text-xs'>(20)</p>
                    </div>
                    <h4 className='text-gray-700 font-semibold'>Details: </h4>

                    <p>{details}</p>
                    <p className='text-3xl font-bold text-gray-700'>${price}</p>
                    <div className='mt-2'>
                        <h3 className='text-gray-700 font-semibold'>Quantity:</h3>
                        <p className='flex w-fit border  items-center justify-center'>
                            <span className='border-r p-2 cursor-pointer'
                                onClick={() => decQty()}
                            ><AiOutlineMinus /></span>
                            <span><input className='text-center text-gray-500 text-sm w-20 ' value={qty} /></span>
                            <span className='border-l p-2 cursor-pointer'
                                onClick={() => incQty()}
                            ><AiOutlinePlus /></span>
                        </p>

                        <div className='mt-10 gap-5 flex flex-col sm:flex-row'>
                            <button className='btnAdd' onClick={() => onAdd(product, qty)} >Add to cart</button>
                            <button className='btnBuy'>Buy now</button>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>

            </div>

            <h2 className='text-3xl mt-10 text-gray-600 font-semibold'>You might also like this</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-10'>
                {products?.map((item, index) => <Product product={item} key={item._id} />)}
            </div>

        </div>
    )
}


export const getStaticPaths = async () => {
    const query = `*[_type == "product"]{
            slug {
                current
            }
        }
    `;
    const products = await client.fetch(query)

    const paths = products.map(product => ({
        params: {
            slug: product.slug.current
        }
    }))
    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug } }) => {

    const query = `*[_type == "product" && slug.current == '${slug}'][0]`
    const productsQuery = '*[_type == "product"]'

    const product = await client.fetch(query)
    const products = await client.fetch(productsQuery)


    return {
        props: {
            product, products
        }

    }
}

export default ProductDetails