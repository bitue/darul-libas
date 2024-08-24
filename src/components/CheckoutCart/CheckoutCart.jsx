import React, { useContext, useState } from 'react';
import { DataContext } from '../../context/dataContext';

const CheckoutCart = ({ data }) => {
    console.log(data, 'data---------------------');

    // context api data value here
    const { qty, productPrice, productName, productImg, productId, orderSize } = data;

    // update the value by product id
    // context api to get the main data
    const { productList, setProductList } = useContext(DataContext);
    console.log(productList, ' checkout ---------------------------');
    const [checkQty, setCheckQty] = useState(qty);
    const handleChangeQty = (id, val, sign) => {
        if (sign === '+') {
            setCheckQty((pre) => {
                const new_pre = pre + 1;
                const updatedState = productList.map((item) =>
                    item.productId === id ? { ...item, qty: new_pre } : item
                );
                setProductList(updatedState);
                return new_pre;
            });
        } else {
            setCheckQty((pre) => {
                let new_pre = 0;
                if (pre > 0) {
                    new_pre = pre - 1;
                }

                const updatedState = productList.map((item) =>
                    item.productId === id ? { ...item, qty: new_pre } : item
                );
                setProductList(updatedState);
                return new_pre;
            });
        }
    };

    const handleRemove = (idToRemove) => {
        const updatedState = productList.filter((item) => item.productId !== idToRemove);
        setProductList(updatedState);
    };
    console.log(productList, '--------------------update-done -after -------------------');
    return (
        <div>
            <div class="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6 group-hover:text-indigo-600 cursor-pointer"
                        onClick={() => handleRemove(productId)}
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                    </svg>
                </div>
                <div class="w-full md:max-w-[126px]">
                    <img src={productImg} alt="perfume bottle image" class="mx-auto rounded-xl" />
                </div>
                <div class="grid grid-cols-1 md:grid-cols-4 w-full">
                    <div class="md:col-span-2">
                        <div class="flex flex-col max-[500px]:items-center gap-3">
                            <h6 class="font-semibold text-base leading-7 text-white">
                                product Id : {productId}
                            </h6>
                            <h6 class="font-normal text-base leading-7 text-white">
                                Name : {productName}
                            </h6>
                            <h6 class="font-medium text-base leading-7 text-white transition-all duration-300 group-hover:text-indigo-600">
                                {productPrice} Tk
                            </h6>
                        </div>
                    </div>
                    <div class="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                        <div class="flex items-center h-full">
                            <button
                                class="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
                                onClick={() => handleChangeQty(productId, checkQty, '-')}
                            >
                                <svg
                                    class="stroke-white transition-all duration-500 group-hover:stroke-indigo-600"
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
                                class="border-y border-gray-200 outline-none text-white font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-white py-[15px]  text-center bg-transparent"
                                placeholder={checkQty}
                            />
                            <button
                                class="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
                                onClick={() => handleChangeQty(productId, checkQty, '+')}
                            >
                                <svg
                                    class="stroke-white transition-all duration-500 group-hover:stroke-indigo-600"
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
                    </div>
                    <div class="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                        <p class="font-bold text-lg leading-8 text-white-600 text-center transition-all duration-300 group-hover:text-indigo-600">
                            {productPrice * qty}Tk
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutCart;
