import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

export default function Nav() {
    return (
        <div className="nav">
            <h2 className="logo">
                Sweet Bakery
            </h2>
            <ul>
                <li> <Link to="/home"> Home </Link> </li>
                <li> <Link to="/allproducts"> Product </Link> </li>
                <li> <Link to="/cart"> Cart </Link></li>
            </ul>
        </div>
    )
}