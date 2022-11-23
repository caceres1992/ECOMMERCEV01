import React, { useContext } from 'react'
import Context, { StateContext } from '../context/StateContext'

const useCart = () => {
  return  useContext(Context)
}

export default useCart