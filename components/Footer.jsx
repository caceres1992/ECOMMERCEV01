import React from 'react'
import { CiFacebook, CiTwitter } from 'react-icons/ci'
const Footer = () => {
  return (
    <div className=' text-center space-y-4 py-8'>
      <p className='text-gray-800 font-extrabold text-sm'>2022 SHOPPING STORE All rights reserverd</p>

      <p className='text-2xl flex justify-center items-center space-x-4'>
        <CiFacebook />
        <CiTwitter />
      </p>
    </div>
  )
}

export default Footer