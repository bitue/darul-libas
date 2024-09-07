import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DataContext } from '../../context/dataContext';
import { Puff } from 'react-loader-spinner';

const AllCategories = () => {
    const [cat, setCat] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [co, setCo] = useState(0);
    const { token } = useContext(DataContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/public/getAllCategories');
                setCat(data.categories);
                console.log(cat);
            } catch ({ message }) {
                setError(message);
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [co]);
    // delete category
    const deleteCategory = async (id) => {
        try {
            if (
                window.confirm(
                    'Are you sure want to delete Category as well as delete all product associated this category'
                )
            ) {
                setLoading(true);
                const { data } = await axios({
                    method: 'delete',
                    url: 'http://localhost:5000/admin/deleteCategory',
                    data: { id },
                    headers: {
                        Authorization: token
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
            toast(error.message);
        } finally {
            setLoading(false);
        }
    };
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
                    <p className="text-center text-3xl p-3">All Category page </p>
                    {cat &&
                        cat.map((ele) => {
                            return (
                                <div className="card card-side bg-base-100 shadow-xl my-5">
                                    <figure className="w-3/12">
                                        <img src={ele.img} alt="Movie" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{ele.name}</h2>
                                        <p>{ele.description}</p>
                                        <p>reviews : {ele.reviews}</p>
                                        <div className="card-actions justify-end">
                                            <button
                                                className="btn btn-primary"
                                                onClick={() => deleteCategory(ele._id)}
                                            >
                                                Delete Category
                                            </button>
                                        </div>
                                        {/* {ele.admin !== 'admin0' ? (
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">
                                                Delete Admin
                                            </button>
                                        </div>
                                    ) : (
                                        ''
                                    )} */}
                                    </div>
                                </div>
                            );
                        })}
                </div>
            )}
        </>
    );
};

export default AllCategories;
