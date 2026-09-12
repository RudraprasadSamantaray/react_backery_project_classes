import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
export default function Productdetails({ cart, setCart }) {
    let [product, setProduct] = useState({})
    let { id } = useParams()
    let getapi = async () => {
        let rdata = await fetch('/Products.json')
        let data = await rdata.json()
        let result = data.find((p) => {
            return p.id == id
        })
        setProduct(result)
    }
    useEffect(() => {
        getapi()
    }, [])
    let addCart = () => {
        setCart([...cart, product])
        alert('Product added to cart')
    }
    return (
        <div>
            <h1>{product.name}</h1>
            <img
                src={product.image}
                alt={product.name}
                width="300"
            />
            <h2>Price: ₹{product.price}</h2>
            <h3>Category: {product.category}</h3>
            <p>{product.description}</p>
            <button onClick={addCart}>
                Add to Cart
            </button>
        </div>
    )
}