import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DataContext } from '../../context/dataContext';

const CreateAdmin = () => {
    const { register, handleSubmit } = useForm();
    const [res, setRes] = useState(null);
    const [error, setError] = useState(null);
    const { token } = useContext(DataContext);
    const onSubmit = async (data) => {
        data.role = 'admin';

        console.log(data);
        // post api

        const url = 'http://localhost:5000/admin/createAdmin';
        const payload = data;

        const config = {
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        };

        try {
            const response = await axios.post(url, payload, config);
            setRes(response.data);
            console.log(res);
            toast('Admin Created ...');
        } catch ({ message }) {
            setError(message);
            console.log(error);
            toast(message);
        } finally {
        }
    };

    return (
        <div className="text-white  mx-auto">
            <h3 className="text-white text-center text-4xl">Create Admin Page</h3>
            <div className="m-5 w-11/12 mx-auto">
                <div className="text-center mb-8 ">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class=" absolute left-0 top-0 py-2.5 px-4 text-gray-300 my-2"></div>
                        <input
                            {...register('admin', { required: true })}
                            type="text"
                            class="block my-4 w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                            placeholder="admin name (Unique)"
                        />
                        <div class=" absolute left-0 top-0 py-2.5 px-4 text-gray-300 "></div>
                        <input
                            {...register('password', { required: true })}
                            type="text"
                            class="block my-4 w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                            placeholder="Enter min 6 character password"
                        />
                        <div class=" absolute left-0 top-0 py-2.5 px-4 text-gray-300 "></div>
                        <input
                            {...register('phone', { required: true })}
                            type="text"
                            class="block my-4 w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                            placeholder="Enter Phone Number"
                        />
                        <button
                            class="w-full py-4 font-semibold text-white transition-colors bg-indigo-600 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black "
                            type="submit"
                        >
                            {' '}
                            Create Admin
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateAdmin;
