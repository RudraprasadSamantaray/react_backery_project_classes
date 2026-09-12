import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export default function Allproduct({ cart, setCart }) {
    let [product, setProduct] = useState([])
    let getapi = async () => {
        let rdata = await fetch('/Products.json')
        let data = await rdata.json()
        setProduct(data)
    }
    useEffect(() => {
        getapi()
    }, [])
    let addCart = (p) => {
        setCart([...cart, p])
        alert('Product added to cart')
    }
    return (
        <div>
            <h1>Our Bakery Products</h1>
            {
                product.map((p) => {
                    return (
                        <div key={p.id}>
                            <img
                                src={p.image}
                                alt={p.name}
                                width="200"
                            />
                            <h2>{p.name}</h2>
                            <p>Category: {p.category}</p>
                            <p>Price: ₹{p.price}</p>
                            <Link to={`/product/${p.id}`}>
                                <button>View Product</button>
                            </Link>
                            <button onClick={() => addCart(p)}>Add to Cart </button>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}