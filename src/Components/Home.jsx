import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <div>
            <h1>Welcome to Sweet Crumbs Bakery</h1>
            <h2>Freshly Baked Happiness</h2>
            <p>
                Enjoy delicious cakes, cupcakes,
                brownies, donuts and pastries.
            </p>
            <Link to="/allproducts">
                <button>  View All Products </button>
            </Link>
        </div>
    )
}