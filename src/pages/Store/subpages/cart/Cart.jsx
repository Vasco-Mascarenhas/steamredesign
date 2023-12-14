import React, { useState } from 'react'
import "./cart.css"
import { useCart } from '../../../../context/cartContext'
import { getCroppedImg } from '../../../../helpers/getCroppedImg'
import { Button } from '../../../../components'
import { useInterestIn } from '../../../../hooks/useInterestIn'
import Interest from './components/interest/Interest'
const Cart = () => {
    const { cart, addToCart, removeFromCart, clearCart } = useCart();
    const [updateCart, setUpdateCart] = useState(null)
   const {data: interest, isLoading, error} = useInterestIn({
    developer: 
        cart &&
    cart.length > 0 &&
    cart[0].developers &&
    cart[0].developers.length > 0
      ? cart[0].developers[0].id
      : 1612
})
  
    const handleClickremove = (item) => {
        removeFromCart(item)
        setUpdateCart(prev => !prev)
    }

    const handleCartClear = () => {
        clearCart()
        setUpdateCart(prev => !prev)
    }

    const handleInterest = (game) => {
        addToCart(game)
        setUpdateCart(prev => !prev)
    }
  return (
    <div id="cart" >
        <h1 className='inner-container'>Cart</h1>
        <div className="cart-inner inner-container">
        <div className="cart-items" key={updateCart}>
            {
                cart && cart.length > 0 ? (
                    cart.map(item => (
                    <div className='cart-item' key={item.id}>
                      <div className="cart-item-image">
                        <img src={getCroppedImg(item.background_image)} alt="game image" />
                      </div>
                      <div className="cart-item-info">
                        <h4>{item.name}</h4>
                        <div className="platforms">
                            {item.platforms.map((platform) => (
                                <div className="platform" key={platform.platform.name}>
                                    
                                    <img src={`/assets/platforms/${platform.platform.slug}.png`} alt={platform.name} />
                                </div>
                            ))}
                        </div>
                      </div>    
                      <div className="cart-remove-item">
                        <div className="cart-item-price">
                            <span>40$</span>
                        </div>
                        <button onClick={() => handleClickremove(item)}>
                            <img src="/assets/constants/delete.svg" alt="remove from cart" />
                        </button>
                      </div>
                                 
                    </div>
                    ))
                ) : ( <p>Your cart is empty</p>)
            }
            {cart && cart.length > 0 ? (
                <div className="cart-items-total">
                   
                    <div className="cart-total">
                        <h3 className=''>Cart Total</h3>
                        <div className="remove-total cart-remove-item">
                        <span>99$</span>
                        <button onClick={handleCartClear}>
                            <img src="/assets/constants/delete.svg" alt="remove from cart"/>
                        </button>
                        </div>
                    </div>
                    <div className="cart-continue">
                        <Button type="wishlistBtn" text="Continue Shopping"/>
                        <div className="cart-purchase">
                            <Button type="addtocart" text="Purchase as a Gift" />
                            <Button type="addtocart" text="Purchase for Myself" />
                        </div>
                    </div>
                </div>   
            ) : ""}

        </div>
        <div className="cart-interest">
            {cart && cart.length > 0 ? (
                <>
                <h3>Games you might be interested in:</h3>
                <div className="interest-container">
                    {interest?.slice(1, (cart.length + 1)).map((games, index) => (
                            <Interest game={games} onAddClick={handleInterest} key={index} />
                        ))}
                </div>
                </>
            ) : <h3>Nothing to display here...</h3>}
        </div>
        </div>
    </div>
  )
}

export default Cart