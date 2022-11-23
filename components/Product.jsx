import Link from 'next/link'
import React from 'react'

import { urlFor } from '../lib/client'
const Product = ({ product: { name, image, slug, price } }) => {
  return (
    <div className='hover:scale-105 transition-all ease-in-out'>
      <Link href={`/product/${slug.current}`}>
        <div className='w-fit'>
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className={'object-cover bg-gray-200  rounded-lg '}
          />

          <p className='text-left text-gray-500'> {name}</p>
          <p className='text-left text-gray-500 font-bold'> ${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product