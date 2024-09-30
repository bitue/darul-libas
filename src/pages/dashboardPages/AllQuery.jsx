import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Puff } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import { DataContext } from '../../context/dataContext';

const AllQuery = () => {
    const [query, setQuery] = useState(null);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null);
    const [co, setCo] = useState(0);
    // const { token } = useContext(DataContext);

    const getData = async () => {
        try {
            const { data } = await axios.get(
                'https://darullibas-backend.onrender.com/query/getAllQueries',
                {
                    headers: {
                        Authorization: token
                    }
                }
            );
            console.log(data);
            setQuery(data.getQuery);
        } catch ({ message }) {
            setErr(message);
            toast(message);
        } finally {
            setLoading(false);
        }
    };

    const closeQuery = async (id) => {
        try {
            if (window.confirm('Are you sure want to close Query ?')) {
                setLoading(true);
                const { data } = await axios({
                    method: 'delete',
                    url: 'https://darullibas-backend.onrender.com/query/closeQuery',
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
            setErr(error.message);
            console.log(error.message);
            toast(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, [co]);
    return (
        <div>
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
                <>
                    {query?.length &&
                        query.map((ele) => {
                            return (
                                <div className="card card-side bg-base-100 shadow-xl my-5">
                                    <div className="card-body">
                                        <h2 className="card-title">{ele.name}</h2>
                                        <p>email : {ele.email}</p>

                                        <p>phone : {ele.phone}</p>
                                        <p>query : {ele.message}</p>
                                        <div className="card-actions justify-end">
                                            <button
                                                className="btn btn-primary"
                                                onClick={() => closeQuery(ele._id)}
                                            >
                                                Close Query
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </>
            )}
        </div>
    );
};

export default AllQuery;
