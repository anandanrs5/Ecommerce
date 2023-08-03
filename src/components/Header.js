// 
// @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,800;1,600&display=swap');
import React from 'react'

import { useNavigate } from 'react-router-dom'

const Header = () => {
    const st={
        color:"WHITE",
        fontSize:"50px",
        fontFamily:"poppins"
    }
    const navigate =useNavigate();
    return (
        <div className='bg-primary p-3'>
            <h1 className="text-center " style={st}>Pick & Buy</h1>
            <div className="row justify-content-center pt-2 pb-1">
                <div className="col-sm-12 col-md-7 col-lg-6 col-xl-5 d-flex">
                    <button className='btn btn-success me-4'
                    onClick={()=>navigate("/")}
                    > Home</button>
                    <input
                        className='form-control col-xs-12 '
                        type="search"
                        placeholder='Search...'
                        
                    />
                    <button className='btn btn-success ms-3'
                    onClick={()=>navigate("/cart")}
                    > Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Header