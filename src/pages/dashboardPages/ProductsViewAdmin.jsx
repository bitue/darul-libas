import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProductViewAdmin = () => {
    const [pro, setPro] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [co, setCo] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/public/getAllProducts');
                // setPro(data.products);
                setPro((pre) => {
                    return data.products;
                });
                console.log(pro);
            } catch ({ message }) {
                setError(message);
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [co]);

    const deleteProduct = async (id) => {
        try {
            if (window.confirm('Are you sure want to delete Product')) {
                setLoading(true);
                const { data } = await axios({
                    method: 'delete',
                    url: 'http://localhost:5000/admin/deleteProduct',
                    data: { id }
                });
                console.log(data);
                setCo(co + 1);
            } else {
                return;
            }
        } catch (error) {
            setError(error.message);
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {loading ? (
                <p>I am loading ....</p>
            ) : (
                <div>
                    <h3 className="text-white text-center text-2xl">Product View Page Admin</h3>
                    {pro.map((ele) => {
                        return (
                            <>
                                <div className="card card-side bg-base-100 shadow-xl my-5">
                                    <figure className="w-3/12">
                                        <img src={ele.productImgList[0]} alt="Movie" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{ele.productName}</h2>
                                        <p>{ele.description}</p>
                                        <p> Price : {ele.productPrice}</p>
                                        <p>Brand : {ele.productBrand}</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary bg-indigo-600">
                                                Edit Product
                                            </button>

                                            <button
                                                className="btn bg-black text-white "
                                                onClick={() => deleteProduct(ele._id)}
                                            >
                                                deleteProduct
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default ProductViewAdmin;
