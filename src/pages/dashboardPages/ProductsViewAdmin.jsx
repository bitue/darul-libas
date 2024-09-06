import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../context/dataContext';
import Product from '../../components/Product/Product';

const ProductViewAdmin = () => {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [co, setCo] = useState(0);
    const { token } = useContext(DataContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/public/getAllProducts', {
                    headers: {
                        Authorization: token
                    }
                });
                // setPro(data.products);
                setProducts(data.products);
                console.log(products);
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
                    data: { id },
                    headers: {
                        Authorization: token // Replace with your actual token
                    }
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
                    {/* {products &&
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
                        })} */}
                </div>

                // <div>
                //     <h3 className="text-white text-center text-2xl">Product View Page Admin</h3>
                //     {pro &&
                //         pro.map((e) => {
                //             <p>{e.name}</p>;
                //             e.products.map((ele) => {
                //                 return (
                //                     <>
                //                         <div className="card card-side bg-base-100 shadow-xl my-5">
                //                             <figure className="w-3/12">
                //                                 <img src={ele.productImgList[0]} alt="Movie" />
                //                             </figure>
                //                             <div className="card-body">
                //                                 <h2 className="card-title">{ele.productName}</h2>
                //                                 <p>{ele.description}</p>
                //                                 <p> Price : {ele.productPrice}</p>
                //                                 <p>Brand : {ele.productBrand}</p>
                //                                 <div className="card-actions justify-end">
                //                                     <button className="btn btn-primary bg-indigo-600">
                //                                         Edit Product
                //                                     </button>

                //                                     <button
                //                                         className="btn bg-black text-white "
                //                                         onClick={() => deleteProduct(ele._id)}
                //                                     >
                //                                         deleteProduct
                //                                     </button>
                //                                 </div>
                //                             </div>
                //                         </div>
                //                     </>
                //                 );
                //             });
                //         })}
                // </div>
            )}
        </>
    );
};

export default ProductViewAdmin;
