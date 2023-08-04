import React from 'react'
import Header from '../components/Header'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Product from '../components/Product'
import Cart from '../components/Cart'
import Payments from './Payments'


const Home = () => {
       return (
        
        
        <div className=''  
        style={{
            backgroundImage:"linear-gradient(315deg, #8ae9b3 0%, #c8d6e5 74%)"
        }}
        >
            <Header />
            <Routes >
                <Route path="/" element={<Dashboard />} />
                <Route path="product/:id" element={<Product />} />
                <Route path="cart" element={<Cart />} />
                <Route path="payments/" >
                    <Route path="" element={<Payments/>} />
                    <Route path=":id" element={<Payments/>} />
                </Route>
            </Routes>
        </div>
    )
}
export default Home




