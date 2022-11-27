import React from 'react';
import { Link } from 'react-router-dom';
// import { AiFillCar } from 'react-icons/fa';
import { AiFillCar } from "react-icons/ai";

const CategoryItem = ({category}) => {
    const {name}=category
    // console.log(category)
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center ">
             <div className='flex justify-evenly'>
             <Link className="text-2xl text-emerald-600 font-bold text-center"  to={`/singleCategory/${category._id}`}>{name}  </Link>
             <AiFillCar className='text-3xl text-emerald-500'></AiFillCar>
             </div>
            </div>
         
        </div>
    );
};

export default CategoryItem;

