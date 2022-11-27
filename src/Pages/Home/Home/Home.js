import React from 'react';
import Category from '../../Category/Category/Category';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';


const Home = () => {
    return (
        <div className='mx-5'>
         <Banner></Banner>
         <Category></Category>
         <Features></Features>
        </div>
    );
};

export default Home;