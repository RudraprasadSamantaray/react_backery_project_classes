import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from '../Pages/Nav'
import Login from './Login'
import Home from './Home'
import Allproduct from './Allproduct'
import Productdetails from './Productdetails'
import Cart from './Cart'
export default function Myproject() {
    let [login, setLogin] = useState(false)
    let [cart, setCart] = useState([])
    return (
        <div>
            <BrowserRouter>
                {
                    login && <Nav cart={cart} />
                }
                <Routes>
                    <Route
                        path="/"
                        element={<Login setLogin={setLogin} />}
                    />
                    <Route
                        path="/home"
                        element={<Home />}
                    />
                    <Route
                        path="/allproducts"
                        element={
                            <Allproduct
                                cart={cart}
                                setCart={setCart}
                            />
                        }
                    />
                    <Route
                        path="/product/:id"
                        element={
                            <Productdetails
                                cart={cart}
                                setCart={setCart}
                            />
                        }
                    />
                    <Route
                        path="/cart"
                        element={
                            <Cart
                                cart={cart}
                                setCart={setCart}
                            />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    )
}