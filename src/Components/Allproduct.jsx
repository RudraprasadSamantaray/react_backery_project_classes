import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export default function Allproduct() {
    let [product, setProduct] = useState([])
    let getapi = async () => {
        let rdata = await fetch("/Products.json")
        let data = await rdata.json()
        setProduct(data)
    }
    useEffect(() => {
        getapi()
    }, [])

    return (
        <div className="products-page">
            <h1>Our Bakery Products</h1>
            <div className="product-grid">
                {
                    product.map((p) => {
                        return (
                            <div className="product-card" key={p.id} >
                                <img src={p.image} alt={p.name} />
                                <h2> {p.name} </h2>
                                <p className="category"> {p.category} </p>
                                <p> {p.description} </p>
                                <h3> ₹{p.price} / kg </h3>
                                <Link className="view-btn" to={`/product/${p.id}`} > View Product </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}