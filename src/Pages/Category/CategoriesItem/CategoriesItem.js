import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const CategoriesItem = ({ product }) => {
  const { img, originalPrice, resalePrice, yearsOfUse, rating, servicesName, sellersName, condition, details, location, lastModified } = product;
  return (
    <div className="card h-5/6 w-full bg-base-100 shadow-xl fixed-height">
      <PhotoProvider>
        <PhotoView src={img}>
          <figure className='mx-5'><img className='w-full' src={img} alt="car" /></figure>
        </PhotoView>

        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{servicesName}</h2>
          <p className="text-gray-500">SellersName:{sellersName}</p>


          <div className=''>
            <p className=' text-red-700 mb-1 font-semibold'>OriginalPrice: ${originalPrice}</p>
            <p className=' text-red-700 mb-1 font-semibold'>ResalePrice: ${resalePrice}</p>
            <div className='flex mb-1 '>
              <p className=' text-red-700 font-semibold'>Condition: {condition}</p>
              <p className=' text-red-700 font-semibold'>YearsOfUse: {yearsOfUse}y</p>
            </div>
            <p className=' text-red-700 mb-1  font-semibold'>Location: {location}</p>
            <p className=' text-red-700 mb-1 font-semibold'>LastModified: {lastModified}</p>


            <p className=''>
              {
                details?.length > 100 ?
                  <p>{details?.slice(0, 100) + '...'}</p>
                  : <p>{details}</p>
              }
            </p>
            <p className='text-xl text-gray-600 font-semibold'><div className='flex justify-end text-warning align-top'>{rating}<FaStar></FaStar><FaStar></FaStar><FaStarHalfAlt></FaStarHalfAlt> </div></p>
          </div>

          <div className="card-actions justify-end" htmlFor="booking-modal">
            <button className="btn btn-block btn-warning bg-emerald-600"><Link className='text-white  text-decoration-none' >Book Now</Link></button>
          </div>
        </div>
      </PhotoProvider>
    </div>
  );
};

export default CategoriesItem;