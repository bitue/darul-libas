import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const FeatureCard = (data) => {
    useEffect(() => {
        AOS.init();
    }, []);
    console.log(data);
    return (
        <div className="card bg-base-100 w-96 shadow-xl" data-aos={data.dataAos}>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img src={data.img} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {data.title}
                        <div className="badge badge-secondary">Exclusive</div>
                    </h2>
                    <p>{data.description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Product Link</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;
