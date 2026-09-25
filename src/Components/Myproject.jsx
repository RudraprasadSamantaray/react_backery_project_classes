import React, { useState } from 'react'
import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom'
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
        <BrowserRouter>
            {
                login && <Nav />
            }
            <Routes>
                <Route path="/" element={ login ? <Navigate to="/home" /> : <Login login={login} setLogin={setLogin} /> } />
                <Route path="/home" element={ login ? <Home />: <Navigate to="/" />} />
                <Route path="/allproducts" element={ login ? <Allproduct /> : <Navigate to="/" /> } />
                <Route path="/product/:id" element={ login ? <Productdetails cart={cart} setCart={setCart} /> : <Navigate to="/" /> } />
                <Route path="/cart" element={ login ? <Cart cart={cart} setCart={setCart} /> : <Navigate to="/" /> } />
            </Routes>
        </BrowserRouter>
    )
}