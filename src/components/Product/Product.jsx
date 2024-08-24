import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = (props) => {
    const { data } = props;
    const { productImgList, productId, productName, price, star, review, description, features } =
        data;
    // context api to get the main data

    const navigate = useNavigate();
    const handleProductDetails = () => {
        navigate('/product/details', { state: data });
    };

    return (
        <div className="mx-3 my-5 p-2 ">
            <div className="card bg-base-100 w-96 shadow-xl" data-aos="fade-in">
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img src={productImgList[0]} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {productName}
                            {/* <div className="badge badge-secondary">Exclusive</div> */}
                        </h2>
                        <div className="flex justify-between">
                            <p className="text-left">{price} Tk</p>
                            <p className="text-right">In Stock</p>
                        </div>

                        <div className="card-actions justify-between">
                            <div
                                className="badge badge-outline bg-indigo-600 text-black p-4 cursor-pointer"
                                onClick={handleProductDetails}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="size-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                    />
                                </svg>
                                Product Details
                            </div>
                            {/* <div
                                className="badge badge-outline bg-yellow-600 text-black p-4"
                                onClick={addToBuy}
                            >
                                Buy Now
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
