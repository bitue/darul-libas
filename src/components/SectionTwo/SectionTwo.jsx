import FeatureCard from '../FeaturesCard/FeatureCard';
import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Puff } from 'react-loader-spinner';

const SectionTwo = () => {
    const [cat, setCat] = useState(null);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(true);

    const fetchData = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/public/getAllCategories');
            setCat(data.categories);
            console.log(cat, 'first ', loading);
        } catch ({ message }) {
            setErr(message);
            console.log(err);
        } finally {
            setLoading(false);
            console.log(cat, 'after', loading);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            {loading ? (
                <div className="flex justify-center items-center h-full w-full ">
                    <Puff
                        visible={true}
                        height="100"
                        width="100"
                        color="#335bff"
                        ariaLabel="puff-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>
            ) : (
                <div>
                    <h1 className="text-4xl font-bold my-5 w-[85%] mx-auto">Product Categories</h1>
                    <div className="flex justify-center items-center">
                        <div className=" w-[85%] mx-auto place-items-center py-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 text-white">
                            {cat &&
                                cat.map((info) => (
                                    <FeatureCard
                                        img={info.img}
                                        name={info.name}
                                        description={info.description}
                                        dataAos="fade-right"
                                        reviews={info.reviews}
                                    ></FeatureCard>
                                ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SectionTwo;
