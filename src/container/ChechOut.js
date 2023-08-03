import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modifyItem, removeItem } from '../redux/reducer/card';
import { Link, useParams } from 'react-router-dom';
import ProductListItem from '../components/ProductListItem';
import { getUsers } from '../redux/reducer/userSlice';

const CheckOut = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])
    const params = useParams();
    const list = useSelector((state) => state.cart.list);
    const buyList = useSelector((store) => store.users.users);
    const [state, setState] = useState(
        params.id ?
            [{ ...buyList.find((element) => element.id === parseInt(params.id)), count: 1 }]
            : list
    );
    const incrementItem = (item) => {
        dispatch(modifyItem({ ...item, count: item.count + 1 }));
        setState([{ ...item, count: item.count + 1 }])
    };
    const decrementItem = (item) => {
        if (item.count === 1) {
            dispatch(removeItem(item.id))
            setState(state.filter((checkoutlist) => checkoutlist.id !== item.id))
        } else {
            dispatch(modifyItem({ ...item, count: item.count - 1 }))
            setState([{ ...item, count: item.count - 1 }])
        }
    }
    const removeFromCart = (id) => {
        dispatch(removeItem(id));
        setState(state.filter((item) => item.id !== id));
        // Update the component state by filtering out the item
    };
    const center = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "red",
    };
    return (
        <div>
            {state.length > 0 ? (
                state.map((item) => (
                    <div className="" key={item.id}>
                        <ProductListItem
                            {...item}
                            key={item.id}
                            incrementItem={() => incrementItem(item)}
                            decrementItem={() => decrementItem(item)}
                            removeFromCart={() => removeFromCart(item.id)}
                        />
                    </div>
                ))
            ) : (
                <div className="" style={center}>
                    <h2 className='mt-4'>Ohhh!!!!! &nbsp;   Your Cart is Empty</h2>
                    <img src="https://royal-llc.com/assets/website/image/oops.png"
                        alt="" width={150} className='mt-5 mb-3' />
                    <div className='d-flex justify-content-center'>
                        <Link to="/"><button className="btn btn-success " >shop now </button></Link>
                    </div>
                </div>

            )}
            <div className='d-flex justify-content-center'>
                <Link to="/payments"><button className="btn btn-success" >Payment</button></Link>
            </div>
        </div>
    );
};
export default CheckOut;

