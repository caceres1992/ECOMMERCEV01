import Link from 'next/link'
import React from 'react'
import { urlFor } from '../lib/client'
const HeroBanner = ({ heroBanner }) => {
    return (
        <div className='h-96 '>
            <div className='max-w-7xl mx-auto px-5 bg-gray-200  rounded-lg pt-14 relative h-full'>
                <p >{heroBanner.smallText}</p>
                <h3 className='text-5xl font-bold '>{heroBanner.midText}</h3>
                <h1 className='text-8xl font-extrabold text-white tracking-[10px]'>{heroBanner.largeText1}</h1>
                <img src={urlFor(heroBanner?.image)} alt='headpones' className=' absolute bottom-8 h-52 md:h-96 right-[10%] lg:right-[10%]' />

                <div>
                    <Link href={`/product/${heroBanner.product}`}>
                        <button className='btnPrimary' type={"button"}>{heroBanner.buttonText}</button>
                    </Link>
                </div>

                <div className='absolute right-20 bottom-10'>
                    <h5 className='text-blue-900 font-bold text-sm text-right'>Description</h5>
                    <p className='font-thin text-base'>{heroBanner.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner