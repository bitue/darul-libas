import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../context/dataContext';

const AdminProfile = () => {
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { token } = useContext(DataContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/admin/getAllAdmin', {
                    headers: {
                        Authorization: token
                    }
                });
                setAdmin(data.admin);
                console.log(data.admin);
            } catch (error) {
                setError(error);
                console.log(error);
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
                    {admin &&
                        admin.map((ele) => {
                            return (
                                <div className="card card-side bg-base-100 shadow-xl my-5">
                                    <figure>
                                        <img
                                            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                            alt="Movie"
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{ele.admin}</h2>
                                        <p>{ele.phone}</p>
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

export default AdminProfile;
