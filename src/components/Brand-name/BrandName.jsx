import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const BrandName = () => {
    const brandData = useLoaderData();
    return (
        <div className=" font-robotFont">
            {/* head title */}
            <div>
                <h2 className=" mb-2 text-2xl font-bold text-[#82b440]">Brand Name</h2>
                <div className=" relative">
                    <div className="border-2 w-40 border-solid border-[#82b440] ">
                    </div>
                    <div className="border border-solid "></div>
                </div>
            </div>
            {/* brand card */}
            <div className=" grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-7 gap-4">
                {
                    brandData.map(brand => <Link to={`/brandProduct/${brand.brand_name}`} key={brand._id}>
                    <div className="card  flex-col lg:flex-row  gap-4 items-center card-side bg-base-100 border-2 border-solid border-[#82b440]  rounded-lg">
                        <figure className='flex-1 '><img src={brand.brand_image} className='w-40 h-40 rounded-full lg:rounded-none pt-2 lg:pt-0 lg:w-52 lg:h-28' alt="not found"/></figure>
                        <div className="flex-1">
                            <h2 className="card-title text-lg pr-2 lg:pr-0 ">{brand.brand_name}</h2>
                        </div>
                    </div>
                    </Link>)
                }
                



                {/* <div className="card gap-4 items-center card-side bg-base-100 border-2 border-solid border-[#82b440]  rounded-lg">
                    <figure className=' '><img src={appleBrand} className=' w-52' alt="not found"/></figure>
                    <div className="">
                        <h2 className="card-title text-lg">Apple Brand</h2>
                    </div>
                </div>
                <div className="card gap-4 items-center card-side bg-base-100 border-2 border-solid border-[#82b440]  rounded-lg">
                    <figure className=' '><img src={appleBrand} className=' w-52' alt="not found"/></figure>
                    <div className="">
                        <h2 className="card-title text-lg">Apple Brand</h2>
                    </div>
                </div>
                <div className="card gap-4 items-center card-side bg-base-100 border-2 border-solid border-[#82b440]  rounded-lg">
                    <figure className=' '><img src={appleBrand} className=' w-52' alt="not found"/></figure>
                    <div className="">
                        <h2 className="card-title text-lg">Apple Brand</h2>
                    </div>
                </div>
                <div className="card gap-4 items-center card-side bg-base-100 border-2 border-solid border-[#82b440]  rounded-lg">
                    <figure className=' '><img src={appleBrand} className=' w-52' alt="not found"/></figure>
                    <div className="">
                        <h2 className="card-title text-lg">Apple Brand</h2>
                    </div>
                </div>
                <div className="card gap-4 items-center card-side bg-base-100 border-2 border-solid border-[#82b440]  rounded-lg">
                    <figure className=' '><img src={appleBrand} className=' w-52' alt="not found"/></figure>
                    <div className="">
                        <h2 className="card-title text-lg">Apple Brand</h2>
                    </div>
                </div> */}

                
            </div>

        </div>
    );
};

export default BrandName;