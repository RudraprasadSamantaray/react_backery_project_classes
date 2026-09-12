import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
export default function Nav({ cart }) {
    return (
        <div className="nav">
            <h2>Sweet Crumbs Bakery</h2>
            <ul>
                <li>
                    <Link to="/home">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/allproducts">
                        Products
                    </Link>
                </li>
                <li>
                    <Link to="/cart">
                        Cart ({cart.length})
                    </Link>
                </li>
            </ul>
        </div>
    )
}