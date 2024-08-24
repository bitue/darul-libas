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
                                className="badge badge-outline bg-indigo-600 text-black p-4"
                                onClick={handleProductDetails}
                            >
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
