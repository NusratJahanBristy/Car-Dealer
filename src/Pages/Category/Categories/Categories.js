import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CategoriesItem from '../CategoriesItem/CategoriesItem';


const Categories = () => {
    const [products, setproducts] = useState([])
    const id=useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id.id}`)
            .then(res => res.json())
            .then(data => setproducts(data))
            console.log(data)
    }, [])
    return (
        <div>
             {/* <div>{products.length}</div> */}
            <div className='text-center mb-2'>
                <h2 className='text-5xl font-semibold text-orange-600'>Our Products</h2>
                <p>Orders your dreamy & desire Car..</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <CategoriesItem
                        key={product._id} product={product}
                    ></CategoriesItem>)
                }
            </div>
            {/* <div className='text-center mx-2 my-4'> <button className="btn btn-warning bg-orange-500"><Link className='text-white  text-decoration-none' to='/services'>See All</Link></button></div> */}
        </div>
    );
};

export default Categories;