import React from 'react';
import { Link } from 'react-router-dom';
const SectionOne = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
                            <div className="carousel-item">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                                    className="rounded-box"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                                    className="rounded-box"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                                    className="rounded-box"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                                    className="rounded-box"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                                    className="rounded-box"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                                    className="rounded-box"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                                    className="rounded-box"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">Special Offer Products!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
                            id nisi.
                        </p>
                        <button className="btn btn-primary">
                            <Link to="/product">Products</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionOne;
