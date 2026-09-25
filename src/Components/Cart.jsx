import React, { useState } from 'react'
export default function Cart({ cart, setCart }) {
    let [buy, setBuy] = useState(false)
    let increase = (index) => {
        let data = [...cart]
        data[index].quantity = data[index].quantity + 1
        setCart(data)
    }
    let decrease = (index) => {
        let data = [...cart]
        if (data[index].quantity > 1) {
            data[index].quantity = data[index].quantity - 1
            setCart(data)
        }
    }

    let removeCart = (id) => {
        let data = cart.filter((p) => {
            return p.id !== id
        })
        setCart(data)
    }

    let total = cart.reduce((sum, p) => {
        return sum + (p.price * p.quantity)
    }, 0)

    return (

        <div className="cart-page">
            <h1>My Cart</h1>
            {
                cart.length === 0 ?
                    <div className="empty-cart">
                        <h2>Your cart is empty</h2>
                        <p>
                            Add some delicious cakes to your cart.
                        </p>
                    </div>
                    :
                    <div>
                        {
                            cart.map((p, index) => {
                                return (
                                    <div className="cart-item" key={index} >
                                        <img
                                            src={p.image}
                                            alt={p.name}
                                        />
                                        <div className="cart-details">
                                            <h2>
                                                {p.name}
                                            </h2>
                                            <p>
                                                Category: {p.category}
                                            </p>
                                            <p>
                                                Weight: {p.weight}
                                            </p>
                                            <p>
                                                Price: ₹{p.price}
                                            </p>
                                            <div className="quantity">
                                                <button onClick={() => decrease(index) } > − </button>
                                                <span>
                                                    {p.quantity}
                                                </span>
                                                <button onClick={() => increase(index) } > + </button>
                                            </div>
                                            <p>
                                                Product Total:
                                                ₹{p.price * p.quantity}
                                            </p>
                                            <button className="remove-btn" onClick={() =>
                                                    removeCart(p.id)
                                                } > Remove </button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className="cart-summary">
                            <h2>
                                Total Price: ₹{total}
                            </h2>
                            <button className="buy-btn" onClick={() => setBuy(true)} > Buy Now </button>
                        </div>
                        {
                            buy &&
                            <div className="order-summary">
                                <h1>
                                    Order Summary
                                </h1>
                                {
                                    cart.map((p, index) => {
                                        return (
                                            <div key={index}>
                                                <h3>
                                                    {p.name}
                                                </h3>
                                                <p>
                                                    Weight: {p.weight}
                                                </p>
                                                <p>
                                                    Quantity: {p.quantity}
                                                </p>
                                                <p>
                                                    ₹{p.price * p.quantity}
                                                </p>
                                                <hr />
                                            </div>
                                        )
                                    })
                                }
                                <h2>
                                    Total Amount: ₹{total}
                                </h2>
                                <button className="confirm-btn" onClick={() =>
                                        alert(
                                            "Order placed successfully!"
                                        ) } > Confirm Order </button>
                            </div>
                        }
                    </div>
            }
        </div>
    )
}