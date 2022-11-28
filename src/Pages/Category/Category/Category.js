
import React, { useEffect, useState } from 'react';
import CategoryItem from '../CategoryItem/CategoryItem';


const Category = () => {
    const [categories, setcategories] = useState([])
    useEffect(() => {
        fetch("https://car-dealer-server-ashy.vercel.app/category")
            .then(res => res.json())
            .then(data => setcategories(data))
    }, [])
    return (
        <section className='my-16'>
            <p className='text-emerald-700 text-center text-4xl mb-4'>All category</p>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    categories.map(category => <CategoryItem
                        key={category._id}
                        category={category}
                    ></CategoryItem>)
                }
            </div>

        </section>
    );
};

export default Category;

