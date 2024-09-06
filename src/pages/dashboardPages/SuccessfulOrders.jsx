import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';

import { DataContext } from '../../context/dataContext';

const SuccessfulOrders = () => {
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { token } = useContext(DataContext);

    // const [co, setCo] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(
                    'http://localhost:5000/order/getAllSuccessfulOrder',
                    {
                        headers: {
                            Authorization: token
                        }
                    }
                );
                setOrder(data.getAllOrders);
                console.log(data.getAllOrders);
            } catch ({ message }) {
                setError(message);
                console.log(message);
            } finally {
                setLoading(false);
                setError(null);
                // const orderStatusArray = ['arrived', 'approved', 'done'];
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {loading ? (
                <p>I am loading ....</p>
            ) : (
                <div>
                    <h2 className="text-3xl text-center my-5 ">Order Information Admin Panel</h2>
                    <div className="">
                        {order &&
                            order.map((ele, idx) => {
                                return (
                                    <div className="border-2 border-indigo-600 my-5">
                                        <h2 className="text-2xl text-center my-3 ">
                                            Ordered Product Information {idx + 1}
                                        </h2>
                                        <div className="flex flex-wrap  ">
                                            {ele.shoppingInfo.map((i) => {
                                                return (
                                                    <div className=" rounded-md m-4">
                                                        <figure>
                                                            <img
                                                                src={i.productImg}
                                                                alt="productImg"
                                                                className="w-[300] rounded-s-md"
                                                            />
                                                        </figure>
                                                        <div className="card-body">
                                                            <h2 className="card-title">
                                                                {i.productName}
                                                            </h2>
                                                            <p>Price : {i.productPrice}</p>
                                                            <p>Quantity : {i.productQty}</p>
                                                            <p>
                                                                Total Product Price :{' '}
                                                                {i.productPrice * i.productQty}
                                                            </p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <div className="card card-side bg-base-100 shadow-xl my-5 ">
                                            <div className="card-body">
                                                <p className="">Customer Information : </p>
                                                <h2 className="card-title">
                                                    name :{ele.customerInfo?.name}
                                                </h2>
                                                <h2 className="card-title">
                                                    email :{ele.customerInfo?.email}
                                                </h2>
                                                <h2 className="card-title">
                                                    phone :{ele.customerInfo?.phone}
                                                </h2>
                                                <h2 className="card-title">
                                                    Shipping Address :{ele.customerInfo?.address}
                                                </h2>

                                                <p>area : {ele.areaStatus}</p>
                                                <p>Payment Status :{ele.paymentStatus}</p>
                                                <p>Total Price :{ele.totalPrice}</p>
                                                <div className="flex justify-around">
                                                    <p>
                                                        Order Status :{' '}
                                                        <p className="text-indigo-600 text-2xl font-bold">
                                                            {' '}
                                                            {ele.orderStatus}
                                                        </p>
                                                    </p>
                                                    {/* <div className="flex justify-between gap-x-4">
                                                    <button className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled">
                                                        {' '}
                                                        Previous Status
                                                    </button>
                                                    <button className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                                        {' '}
                                                        Next Status
                                                    </button>

                                                    <button className="bg-red-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                                                        {' '}
                                                        Delete Order
                                                    </button>
                                                </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            )}
        </>
    );
};

export default SuccessfulOrders;
