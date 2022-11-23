import React from 'react'
import { Product, FooterBanner, HeroBanner } from '../components'
import { client } from '../lib/client'

const Home = ({ productsData, bannerData }) => {
  console.log(bannerData)
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[1]} />
      <div className='w-full text-center h-56 flex justify-center flex-col items-center'>
        <h2 className='text-5xl text-blue-800/80 font-bold'>Best Selling Product</h2>
        <p className='font-thin text-gray-500  text-base pt-3'>Speakers of many variations</p>
      </div>

      <div className='max-w-7xl mx-auto w-full p-5 text-center grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4'>
        {productsData?.map(product => <Product product={product} key={product._id} />)}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  )
}

export const getServerSideProps = async () => {
  const Productquery = '*[_type == "product"]'
  const productsData = await client.fetch(Productquery)


  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)
  return {
    props: {
      productsData,
      bannerData
    }
  }
}

export default Home