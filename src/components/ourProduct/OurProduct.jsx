import { useContext, useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { AuthContext } from "../../authProvider/AuthProvider";
import Swal from "sweetalert2";

const OurProduct = () => {

    const [ourProduct, setOurProduct] = useState([])
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch('https://techno-store-server-ass10-j3ilwbepb-habibs-projects-f48ee51a.vercel.app/product')
            .then(res => res.json())
            .then(data => setOurProduct(data))
    }, [])

    const handleAddToCart = (id) => {
        const singleProduct = ourProduct.find(product => product._id === id);
        const product_name = singleProduct.product_name;
        const product_image = singleProduct.product_image;
        const brand_name = singleProduct.brand_name;
        const category = singleProduct.category;
        const price = singleProduct.price;
        const rating = singleProduct.rating;
        const dataAddToCart = {
            product_name,
            product_image,
            brand_name,
            category,
            price,
            rating
        }
        fetch('https://techno-store-server-ass10-j3ilwbepb-habibs-projects-f48ee51a.vercel.app/cart', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body:JSON.stringify(dataAddToCart),
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                Swal.fire({
                    icon: 'success',
                    title: 'Very good',
                    text: 'The product added to the cart successfully ',
                })
            }
        })
    }
    
    return (
        <div className=" mt-12">
            {/* head title */}
            <div>
                <h2 className=" mb-2 text-2xl font-bold text-[#82b440]">Our Products</h2>
                <div className=" relative">
                    <div className="border-2 w-40 border-solid border-[#82b440] ">
                    </div>
                    <div className="border border-solid "></div>
                </div>
            </div>

            {/* card area*/}
            <div className=" mt-14">
                <div className=" grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        ourProduct.slice(0,6).map(product => <div key={product._id} className="card card-compact shadow-xl">
                            <figure><img src={product.product_image} className=" w-full h-72" alt="not found" /></figure>
                            <div className="card-body">
                                {/* rating */}
                                <div className=" grid justify-center my-2">
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

                                <h2 className="  font-medium text-base"> <span className=" text-[#82b440]">Brand Name:</span> {product.product_name} </h2>

                                <h2 className=" font-medium text-base"><span className=" text-[#82b440]">Price: </span>     {product.price} Tk</h2>

                                <h2 className=" font-medium text-base"> <span className=" text-[#82b440]">Category: </span>{product.category} </h2>

                                
                                <div className="card-actions justify-end my-3">
                                    {
                                        user ? <>
                                            <button onClick={()=> handleAddToCart(product._id)} className="bg-[#82b440] px-5 py-3 rounded-lg font-medium hover:bg-[#538b0b] text-white normal-case">Add to cart</button>
                                        </>
                                        : ''
                                    }
                                   
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default OurProduct;