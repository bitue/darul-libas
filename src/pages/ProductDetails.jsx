import React, { useContext, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { DataContext } from '../context/dataContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
    const [selectedSize, setSelectedSize] = useState('');

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const Location = useLocation();
    console.log(Location.state, 'info from product');
    const {
        productImgList,
        productId,
        productName,
        productPrice,
        star,
        size,
        reviews,
        description,
        features
    } = Location.state;

    const navigate = useNavigate();

    // place holder value change
    const [value, setValue] = useState(0);

    const [imgSrc, setImgSrc] = useState(productImgList[0]);
    const handleChangeSrc = (event) => {
        // console.log(event.target.src);
        setImgSrc(event.target.src);
    };

    // context api to get the main data
    const { productList, setProductList } = useContext(DataContext);
    // cart function
    const handleCart = () => {
        const addProductInfo = {
            productImg: imgSrc,
            qty: value,
            productName: productName,
            productId: productId,
            orderSize: selectedSize,
            productPrice
        };
        // this time productList updated
        if (value <= 0) {
            toast('please add Quantity ');
            return;
        }
        // if (size ){

        // }
        setProductList([...productList, addProductInfo]);
        navigate('/checkout');
    };
    // increase and decrease quantity func

    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-gray-100">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/2 px-4 mb-8">
                            <img
                                src={imgSrc}
                                alt="Product"
                                className="w-full h-auto rounded-lg shadow-md mb-4"
                                id="mainImage"
                                onClick={(e) => handleChangeSrc(e)}
                            />
                            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                                {productImgList.map((ele) => {
                                    return (
                                        <img
                                            src={ele}
                                            alt="Thumbnail 1"
                                            className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                                            onClick={(e) => handleChangeSrc(e)}
                                        />
                                    );
                                })}
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 px-4">
                            <h2 className="text-3xl font-bold mb-2">{productName}</h2>
                            <p className="text-gray-600 mb-4">{productId}</p>
                            <div className="mb-4">
                                <span className="text-2xl font-bold mr-2">{productPrice} TK</span>
                            </div>
                            <div className="flex items-center mb-4">
                                {Array.from({ length: star }).map((_, index) => (
                                    <div key={index}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="size-6 text-yellow-500"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                ))}

                                <span className="ml-2 text-gray-600">
                                    {star} ({reviews} reviews)
                                </span>
                            </div>
                            <p className="text-gray-700 mb-6">{description}</p>

                            {/* <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-2">Color:</h3>
                                <div className="flex space-x-2">
                                    <button className="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
                                    <button className="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>
                                    <button className="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
                                </div>
                            </div> */}

                            <div className="mb-6">
                                <label
                                    for="quantity"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Quantity:
                                </label>
                                {/* <input
                                    type="number"
                                    id="quantity"
                                    name="quantity"
                                    min="1"
                                    value="1"
                                    className="w-12 text-center rounded-md border-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                /> */}
                                <div class="flex items-center h-full">
                                    <button
                                        class="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
                                        onClick={() =>
                                            setValue((value) => (value > 0 ? value - 1 : value))
                                        }
                                    >
                                        <svg
                                            class="stroke-black"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="22"
                                            height="22"
                                            viewBox="0 0 22 22"
                                            fill="none"
                                        >
                                            <path
                                                d="M16.5 11H5.5"
                                                stroke=""
                                                stroke-width="1.6"
                                                stroke-linecap="round"
                                            />
                                            <path
                                                d="M16.5 11H5.5"
                                                stroke=""
                                                stroke-opacity="0.2"
                                                stroke-width="1.6"
                                                stroke-linecap="round"
                                            />
                                            <path
                                                d="M16.5 11H5.5"
                                                stroke=""
                                                stroke-opacity="0.2"
                                                stroke-width="1.6"
                                                stroke-linecap="round"
                                            />
                                        </svg>
                                    </button>
                                    <input
                                        type="text"
                                        class="border-y border-gray-200 outline-none text-black font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-black py-[15px]  text-center bg-transparent"
                                        placeholder={value}
                                    />
                                    <button
                                        class="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
                                        onClick={() => setValue((value) => value + 1)}
                                    >
                                        <svg
                                            class="stroke-black"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="22"
                                            height="22"
                                            viewBox="0 0 22 22"
                                            fill="none"
                                        >
                                            <path
                                                d="M11 5.5V16.5M16.5 11H5.5"
                                                stroke=""
                                                stroke-width="1.6"
                                                stroke-linecap="round"
                                            />
                                            <path
                                                d="M11 5.5V16.5M16.5 11H5.5"
                                                stroke=""
                                                stroke-opacity="0.2"
                                                stroke-width="1.6"
                                                stroke-linecap="round"
                                            />
                                            <path
                                                d="M11 5.5V16.5M16.5 11H5.5"
                                                stroke=""
                                                stroke-opacity="0.2"
                                                stroke-width="1.6"
                                                stroke-linecap="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div class="mb-4">
                                    <span class="font-bold text-black dark:text-gray-300">
                                        Select Size:
                                    </span>
                                    <div class="flex items-center mt-2">
                                        <select
                                            className="select select-primary block my-4  h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                                            value={selectedSize}
                                            onChange={handleSizeChange}
                                        >
                                            <option disabled selected>
                                                Please Select Size
                                            </option>
                                            {size.map((ele) => {
                                                return <option value={ele}>{ele}</option>;
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="flex space-x-4 mb-6">
                                <button
                                    className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    onClick={handleCart}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="size-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                        />
                                    </svg>
                                    Proceed To Checkout
                                </button>
                                {/* <button className="bg-gray-200 flex gap-2 items-center  text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="size-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                        />
                                    </svg>
                                    Wishlist
                                </button> */}
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
                                <ul className="list-disc list-inside text-gray-700">
                                    {features.map((ele) => {
                                        return <li>{ele}</li>;
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductDetails;
