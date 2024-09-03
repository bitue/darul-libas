import React, { useContext, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import CheckoutCart from '../components/CheckoutCart/CheckoutCart';
import { useForm } from 'react-hook-form';
import { DataContext } from '../context/dataContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Checkout = () => {
    // hook form func
    const { register, handleSubmit } = useForm();
    // delivery charge
    const [selectedArea, setSelectedArea] = useState('Inside Dhaka');
    // api res and error
    const [err, setErr] = useState(null);
    const [res, setRes] = useState(null);

    // context api
    const { productList, setProductList } = useContext(DataContext);
    console.log(productList, 'form checkout final ...........');
    // now do api call to backend by the product id

    // api call then render the product cart

    const sum = productList.reduce((accumulator, currentValue) => {
        return accumulator + Number(currentValue.productPrice * currentValue.qty);
    }, 0);
    const tt = selectedArea === 'Inside Dhaka' ? 50 + sum : 100 + sum;
    const handleSelectArea = (e) => {
        setSelectedArea(e.target.value);
    };
    const onSubmit = async (data) => {
        console.log(data, productList);
        const productInfoArray = [];
        const { name, email, phone, address } = data;
        for (const i of productList) {
            const {
                productPrice,
                qty: productQty,
                productImg,
                productName,
                productId,
                orderSize: productSize
            } = i;
            productInfoArray.push({
                productPrice,
                productQty,
                productImg,
                productName,
                productId,
                productSize
            });
        }
        console.log(data);

        const url = 'http://localhost:5000/order/makeOrder';

        const payload = {
            name,
            email,
            phone,
            address,
            productInfoArray,
            paymentStatus: 'Cash on Delivery',
            areaStatus: selectedArea,
            totalPrice: tt
        };
        console.log(payload, 'payload>>>>>>>>>>>>>>>>>>>>>>>>>>');

        const config = {
            headers: {
                Authorization: 'Bearer YOUR_TOKEN_HERE',
                'Content-Type': 'application/json'
            }
        };

        try {
            const response = await axios.post(url, payload, config);
            setRes(response.data);
            console.log(res);
            toast('Thank you For your order , we will contact with you soon');
        } catch ({ message }) {
            setErr(message);
            console.log(message);
            toast(message);
        } finally {
        }
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="my-5"></div>
            <section class=" relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-white">
                <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
                    <div class="grid grid-cols-12">
                        <div class="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
                            <div class="flex items-center justify-between pb-8 border-b border-gray-300">
                                <h2 class="font-manrope font-bold text-3xl leading-10 text-white">
                                    Shopping Cart
                                </h2>
                                <h2 class="font-manrope font-bold text-xl leading-8 text-white">
                                    {productList.length} Items
                                </h2>
                            </div>
                            <div class="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
                                <div class="col-span-12 md:col-span-7">
                                    <p class="font-normal text-lg leading-8 text-white">
                                        Product Details
                                    </p>
                                </div>
                                <div class="col-span-12 md:col-span-5">
                                    <div class="grid grid-cols-5">
                                        <div class="col-span-3">
                                            <p class="font-normal text-lg leading-8 text-white text-center">
                                                Quantity
                                            </p>
                                        </div>
                                        <div class="col-span-2">
                                            <p class="font-normal text-lg leading-8 text-white text-center">
                                                Total
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {productList.map((ele) => {
                                return <CheckoutCart data={ele}></CheckoutCart>;
                            })}

                            <div class="flex items-center justify-end mt-8">
                                <button class="flex items-center px-5 py-3 rounded-full gap-2 border-none outline-0 group font-semibold text-lg leading-8 text-indigo-600 shadow-sm shadow-transparent transition-all duration-500 hover:text-indigo-700">
                                    Add Coupon Code
                                    <svg
                                        class="transition-all duration-500 group-hover:translate-x-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                    >
                                        <path
                                            d="M12.7757 5.5L18.3319 11.0562M18.3319 11.0562L12.7757 16.6125M18.3319 11.0562L1.83203 11.0562"
                                            stroke="#4F46E5"
                                            stroke-width="1.6"
                                            stroke-linecap="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class=" rounded col-span-12 xl:col-span-4 bg-white w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
                            <h2 class="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
                                Order Summary
                            </h2>
                            <div class="mt-8">
                                <div class="flex items-center justify-between pb-6">
                                    <p class="font-normal text-lg leading-8 text-black">
                                        {productList.length} Items
                                    </p>
                                    <p class="font-medium text-lg leading-8 text-black">{sum} Tk</p>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <label class="flex  items-center mb-1.5 text-black text-sm font-medium">
                                        Billing Details
                                    </label>
                                    <div class=" absolute left-0 top-0 py-2.5 px-4 text-gray-300 my-2"></div>
                                    <input
                                        {...register('name', { required: true })}
                                        type="text"
                                        class="block my-2 w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                                        placeholder="Enter Your Name"
                                    />
                                    <div class=" absolute left-0 top-0 py-2.5 px-4 text-gray-300 "></div>
                                    <input
                                        {...register('email', { required: true })}
                                        type="text"
                                        class="block my-2 w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                                        placeholder="Enter Your Email"
                                    />
                                    <div class=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
                                    <input
                                        {...register('phone', { required: true })}
                                        type="text"
                                        class="block my-2 w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                                        placeholder="Enter Phone Number"
                                    />
                                    <div class=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
                                    <input
                                        {...register('address', { required: true })}
                                        type="text"
                                        class="block my-2 w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                                        placeholder="Enter Your Address"
                                    />
                                    {/* <div className="flex justify-between">
                                        <label className="label cursor-pointer">
                                            <span className="text-black"> Outside Dhaka </span>
                                            <input
                                                {...register('delivery', { required: true })}
                                                type="radio"
                                                name="radio-10"
                                                className="radio checked:bg-black mx-1"
                                                defaultChecked
                                            />
                                        </label>
                                        <label className="label cursor-pointer">
                                            <span className="text-black"> Inside Dhaka </span>
                                            <input
                                                {...register('delivery', { required: true })}
                                                type="radio"
                                                name="radio-10"
                                                className="radio checked:bg-black mx-1"
                                                defaultChecked
                                            />
                                        </label>
                                    </div> */}
                                    <select
                                        className="select select-primary block my-4 w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                                        {...register('areaStatus')}
                                        value={selectedArea}
                                        onChange={handleSelectArea}
                                    >
                                        <option disabled selected>
                                            Area Status
                                        </option>

                                        <option value="Inside Dhaka" key="Inside Dhaka">
                                            Inside Dhaka
                                        </option>
                                        <option value="Outside Dhaka" key="Outside Dhaka">
                                            Outside Dhaka
                                        </option>
                                    </select>

                                    <label class="flex items-center mb-1.5 text-gray-400 text-sm font-medium">
                                        Promo Code
                                    </label>
                                    <div class="flex pb-4 w-full">
                                        <div class="relative w-full ">
                                            <div class=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
                                            <input
                                                type="text"
                                                class="block my-2 w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                                                placeholder="xxxx xxxx xxxx"
                                            />
                                            <button
                                                id="dropdown-button"
                                                data-target="dropdown"
                                                class="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center py-4 px-4 text-base font-medium text-center text-gray-900 bg-transparent  absolute right-0 top-0 pl-2 "
                                                type="button"
                                            ></button>
                                        </div>
                                    </div>

                                    <div class="flex items-center border-b border-gray-200">
                                        <button class="rounded-lg w-full bg-black py-2.5 px-4 text-white text-sm font-semibold text-center mb-8 transition-all duration-500 hover:bg-black/80">
                                            Apply
                                        </button>
                                    </div>
                                    <div class="flex items-center justify-between py-3">
                                        <p class="font-medium text-xl leading-8 text-black">
                                            {productList.length} Items
                                        </p>
                                        <p class="font-semibold text-xl leading-8 text-indigo-600">
                                            {sum} TK
                                        </p>
                                    </div>
                                    <div class="flex items-center justify-between py-3">
                                        <p class="font-medium text-xl leading-8 text-black">
                                            {selectedArea} delivery charge
                                        </p>
                                        <p class="font-semibold text-xl leading-8 text-indigo-600">
                                            {selectedArea === 'Inside Dhaka' ? 50 : 100} TK
                                        </p>
                                    </div>
                                    <div class="flex items-center justify-between py-3">
                                        <p class="font-medium text-xl leading-8 text-black">
                                            Total Price
                                        </p>
                                        <p class="font-semibold text-xl leading-8 text-indigo-600">
                                            {tt} TK
                                        </p>
                                    </div>
                                    <p class="font-semibold text-xl leading-8 text-indigo-600">
                                        * Cash on Delivery *
                                    </p>
                                    <button
                                        class="w-full text-center bg-indigo-600 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700"
                                        type="submit"
                                    >
                                        Checkout
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </div>
    );
};

export default Checkout;
