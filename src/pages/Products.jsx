import React, { useEffect, useState } from 'react';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Product from '../components/Product/Product';
import axios from 'axios';
import { toast } from 'react-toastify';
const Products = () => {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/public/getAllProducts');
            console.log(data.products);
            setProducts(data.products);

            console.log(products);
        } catch ({ message }) {
            setError(message);
            console.log(error);
            toast(message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <Navbar />
            {loading ? (
                <p>I am loading</p>
            ) : (
                <div>
                    {products &&
                        products.map((cat) => {
                            return (
                                <div>
                                    <p className="ms-16 text-2xl font-bold my-1 text-indigo-600">
                                        {cat.name} Collections
                                    </p>
                                    <div className="flex justify-around flex-wrap ">
                                        {cat.products.map((e) => {
                                            return <Product data={e}></Product>;
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Products;
