import React from 'react';
import { Link } from 'react-router-dom';
const SectionOne = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse w-full ">
                    <div className="lg:w-3/5 w-full">
                        <div className="carousel carousel-center bg-neutral rounded-box w-full space-x-4 p-4">
                            <div className="carousel-item h-[400px] w-[300px] ">
                                <img src="best1.jpg" className="rounded-box" />
                            </div>
                            <div className="carousel-item h-[400px] w-[300px] ">
                                <img src="best2.jpg" className="rounded-box" />
                            </div>
                            <div className="carousel-item h-[400px] w-[300px] ">
                                <img src="best3.jpg" className="rounded-box" />
                            </div>
                            <div className="carousel-item h-[400px] w-[300px] ">
                                <img src="best4.jpg" className="rounded-box" />
                            </div>
                            <div className="carousel-item h-[400px] w-[300px] ">
                                <img src="best5.jpg" className="rounded-box" />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-2/5 w-full">
                        <h1 className="text-5xl font-bold">Special Offer Products!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
                            id nisi.
                        </p>
                        {/* <button className="btn btn-primary">
                            <a href="">
                                <Link to="/product">Products</Link>
                            </a>
                        </button> */}
                        <Link to="/product" className="">
                            <button className="btn text-white bg-indigo-600">
                                Explore Products
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionOne;
