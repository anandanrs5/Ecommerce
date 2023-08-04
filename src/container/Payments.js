import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUsers } from '../redux/reducer/userSlice';

const Payments = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const params = useParams();
  const list = useSelector((state) => state.cart.list);
  const buyList = useSelector((store) => store.users.users);

  const [state] = useState(
    params.id ? [buyList.find((element) => element.id === parseInt(params.id))] : list
  );

  // Calculate the grand total for the selected products in state
  const grandTotal = state.reduce((total, item) => total + (item.count || 1) * item.price, 0);

  if (state == null) {
    return null; // Return null or any placeholder while loading
  }

  return (
    <div className="">
      {state.length > 0 ? (
        <table className="table table-success">
          <thead>
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {state.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.count ? item.count : 1}</td>
                <td>{item.count ? item.count * item.price : item.price}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" className="text-end fw-bold">
                Grand Total:
              </td>
              <td>{grandTotal}</td>
            </tr>
          </tfoot>
        </table>
      ) : (
        <div className="">
          <h2 className="mt-4">Ohhh!!!!! &nbsp; Your Cart is Empty</h2>
        </div>
      )}
    </div>
  );
};

export default Payments;
