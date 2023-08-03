import React from 'react'
import '../App.css';
const ProductListItem = (props) => {
    return (
        <div className="prodListIt" key={props.id} >
            <div className=" d-flex  align-items-center  " role="button"   >
                <img src={props.thumbnail} alt={props.title}
                    className='me-3' />
                <h5 className=' me-3 ' >              {props.title}             </h5>
                <h6 className=' me-3 ' >Price : $     {props.price}             </h6>
                <h6 className=' me-3 ' >Percentage :  {props.discountPercentage} %</h6>
                <h6 className=' me-3 ' >Rating :      {props.rating}             </h6>
                <button className=' me-2 btn btn-danger' onClick={props.decrementItem}> - </button>
                <span   className=' me-2 '>  Quantity  {props.count} </span>
                <button className=' me-2 btn btn-danger' onClick={props.incrementItem}> + </button>
                <button className=' me-2 btn btn-danger' onClick={props.removeFromCart}> Remove </button>
            </div>
        </div>
    )
}

export default ProductListItem