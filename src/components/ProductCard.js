import { useNavigate } from 'react-router-dom';
import React from 'react'
import '../App.css';
const ProductCard = (fff) => {
    const navigate = useNavigate();
    return (
        <div className="d-flex  mt-4 " key={fff.id}>
            <div className="card m-2 d-flex curser-pointer bg-color " role="button" style={{ width: "250px" }}
                onClick={() => navigate(`/product/${fff.id}`)}   >
                <img src={fff.thumbnail} height={180} alt={fff.title} className='card-img-top b_rad' />
                <div className="card-body">
                    <h5 className='text-center card-title'>{fff.title}</h5>
                    <h6 className='text-center'>Price : $ {fff.price}</h6>
                    <h6 className='text-center ms-3'>Percentage : {fff.discountPercentage} %</h6>
                    <h6 className='text-center'>Rating : {fff.rating}</h6>
                </div>
                <div className="d-flex justify-content-center mb-4">
                    {
                        fff.stock > 0 ?
                            <button className='btn btn-success me-2'>  Available</button>
                            :
                            <button className='btn btn-outline-danger'>No Stock </button>
                    }
                </div>

            </div>
        </div>
    )
}
export default ProductCard 