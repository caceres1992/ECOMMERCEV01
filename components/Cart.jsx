import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import useCart from '../hooks/useCart'
import { urlFor } from '../lib/client'
import { AiOutlineLeft } from 'react-icons/ai'
import { CiShoppingBasket } from 'react-icons/ci'



const Cart = () => {

  const { cartItems, totalQuiantities, totalPrice, setShowCart, toggleCartItemQuantity, onRemove } = useCart()
  const cartRef = useRef();

  const handleCheckOut = () => {
    alert("I'm working on a checkout")
  }

  return (
    <div className='bg-white w-96 right-0 h-screen absolute top-0 flex shadow-sm' ref={cartRef}>

      <div className='p-6 w-full space-y-10 flex flex-col '>
        <button type={'button'} className="flex items-center w-full space-x-2 border-b pb-4" onClick={() => setShowCart(false)}><AiOutlineLeft />
          <span className='font-medium'> Your Cart </span>
          <span className='text-rose-400'>({totalQuiantities} items) </span>
        </button>

        <div className='w-full max-w-md  bg-white flex-1 overflow-y-auto pb-5   '>
          <div className='flow-root'>
            <ul className="space-y-3">

              {cartItems?.length >= 1 &&
                cartItems?.map((item) => (

                  <li
                    key={item._id}
                    className="py-3 sm:py-6 rounded-lg bg-slate-100 px-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img className=" bg-white h-14 w-14 p-1 rounded-lg" src={urlFor(item?.image[0])} alt="Neil image" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate ">
                          {item?.name}
                        </p>
                        <p className="text-sm text-gray-500 truncate ">
                          email@windster.com
                        </p>


                        <p className='flex  items-center w-fit border bg-white mt-2'>
                          <span className='p-2 w-10 h-7 flex justify-center items-center border-r text-gray-500'>
                            <button onClick={() => toggleCartItemQuantity(item._id, "dec")}>-</button>
                          </span>
                          <span className='  '><input type="text" className='w-8 text-gray-500 text-center' value={item?.quantity} /></span>
                          <span className='p-2 w-10 h-7 flex justify-center items-center border-l text-gray-500 '>
                            <button onClick={() => toggleCartItemQuantity(item._id, "inc")}>+</button>
                          </span>

                        </p>



                      </div>
                      <div className="inline-flex items-center gap-y-2 flex-col text-base font-semibold text-gray-900 ">
                        ${item?.price}
                        <button
                          onClick={() => onRemove(item._id)}
                          className='text-red-400 text-xs uppercase font-bold mt-1 '>remove</button>

                      </div>
                    </div>
                  </li>
                ))
              }

              {cartItems.length < 1 &&
                <div className='text-center'>
                  <CiShoppingBasket className='mx-auto' size={150} />
                  <p>Your Cart is Empty</p>
                  <Link href="/">
                    <button className='btnPrimary w-full h-12 '>Start Shopping</button>
                  </Link>

                </div>}

            </ul>
          </div>
        </div>


        <div className='border-t pt-2'>
          <div>
            <p className='text-lg flex justify-between items-center'><span className='font-bold text-xl'>Subtotal: </span>  ${totalPrice}</p>
          </div>

          <button className='btnSecundary w-full uppercase tracking-[3px] h-12'
            onClick={() => handleCheckOut()}>
            Pay ${totalPrice}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart