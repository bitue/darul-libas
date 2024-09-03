import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Order = () => {
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/order/getAllOrders');
                setOrder(data.getAllOrders);
                console.log(data.getAllOrders);
            } catch ({ message }) {
                setError(message);
                console.log(message);
            } finally {
                setLoading(false);
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
                    {order.map((ele) => {
                        return (
                            <div className="card card-side bg-base-100 shadow-xl my-5">
                                {/* <figure>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                        alt="Movie"
                                    />
                                </figure> */}
                                <div className="card-body">
                                    <p>Customer Info : </p>
                                    <h2 className="card-title">name :{ele.customerInfo?.name}</h2>
                                    <h2 className="card-title">email :{ele.customerInfo?.email}</h2>
                                    <h2 className="card-title">phone :{ele.customerInfo?.phone}</h2>
                                    <p> Shopping Info Info : </p>
                                    {ele.shoppingInfo.map((i) => {
                                        return (
                                            <>
                                                <p>{i.productName}</p>
                                                <p>{i.productQty}</p>
                                                <p>{i.productPrice}</p>
                                                <figure>
                                                    {' '}
                                                    <img src={i.productImg} alt="" />
                                                </figure>
                                            </>
                                        );
                                    })}
                                    <p>{ele.areaStatus}</p>
                                    <p>{ele.paymentStatus}</p>
                                    <p>{ele.totalPrice}</p>
                                    <p>{ele.orderStatus}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default Order;
