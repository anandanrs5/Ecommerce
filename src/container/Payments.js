import React from 'react'
import { useSelector } from 'react-redux'

const Payments = () => {
    const pay = useSelector((state) => state.cart.list);
    const grandTotal = pay.reduce((acc, item) => acc + item.count * item.price, 0);
    return (
        <div className="">
            <table className="table table-success" >
                <thead>
                    <tr>
                        <th scope="col">S.no</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                {pay.length > 0 ? (
                    pay.map((item, index) => (
                        <tbody key={item.id}>
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>{item.count}</td>
                                <td>{item.count * item.price}</td>
                            </tr>
                        </tbody>
                    ))
                )
                : (
                        <div className="">
                            <h2 className='mt-4'>Ohhh!!!!! &nbsp;   Your Cart is Empty</h2>
                        </div>
                )}
                <tfoot>
                    <tr>
                        <td colSpan="4" className="text-end fw-bold">Grand Total:</td>
                        <td>{grandTotal}</td>
                    </tr>
                </tfoot>
            </table>
        </div>

    )
}

export default Payments
