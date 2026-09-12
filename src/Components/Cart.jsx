import React, { useState } from 'react'

export default function Cart({ cart, setCart }) {

    let [buy, setBuy] = useState(false)

    let removeCart = (id) => {

        let data = cart.filter((p) => {
            return p.id !== id
        })

        setCart(data)
    }

    let total = cart.reduce((sum, p) => {
        return sum + p.price
    }, 0)

    return (
        <div>

            <h1>My Cart</h1>

            {
                cart.length === 0
                    ?
                    <h2>Your cart is empty</h2>

                    :

                    <div>

                        {
                            cart.map((p, index) => {

                                return (
                                    <div key={index}>

                                        <img
                                            src={p.image}
                                            alt={p.name}
                                            width="150"
                                        />

                                        <h2>
                                            {p.name}
                                        </h2>

                                        <p>
                                            Category: {p.category}
                                        </p>

                                        <p>
                                            Price: ₹{p.price}
                                        </p>

                                        <button
                                            onClick={() =>
                                                removeCart(p.id)
                                            }
                                        >
                                            Remove
                                        </button>

                                        <hr />

                                    </div>
                                )

                            })
                        }

                        <h2>
                            Total Price: ₹{total}
                        </h2>

                        <button
                            onClick={() => setBuy(true)}
                        >
                            Buy Now
                        </button>

                    </div>
            }


            {
                buy &&
                <div>

                    <h1>Order Summary</h1>

                    <h2>Products</h2>

                    {
                        cart.map((p, index) => {

                            return (
                                <div key={index}>

                                    <h3>
                                        {p.name}
                                    </h3>

                                    <p>
                                        Price: ₹{p.price}
                                    </p>

                                </div>
                            )

                        })
                    }

                    <hr />

                    <h2>
                        Total Amount: ₹{total}
                    </h2>

                    <button
                        onClick={() =>
                            alert('Order placed successfully!')
                        }
                    >
                        Confirm Order
                    </button>

                </div>
            }

        </div>
    )
}