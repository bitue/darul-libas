import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();
    const [res, setRes] = useState(null);
    const [error, setError] = useState(null);
    const onSubmit = async (data) => {
        console.log(data);

        // post api

        const url = 'https://darullibas-backend.onrender.com/auth/signIn';
        const payload = data;

        const config = {
            headers: {
                Authorization: 'Bearer YOUR_TOKEN_HERE',
                'Content-Type': 'application/json'
            }
        };

        try {
            const response = await axios.post(url, payload, config);
            console.log(response);
            const { data, headers } = response;
            setRes(data);
            console.log(data);
            toast(data.status);
            if (data.status === 'Log in success') {
                // change the local host
                // only here token is add or update
                localStorage.setItem('token', `bearer ${headers.authorization}`);

                navigate('/dashboard');
            } else {
                toast('Invalid Login credentials');
            }
        } catch ({ message }) {
            setError(message);
            console.log(error);
            toast(message);
        } finally {
        }
    };
    return (
        <div>
            <Navbar></Navbar>
            <div class="bg-gray-100 flex justify-center items-center h-screen mx-10 rounded-md">
                <div class="w-1/2 h-3/4 hidden lg:block mx-5 x">
                    <img
                        src="hero.jpg"
                        alt="Placeholder Image"
                        class="object-cover w-full h-full rounded-2xl"
                    />
                </div>

                <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                    <h1 class="text-2xl font-semibold mb-4">ADMIN LOG IN</h1>
                    <form action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
                        <div class="mb-4">
                            <label for="username" class="block text-gray-600">
                                Admin Name
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                class="w-full border bg-white border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                autocomplete="off"
                                {...register('admin', { required: true })}
                            />
                        </div>

                        <div class="mb-4">
                            <label for="password" class="block text-gray-600">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                class="w-full border bg-white border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                autocomplete="off"
                                {...register('password', { required: true })}
                            />
                        </div>

                        <button
                            type="submit"
                            class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Login
                        </button>
                    </form>

                    {/* <div class="mt-6 text-blue-500 text-center">
                        <a href="#" class="hover:underline">
                            Sign up Here
                        </a>
                    </div> */}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;
