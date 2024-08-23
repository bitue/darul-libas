import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/dataContext';

const Product = (props) => {
    const { data } = props;
    // context api to get the main data
    const { productList, setProductList } = useContext(DataContext);

    const navigate = useNavigate();
    const addToCart = () => {
        navigate('/product/details', { state: data });
    };
    const addToBuy = () => {
        // context api data update
        const pro_data = {
            id: data.brand,
            img: data.img,
            price: data.price,
            qty: 1
        };
        setProductList([...productList, pro_data]);
        // navigate to checkout page
        navigate('/checkout');
    };

    return (
        <div className="mx-3 my-5 p-2 ">
            <div className="card bg-base-100 w-96 shadow-xl" data-aos="fade-in">
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img src={data.img} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {data.brand}
                            {/* <div className="badge badge-secondary">Exclusive</div> */}
                        </h2>
                        <div className="flex justify-between">
                            <p className="text-left">{data.price} Tk</p>
                            <p className="text-right">{data.status}</p>
                        </div>

                        <div className="card-actions justify-between">
                            <div
                                className="badge badge-outline bg-indigo-600 text-black p-4"
                                onClick={addToCart}
                            >
                                Product
                            </div>
                            <div
                                className="badge badge-outline bg-yellow-600 text-black p-4"
                                onClick={addToBuy}
                            >
                                Buy Now
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
