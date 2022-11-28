import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const CategoriesItem = ({ product }) => {
  const { _id, img,originalPrice,resalePrice,yearsOfUse,rating,servicesName,sellersName,condition,details,location,lastModified} = product;
  return (
    // <div>{product.length}</div>
   

    <div className="card h-5/6 w-full bg-base-100 shadow-xl fixed-height">
       <PhotoProvider>
       <PhotoView src={img}>
       <figure className='h-1/2'><img className='h-5/6 w-5/6' src={img} alt="Shoes" /></figure>
       </PhotoView>
     
      <div className="card-body">
        <h2 className="card-title text-3xl font-semibold">name</h2>
        <p>kjf</p>
        <p className='text-xl'>
          {
            details?.length > 100 ?
              <p>{details?.slice(0, 100) + '...'}</p>
              : <p>{details}</p>
          }
        </p>
        <div className='flex'>
          <p className='text-2xl text-orange-600 font-semibold'>OriginalPrice: ${originalPrice}</p>
          <p className='text-2xl text-orange-600 font-semibold'>ResalePrice: ${resalePrice}</p>
          <p className='text-2xl text-orange-600 font-semibold'>YearsOfUse: {yearsOfUse}y</p>
          <p className='text-2xl text-gray-600 font-semibold'><div className='flex justify-end text-warning align-top'>5<FaStar></FaStar><FaStar></FaStar><FaStarHalfAlt></FaStarHalfAlt> </div></p>
        </div>

        <div className="card-actions justify-end">
          {/* <button className="btn btn-block btn-warning bg-orange-600"><Link className='text-white  text-decoration-none' to={`/services/${_id}`}>Go to Details</Link></button> */}
        </div>
      </div>
      </PhotoProvider>
    </div>
  );
};

export default CategoriesItem;