import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CategoriesItem from '../CategoriesItem/CategoriesItem';


const Categories = () => {
    const [products, setproducts] = useState([])
    const id = useParams();
    useEffect(() => {
        fetch(`https://car-dealer-server-ashy.vercel.app/products/${id.id}`)
            .then(res => res.json())
            .then(data => setproducts(data))
        console.log(data)
    }, [])
    return (
        <div>

            <div className='text-center mb-2'>
                <h2 className='text-5xl font-semibold text-red-700'>Our Products</h2>
                <p>Orders your dreamy & desire Car..</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <CategoriesItem
                        key={product._id} product={product}
                    ></CategoriesItem>)
                }
            </div>

        </div>
    );
};

export default Categories;