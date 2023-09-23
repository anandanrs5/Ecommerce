import React, { useEffect } from 'react';
import { getUsers } from '../redux/reducer/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard'

const Dashboard = () => {
    const { users, loading } = useSelector((store) => store.users)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers()) 
    }, [dispatch])

    if (loading) {
        return <div className="">loading...</div>
    }
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {users.map((product) => (
                <ProductCard {...product} key={product.id} />
            ))}
        </div>
    );
};

export default Dashboard;
