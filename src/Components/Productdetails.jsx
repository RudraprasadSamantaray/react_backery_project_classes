import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Productdetails({ cart, setCart }) {

    let [product, setProduct] = useState({})
    let [weight, setWeight] = useState("1 kg")

    let { id } = useParams()

    let getapi = async () => {

        let rdata = await fetch("/Products.json")
        let data = await rdata.json()

        let p = data.find((x) => {
            return x.id == id
        })

        setProduct(p)
    }

    useEffect(() => {
        getapi()
    }, [id])


    let getPrice = () => {

        if (weight == "350 gm") {
            return product.price * 0.35
        }

        if (weight == "500 gm") {
            return product.price * 0.5
        }

        return product.price
    }


    let addCart = () => {

        let newProduct = {
            ...product,
            weight: weight,
            price: getPrice(),
            quantity: 1
        }

        setCart([...cart, newProduct])

        alert("Product added to cart")
    }


    if (!product) {
        return <h2>Product not found</h2>
    }


    return (
        <div className="product-details">

            <div className="product-image-box">

                <img
                    src={product.image}
                    alt={product.name}
                    onError={(e) => {
                        e.target.style.display = "none"
                    }}
                />

            </div>


            <div className="product-info">

                <h1>{product.name}</h1>

                <p className="category">
                    {product.category}
                </p>

                <p>
                    {product.description}
                </p>


                <h2>
                    ₹{getPrice()}
                </h2>


                <h3>Select Cake Weight</h3>

                <div className="weight-buttons">

                    <button
                        className={weight == "350 gm" ? "selected-weight" : ""}
                        onClick={() => setWeight("350 gm")}
                    >
                        350 gm
                    </button>

                    <button
                        className={weight == "500 gm" ? "selected-weight" : ""}
                        onClick={() => setWeight("500 gm")}
                    >
                        500 gm
                    </button>

                    <button
                        className={weight == "1 kg" ? "selected-weight" : ""}
                        onClick={() => setWeight("1 kg")}
                    >
                        1 kg
                    </button>

                </div>


                <button
                    className="add-cart-btn"
                    onClick={addCart}
                >
                    Add To Cart
                </button>

            </div>

        </div>
    )
}