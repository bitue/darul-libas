import React from 'react';
import FeatureCard from '../FeaturesCard/FeatureCard';

const SectionTwo = () => {
    const featureProducts = [
        {
            title: 'Panjabi',
            img: 'hero.jpg',
            description: 'Save a Life, Donate Blood: Become a Blood Donor Today',
            dataAos: 'fade-right'
        },
        {
            title: 'Genji',
            img: 'hero.jpg',
            description:
                'Take Charge of Your Health: Schedule Your Comprehensive Health Check-Up Today',
            dataAos: 'fade-up'
        },
        {
            title: 'Pant',
            img: 'hero.jpg',
            description: "Be a Hero in Someone's Life: Find Your Nearest Blood Bank and Donate Now",
            dataAos: 'fade-right'
        }
    ];
    return (
        <div>
            <h1 className="text-4xl font-bold my-5 w-[85%] mx-auto">Product Categories</h1>
            <div className="flex justify-center items-center">
                <div className=" w-[85%] mx-auto place-items-center py-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                    {featureProducts.map((info) => (
                        <FeatureCard
                            img={info.img}
                            title={info.title}
                            description={info.description}
                            dataAos={info.dataAos}
                        ></FeatureCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;
