import React from 'react';
import toast from 'react-hot-toast';
const AddProduct = () => {
    const handleAddServices = event => {
        event.preventDefault()
        const form = event.target;
        const serviceName = form.serviceName.value;
        const orginalPrice = form.orginalPrice.value;
        const sealPrice = form.sealPrice.value;
        const img = form.img.value;
        const mobileNumber = form.mobileNumber.value;
        const condition = form.condition.value;
        const productCategory = form.productCategory.value;
        const description = form.description.value;
        const location = form.location.value;
        const details = form.details.value;
        const year = form.year.value;
        const service = { serviceName, orginalPrice, sealPrice, description, year, condition, location, productCategory, img, mobileNumber, details }
        fetch('https://quick-eat-server.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)


        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast('User Created Successfully.')
            })

    }
    return (
        <div className='mt-8 px-20 mx-10'>

            <form onSubmit={handleAddServices}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='serviceName' type="text" placeholder="Title" className="input input-bordered w-full  " />
                    <input name='orginalPrice' type="text" placeholder="orginalPrice" className="input input-bordered w-full " />
                    <input name='condition' type="text" placeholder="condition" className="input input-bordered w-full " />
                    <input name='mobileNumber' type="text" placeholder="mobileNumber" className="input input-bordered w-full " />
                    <input name='location' type="text" placeholder="location" className="input input-bordered w-full " />
                    <input name='productCategory ' type="text" placeholder="productCategory " className="input input-bordered w-full " />
                    <input name='description ' type="text" placeholder="description " className="input input-bordered w-full " />
                    <input name='sealPrice ' type="text" placeholder="sealPrice " className="input input-bordered w-full " />
                    <input name='year ' type="text" placeholder="year " className="input input-bordered w-full " />
                    <input name='img' type="text" placeholder="imgUrl" className="input input-bordered w-full " />
                </div>
                <textarea name='details' className="textarea textarea-bordered mt-2 w-full h-24" placeholder="Description" required></textarea>
                <input className='btn btn-warning bg-emerald-600 text-white my-4' type="submit" value="Add Product " />
            </form>
        </div>
    );
};

export default AddProduct;

