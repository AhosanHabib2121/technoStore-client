import { useNavigate , useLoaderData, Link,  } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import sliderPhoto from '../../assets/techno-banner.jpg'
import { useEffect } from "react";

const BrandProduct = () => {
    const brandNameData = useLoaderData();
    // const navigate = useNavigate();
    // console.log(brandNameData);
    
    // useEffect(() => {
    //     if (brandNameData == '') {
    //         console.log('data nai');
    //         alert('data nai');
    //         navigate("/");
    // }
    // }, [brandNameData, navigate])
    
    return (
        <div className=" font-robotFont">
            {/* banner */}
            <div>
                <div className="carousel w-full  h-screen">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={sliderPhoto} alt="not found" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={sliderPhoto} alt="not found" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={sliderPhoto} alt="not found" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                </div>
            </div>
            {/* product area*/}
            <div className="max-w-7xl md:mx-auto px-6 lg:px-0 my-14">
                <div className=" grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        
                        brandNameData.map(singleBrandName => <div key={singleBrandName._id} className="card card-compact shadow-xl">
                            <figure><img src={singleBrandName.product_image} className=" w-full h-72" alt="not found" /></figure>
                            <div className="card-body">
                                <h2 className="  font-medium text-base"> <span className=" text-[#82b440]">Brand Name:</span> {singleBrandName.product_name} </h2>

                                <h2 className=" font-medium text-base"><span className=" text-[#82b440]">Price: </span>     {singleBrandName.price} Tk</h2>

                                <h2 className=" font-medium text-base"> <span className=" text-[#82b440]">Category: </span>{singleBrandName.category} </h2>
                                <h2 className=" font-medium text-base">{singleBrandName.rating} </h2>

                                <h2 className=" font-medium text-base">{singleBrandName.short_description.slice(0, 60)}..</h2>
                                
                                <div className="card-actions justify-end my-3">
                                    <Link to={`/productDetails/${singleBrandName._id}`} className="bg-[#82b440] px-5 py-3 rounded-lg font-medium hover:bg-[#538b0b] text-white normal-case">Details</Link>

                                    <Link to={`/updateProduct/${singleBrandName._id}`} className="bg-[#82b440] px-5 py-3 rounded-lg font-medium hover:bg-[#538b0b] text-white normal-case">Update</Link>
                                </div>
                            </div>
                        </div>)
                        
                        
                    }
                </div>
            </div>
            {/* footer section here */}
            <Footer/>
        </div>
    );
};

export default BrandProduct;