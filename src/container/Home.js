import React from 'react'
import Header from '../components/Header'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Product from '../components/Product'
import Cart from '../components/Cart'
import CheckOut from './ChechOut'
import Payments from './Payments'


const Home = () => {
    return (
        <div>
            <Header />
            <Routes >
                <Route path="/" element={<Dashboard />} />
                <Route path="product/:id" element={<Product />} />
                <Route path="cart" element={<Cart />} />
                <Route path="payments" element={<Payments />} />
                <Route path="checkout/" >
                    <Route path="" element={<CheckOut/>} />
                    <Route path=":id" element={<CheckOut/>} />
                </Route>
            </Routes>
        </div>
    )
}
export default Home




