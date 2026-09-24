import React, { useState } from 'react'
import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom'

import Nav from '../Pages/Nav'
import Home from './Home'
import Login from './Login'
import Allproduct from './Allproduct'
import Productdetails from './Productdetails'
import Cart from './Cart'


export default function Myproject() {

    let [login, setLogin] = useState(false)

    let [cart, setCart] = useState([])


    return (

        <div>

            <BrowserRouter>

                <Nav />


                <Routes>

                    <Route
                        path="/"
                        element={
                            <Home />
                        }
                    />


                    <Route
                        path="/login"
                        element={
                            <Login
                                login={login}
                                setLogin={setLogin}
                            />
                        }
                    />


                    <Route
                        path="/allproducts"
                        element={
                            <Allproduct />
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