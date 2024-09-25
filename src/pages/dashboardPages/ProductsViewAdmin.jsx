import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../context/dataContext';
import { Puff } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductViewAdmin = () => {
    const [pro, setPro] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [co, setCo] = useState(0);
    const { token } = useContext(DataContext);

    const navigate = useNavigate();
    const handleProductDetails = (editProductDetails) => {
        navigate('/dashboard/editProduct', { state: editProductDetails });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(
                    'https://darullibas-backend.onrender.com/public/getAllProducts',
                    {
                        headers: {
                            Authorization: token
                        }
                    }
                );
                // setPro(data.products);
                setPro(data.products);
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
                    url: 'https://darullibas-backend.onrender.com/admin/deleteProduct',
                    data: { id },
                    headers: {
                        Authorization: token // Replace with your actual token
                    }
                });
                console.log(data.message);
                toast(data.message);
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

    console.log(pro, 'final');

    return (
        <>
            {loading ? (
                <div className="flex justify-center items-center h-full w-full ">
                    <Puff
                        visible={true}
                        height="100"
                        width="100"
                        color="#335bff"
                        ariaLabel="puff-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>
            ) : (
                <div>
                    <h3 className="text-white text-center text-2xl">Product View Page Admin</h3>
                    {pro?.length > 0 &&
                        pro.map((cat) => {
                            return (
                                <div key={cat._id}>
                                    <p className="text-2xl font-bold text-indigo-600">
                                        {cat.name} Category
                                    </p>
                                    {cat.products.map((ele) => (
                                        <div
                                            key={ele._id}
                                            className="card card-side bg-base-100 shadow-xl my-5"
                                        >
                                            <figure className="w-3/12">
                                                <img
                                                    src={ele.productImgList[0]}
                                                    alt={ele.productName}
                                                />
                                            </figure>
                                            <div className="card-body">
                                                <h2 className="card-title">{ele.productName}</h2>
                                                <p>{ele.description}</p>
                                                <p>Price: {ele.productPrice}</p>
                                                <p>Brand: {ele.productBrand}</p>
                                                <div className="card-actions justify-end">
                                                    {/* <button
                                                        className="btn btn-primary bg-indigo-600"
                                                        onClick={() => handleProductDetails(ele)}
                                                    >
                                                        Edit Product
                                                    </button> */}
                                                    <button
                                                        className="btn bg-black text-white"
                                                        onClick={() => deleteProduct(ele._id)}
                                                    >
                                                        Delete Product
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            );
                        })}
                </div>
            )}
        </>
    );
};

export default ProductViewAdmin;
