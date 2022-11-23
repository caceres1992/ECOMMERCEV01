import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
const Layout = ({ children }) => {
  return (
    <div className=''>
      <Head>
        <title> Shopping Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className=''>
      </main>

      {children}

      <fotter>
        <Footer />
      </fotter>
    </div>
  )
}

export default Layout