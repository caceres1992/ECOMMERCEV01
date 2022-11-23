import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
const FooterBanner = ({ footerBanner }) => {
  console.log(footerBanner)
  const { discount, largeText1, desc, largaText2, saleTime, product, slug, midText, buttonText, image, smallText } = footerBanner
  return (
    <div className=' text-white'>
      <div className='w-full relative bg-[#85b3ba] rounded-lg max-w-7xl mx-auto h-96 px-5  flex justify-between items-start pt-20'>

        <div className=''>
          <p className='text-gray-100 font-light'>{discount}</p>
          <h3 className='text-8xl font-bold'>{largeText1}</h3>
          <h3 className='text-8xl font-bold'>{largaText2}</h3>
          <p className='text-sm '>{saleTime}</p>
        </div>

        <div>
          <p className='text-base font-light text-gray-100'>{smallText}</p>
          <p className='text-6xl font-bold'>{midText}</p>
          <p className='text-base font-light text-gray-100'>{desc}</p>
          <Link href={`/product/${slug}`}>
            <button className='btnSecundary '>{buttonText}</button>

          </Link>
        </div>

        <img src={urlFor(image)} className="h-72 absolute bottom-0 left-1/2 -ml-32 " />
      </div>
    </div>
  )
}

export default FooterBanner