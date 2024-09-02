import React, { useEffect, useState } from 'react';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Product from '../components/Product/Product';
import axios from 'axios';
import { toast } from 'react-toastify';
const Products = () => {
    const [pro, setPro] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // const [co, setCo] = useState(0);

    const fetchData = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/public/getAllProducts');
            setPro(data.products);
            console.log(pro);
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
                <div className="flex justify-around flex-wrap ">
                    {pro.map((ele) => {
                        return <Product data={ele}></Product>;
                    })}
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Products;
