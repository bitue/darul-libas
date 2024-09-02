import React, { useEffect, useState } from 'react';

const FeatureCard = (data) => {
    console.log(data, 'featureCard .............', data.loading);
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img src={data.img} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {data.name}
                        <div className="badge badge-secondary">Exclusive</div>
                    </h2>
                    <p>{data.description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">reviews : {data.reviews}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;
