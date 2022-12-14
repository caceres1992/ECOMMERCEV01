import React, { createContext, useState, useEffect, useContext } from "react";
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {

    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuiantities, setTotalQuantities] = useState(0)
    const [qty, setQty] = useState(1)


    let foundProduct;
    let index;

    const toggleCartItemQuantity = (id, value) => {
        foundProduct = cartItems.find(item => item._id === id);
        index = cartItems.findIndex(product => product._id === id);
        const newCarItems = cartItems.filter((product) => product._id !== id);

        if (value === 'inc') {
            setCartItems([...newCarItems, { ...foundProduct, quantity: foundProduct.quantity + 1 }])
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
            setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1)
        } else if (value === 'dec') {
            if (foundProduct.quantity > 1) {
                setCartItems([...newCarItems, { ...foundProduct, quantity: foundProduct.quantity - 1 }])
                setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
                setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1)
            } else {

                onRemove(foundProduct._id)
            }

        }
    }

    function onRemove(productId) {
        const foundProduct = cartItems.find(item => item._id === productId);
        const newCartItems = cartItems.filter((item) => item._id !== productId);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity)
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity)

        setCartItems(newCartItems)
    }

    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find((item) => item?._id === product?._id)
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product?.price * quantity)
        setTotalQuantities((prevTotalQuantity) => prevTotalQuantity + quantity)
        if (checkProductInCart) {
            const updateCartItems = cartItems.map(cartProduct => {
                if (cartProduct?._id === product?._id) {
                    return {
                        ...cartProduct,
                        quantity: cartProduct.quantity + quantity
                    }
                } else {
                    return cartProduct
                }

            })
            setCartItems(updateCartItems)
        } else {
            product.quantity = quantity
            setCartItems([...cartItems, { ...product }])
        }
        alert(`${qty} ${product?.name} added to the cart.`)
        toast.success(`${qty} ${product?.name} added to the cart.`)

    }

    const incQty = () => {
        setQty((prevQty) => prevQty + 1)
    }

    const decQty = () => {
        setQty((prevQty) => {
            if (prevQty - 1 < 1) return 1;
            return prevQty - 1
        })
    }


    // const incQty = () => {
    //     setQty((prevQty) => prevQty + 1)
    // }


    return < Context.Provider
        value={{
            showCart,
            setShowCart,
            cartItems,
            totalPrice,
            totalQuiantities,
            qty,
            incQty,
            decQty,
            onAdd,
            setQty,
            toggleCartItemQuantity,
            onRemove
        }
        }
    >
        {children}

    </ Context.Provider>
}
export default Context