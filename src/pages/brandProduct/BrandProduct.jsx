import { useLoaderData, Link,  } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import ReactStars from "react-rating-stars-component";



const BrandProduct = () => {
    const brandNameData = useLoaderData();
    console.log(brandNameData);

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, [])

    return (
        <div className=" font-robotFont ">
            {/* banner */}
            {
                (brandNameData == '') ? <>
                    <div className=" bg-[#b52b2bfc] rounded py-10 text-center max-w-7xl lg:mx-auto mx-8 px-8 lg:px-0 my-14 text-[#dfdfdf] ">
                        <h2 className=" text-2xl font-semibold" data-aos="fade-down">You have no products to display for this product band. Please add a products then try!</h2>
                    </div>
                </>
                :<div>
                    <div className="carousel w-full  h-[580px]">
                        <div id="slide1" className="carousel-item relative w-full">
                                <img src="https://i.ibb.co/NWxZgxV/8387542.jpg" alt="not found" className="w-full " />
                                
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a> 
                            <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div> 
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src='https://i.ibb.co/hfxtym7/11852973-4859514.jpg' alt="not found" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a> 
                            <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div> 
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/Q6911hh/34013289-black-friday-web-banner-02.jpg" alt="not found" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a> 
                            <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div> 
                    </div>
                </div>    
            }
            
            {/* product area*/}
            <div className="max-w-7xl md:mx-auto px-8 lg:px-0 my-14">
                
                <div className=" grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        brandNameData.map(singleBrandName => <div key={singleBrandName._id} className="card card-compact shadow-xl">
                            <figure><img src={singleBrandName.product_image} className=" w-full h-72" alt="not found" /></figure>
                            <div className="card-body">
                                {/* rating */}
                                <div className=" grid justify-center my-2">
                                    <ReactStars
                                        value={singleBrandName.rating}
                                        count={5}
                                        size={24}
                                        isHalf={true}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="#ffd700"
                                        onChange={singleBrandName.rating}
                                        edit={false }
                                    />
                                </div>

                                <h2 className="  font-medium text-base"> <span className=" text-[#82b440]">Brand Name:</span> {singleBrandName.product_name} </h2>

                                <h2 className=" font-medium text-base"><span className=" text-[#82b440]">Price: </span>     {singleBrandName.price} Tk</h2>

                                <h2 className=" font-medium text-base"> <span className=" text-[#82b440]">Category: </span>{singleBrandName.category} </h2>

                                {/* <h2 className=" font-medium text-base"><span className=" text-[#82b440]">Rating: </span> {singleBrandName.rating}
                                </h2> */}

                                
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