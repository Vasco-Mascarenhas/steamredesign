
export function addToCart(item) {
        const cart = JSON.parse(localStorage.getItem("cart")) || []

        if(cart.some(game => game.id === item.id)) {
            return;
        } else {
            cart.push(item)
            localStorage.setItem("cart", JSON.stringify(cart))
        }

      
}



export function removeFromCart(item) {
    const cart = JSON.parse(localStorage.getItem("cart")) || []

    const remove = cart.findIndex(remove => item.id === remove.id)

    if(remove !== -1) {
        cart.splice(remove, 1)
    }

    localStorage.setItem("cart", JSON.stringify(cart))
}


export function clearCart() {
    localStorage.removeItem("cart");
}