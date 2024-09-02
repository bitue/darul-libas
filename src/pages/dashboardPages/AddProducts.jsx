import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProducts = () => {
    // when component mount

    const [categories, setCategories] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [res, setRes] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/public/getAllCategories');
                setCategories(data.categories);
                console.log(data.categories);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Empty dependency array means this effect runs once after the component mounts.

    // form data processing .....................
    const { register, handleSubmit } = useForm();
    const dataProcess = (data) => {
        let { features, size, amountOfSell, productPrice, reviews, star, productImgList } = data;
        features = features.split(',');
        size = size.split(',');
        productImgList = productImgList.split(',');

        amountOfSell = Number(amountOfSell);
        productPrice = Number(productPrice);
        reviews = Number(reviews);
        star = Number(star);

        return {
            features,
            size,
            productImgList,
            amountOfSell,
            productPrice,
            reviews,
            star
        };
    };
    // add product post api call here

    const onSubmit = async (data) => {
        const { features, size, productImgList, amountOfSell, productPrice, reviews, star } =
            dataProcess(data);
        const processData = {
            ...data,
            features,
            size,
            productImgList,
            amountOfSell,
            productPrice,
            reviews,
            star
        };
        console.log(processData);

        const url = 'http://localhost:5000/admin/addProduct';
        const payload = processData;

        const config = {
            headers: {
                Authorization: 'Bearer YOUR_TOKEN_HERE',
                'Content-Type': 'application/json'
            }
        };

        try {
            const response = await axios.post(url, payload, config);
            setRes(response.data);
            toast('Product Added Successfully');
        } catch (error) {
            setError(error);
            toast(error.message);
        } finally {
        }
    };

    return (
        <>
            {loading ? (
                <div>
                    <p>I am loading</p>
                </div>
            ) : (
                <div className="text-white  mx-auto">
                    <h3 className="text-white text-center text-4xl">Add Products</h3>
                    <div className="m-5 w-11/12 mx-auto">
                        <div className="text-center mb-8 ">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class=" absolute left-0 top-0 py-2.5 px-4 text-gray-300 my-2"></div>
                                <input
                                    {...register('productName', { required: true })}
                                    type="text"
                                    class="block my-4 w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                                    placeholder="productName"
                                />
                                <div class=" absolute left-0 top-0 py-2.5 px-4 text-gray-300 "></div>
                                <input
                                    {...register('productPrice', { required: true })}
                                    type="number"
                                    class="block my-4 w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                                    placeholder="productPrice"
                                />
                                <div class=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
                                <input
                                    {...register('productImgList', { required: true })}
                                    type="text"
                                    class="block my-4 w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                                    placeholder="productImgList"
                                />
                                <div class=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>

                                <select
                                    className="select select-primary block my-4 w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                                    {...register('productStatus')}
                                >
                                    <option disabled selected>
                                        Product Status
                                    </option>
                                    <option selected>In Stock</option>
                                    <option>Stock out</option>
                                </select>
                                <div class=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
                                <input
                                    {...register('productBrand', { required: true })}
                                    type="text"
                                    class="block my-4 w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                                    placeholder="productBrand"
                                />
                                <div class=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
                                <input
                                    {...register('description', { required: true })}
                                    type="text"
                                    class="block my-4 w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                                    placeholder="description"
                                />
                                <div class=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>

                                <select
                                    className="select select-primary block my-4 w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                                    {...register('category')}
                                >
                                    <option disabled selected>
                                        Select Category
                                    </option>
                                    {categories.map((ele) => (
                                        <option value={ele._id}>{ele.name}</option>
                                    ))}
                                </select>
                                <div class=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
                                <input
                                    {...register('amountOfSell', { required: true })}
                                    type="number"
                                    class="block my-4 w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                                    placeholder="amountOfSell"
                                />
                                <div class=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
                                <input
                                    {...register('star', { required: true })}
                                    type="number"
                                    class="block my-4 w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                                    placeholder="star"
                                />
                                <div class=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
                                <input
                                    {...register('size', { required: true })}
                                    type="text"
                                    class="block my-4 w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                                    placeholder="size List"
                                />

                                <div class=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
                                <input
                                    {...register('reviews', { required: true })}
                                    type="number"
                                    class="block my-4 w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                                    placeholder="reviews"
                                />

                                <div class=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
                                <input
                                    {...register('features', { required: true })}
                                    type="text"
                                    class="block my-4 w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                                    placeholder="features"
                                />

                                <button
                                    class="w-full py-4 font-semibold text-white transition-colors bg-indigo-600 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black "
                                    type="submit"
                                >
                                    {' '}
                                    Add this Product
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AddProducts;
