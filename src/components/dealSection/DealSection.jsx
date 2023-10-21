import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";

const DealSection = () => {
    const [dealProduct, setDealProduct] = useState([])

    useEffect(() => {
        fetch('https://techno-store-server-ass10.vercel.app/product')
            .then(res => res.json())
            .then(data => setDealProduct(data))
    }, [])
    return (
        <div className=" my-28 md:my-20 lg:my-16 h-[380px]  font-robotFont">
            <div className="hero lg:h-[400px] w-full bg-[#212942e9] ">
               
                <div className="flex flex-col lg:flex-row-reverse mx-4 md:mx-0  py-7 md:px-7 items-center">
                    {/* product section */}
                    <div className=" flex-1 mb-5">

                        <div className="h-56 lg:h-80 carousel carousel-vertical rounded-lg gap-5">
                            {/* <div className=""> */}
                               {
                                    dealProduct.slice(0,4).map(product => <div key={product._id} className="card card-side  carousel-item h-full md:w-full lg:w-3/4 bg-slate-100 md:p-5 items-center">
                                        <figure><img src={product.product_image} className=" w-60 mt-4 flex-1" alt="not found" /></figure>
                                        <div className="card-body p-5">

                                            <h2 className="  font-medium text-base"> <span className=" text-[#82b440]">Brand Name:</span> {product.product_name} </h2>

                                            <h2 className=" font-medium text-base"><span className=" text-[#82b440]">Price: </span>     {product.price} Tk</h2>

                                            <h2 className=" font-medium text-base"> <span className=" text-[#82b440]">Category: </span>{product.category} </h2>

                                             {/* rating */}
                                            <div className=" my-2 ">
                                                <ReactStars
                                                    value={product.rating}
                                                    count={5}
                                                    size={24}
                                                    isHalf={true}
                                                    emptyIcon={<i className="far fa-star"></i>}
                                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                    fullIcon={<i className="fa fa-star"></i>}
                                                    activeColor="#ffd700"
                                                    onChange={product.rating}
                                                    edit={false }
                                                />
                                            </div>

                                        </div>
                                    </div>)
                                }
                                 
                            {/* </div>  */}
                        </div>
                        
                    </div>

                    {/* content section */}
                    <div className=" flex-1 ">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#82b440] ">Deals of the day</h1>
                        <p className="py-2 lg:py-4 text-white">Get massive discounts on top-brand electronics today!</p>
                        <button className="bg-[#82b440] px-5 py-3 rounded-lg font-medium hover:bg-[#538b0b] text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DealSection;