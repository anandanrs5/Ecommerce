import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/reducer/card';
import { getUsers } from '../redux/reducer/userSlice';

const Product = () => {
    const dispatch = useDispatch();
    const params = useParams();
    useEffect(() => { dispatch(getUsers()) }, [dispatch])

    const { users, loading } = useSelector((state) => state.users)
    const selectItem = users.find((element) => element.id === parseInt(params.id))
    const list = useSelector((state) => state.cart.list)
    let addToCartButton = list.find((item) => item.id === selectItem.id)

    const addToCart = () => {
        dispatch(addItem(selectItem))
    }
    if (loading) {
        return <div>Loading...</div>;
    }
    if (selectItem == null) {
        return
    }

    return (
        <div className="d-flex justify-content-center curser-pointer mt-2" role="button" >
            <div className="card m-2 d-flex  " style={{ width: "390px" }} >
                <img src={selectItem.thumbnail} height={200} alt={selectItem.title}
                    className='card-img-top product b_rad' />
                <div className="card-body">
                    <h5 className='text-center card-title'>{selectItem.title}</h5>
                    <h6 className='text-center'>Price : $ {selectItem.price}</h6>
                    <h6 className='text-center ms-3'>Percentage : {selectItem.discountPercentage} %</h6>
                    <h6 className='text-center'>Rating : {selectItem.rating}</h6>
                </div>
                <div className="d-flex justify-content-center mb-4">
                    {
                        selectItem.stock > 0 ?
                            <div className="">
                                <button className='btn btn-success me-2'> 
                                <Link to={`/payments/${selectItem.id}`} className='text-decoration-none text-white'>BuyNow</Link> </button>
                                {addToCartButton ?
                                    <Link to="/cart" className='btn btn-outline-warning'>Go to Cart</Link> :
                                    <button className='btn btn-success' onClick={addToCart} >Add to Cart</button>}
                            </div> :
                            <button className='btn btn-outline-danger'>No Stock</button>
                    }
                </div>
            </div>
        </div>
    )
}
export default Product;

