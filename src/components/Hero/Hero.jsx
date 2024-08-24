import React from 'react';
import { Link } from 'react-router-dom';
const Hero = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: 'url(hero.jpg)'
            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello People</h1>
                    <p className="mb-5">
                        আসসালামু আলাইকুম!আমরা আপনাদের কাছে সর্বোচ্চ ভালো পণ্যটি ই পৌছানোর চেষ্ঠা
                        করি। ইনশা আল্লাহ
                    </p>
                    <button className="btn btn-primary">
                        <Link to="/product">Get Started</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
