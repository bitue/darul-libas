import React from 'react';

const Product = (props) => {
    const { data } = props;
    console.log(data);
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

                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Product Link</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
