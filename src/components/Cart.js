import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductListItem from './ProductListItem';
import { modifyItem, removeItem } from '../redux/reducer/card';
import { Link } from 'react-router-dom';

const Cart = () => {
  const list = useSelector((state) => state.cart.list);
  const dispatch = useDispatch();
  const incrementItem = (item) => {
    dispatch(modifyItem({ ...item, count: item.count + 1 }));
  };
  const decrementItem = (item) => {
    if (item.count === 1) {
      dispatch(removeItem(item.id))
    } else {
      dispatch(modifyItem({ ...item, count: item.count - 1 }))
    }
  }
  const removeFromCart = (id) => {
    dispatch(removeItem(id))
  }
  const center = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "red",
  };
  return (
    <div>
      {list.length > 0 ? (
        list.map((item) => (
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
          <img src="https://royal-llc.com/assets/website/image/oops.png" alt="" width={200} className='mt-5' />
        </div>
      )}
      {list.length > 0 ?
      <div className='d-flex justify-content-center'>
        <Link to="/payments"><button className="btn btn-success" >Go to CheckOut</button></Link>
      </div> : null
        }
    </div>
  );
};
export default Cart;
