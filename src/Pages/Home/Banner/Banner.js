
import React from 'react';
import chair from '../../../assets/banner.jpg'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Drive me</h1>
                    <p className="py-6">Find your next car with us.
                        Leading online automotive marketplace .We deal with the paper work to avail your financing and registration in 24 hours.</p>
                    <PrimaryButton>Buy Now</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;