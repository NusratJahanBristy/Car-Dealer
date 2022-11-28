
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CategoryItem from '../CategoryItem/CategoryItem';
// import BookingModal from '../BookingModal/BookingModal';


const Category = () => {
    const [categories,setcategories]=useState([])
    // const [treatment, setTreatment] = useState(null);
   
    useEffect(()=>{
        fetch("https://car-dealer-server-ashy.vercel.app/category")
        .then(res=>res.json())
        .then(data=>setcategories(data))
    },[])
    return (
        <section className='my-16'>
            <p className='text-emerald-700 text-center text-4xl mb-4'>All category</p>
        
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    categories.map(category => <CategoryItem
                        key={category._id}
                        category={category}
                        // setTreatment={setTreatment}
                    ></CategoryItem>)
                }
            </div>
            {/* {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>
            } */}
        </section>
    );
};

export default Category;

