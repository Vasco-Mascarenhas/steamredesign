import { createContext, useContext, useState, useEffect } from "react";
import { toast } from 'react-toastify';

const CartContext = createContext()


const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    
    useEffect(() => {
        const storageCart = JSON.parse(localStorage.getItem("cart")) || []
    setCart(storageCart)
    }, [])

    const saveCartToStorage = (updCart) => {
        localStorage.setItem("cart", JSON.stringify(updCart))
    }

    const addToCart = (item) => {
        const exItem = cart.find(game => game.id === item.id)

        if(exItem) {
            toast.warning(`${item.name} is already in the cart!`)
        } else {
            const updCart = [...cart, item]
            setCart(updCart)
            saveCartToStorage(updCart)
            toast.success(`${item.name} added to the cart!`);
        }
    }


    const removeFromCart = (item) => {
        const updCart = cart.filter(game => game.id !== item.id)
        setCart(updCart)
        saveCartToStorage(updCart)
        toast.info(`${item.name} removed from the cart!`);
    }


    const clearCart = () => {
        setCart([])
        localStorage.removeItem("cart")
        toast.info('Cart cleared!');
    }


    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
      }
    return context
}

export {CartProvider, useCart}