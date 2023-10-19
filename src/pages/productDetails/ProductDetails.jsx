import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Swal from "sweetalert2";

const ProductDetails = () => {
    const productData = useLoaderData();
    const { id } = useParams();
    const singleProduct = productData.find(product => product._id === id);

    const handleAddToCart = () => {
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
        fetch('http://127.0.0.1:5000/cart', {
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
        <div className=" bg-base-200">
            <div className="max-w-4xl md:mx-auto px-10 lg:px-0 py-14">
                <div className=" flex gap-7 ">
                    {/* product image */}
                    <div className=" flex-1">
                        <img src={singleProduct.product_image} className=" w-full h-80" alt="not found" />
                    </div>
                    {/* product content */}
                    <div className=" flex-1 space-y-3">
                        <h2 className="  font-medium text-xl "> <span className=" text-[#82b440] ">Brand: </span> {singleProduct.brand_name}  </h2>

                        <h2 className="  font-medium text-xl "> <span className=" text-[#82b440] ">Product name: </span> {singleProduct.product_name}  </h2>

                        <h2 className=" font-medium text-xl"><span className=" text-[#82b440]">Price: </span>     {singleProduct.price} Tk</h2>

                        <h2 className=" font-medium text-xl"> <span className=" text-[#82b440]">Category: </span>{singleProduct.category} </h2>

                        <h2 className=" font-medium text-xl"><span className=" text-[#82b440]">Rating: </span> {singleProduct.rating} </h2>

                        
                        <div className="card-actions my-3">
                            <button onClick={handleAddToCart}  className="bg-[#82b440] px-5 py-3 rounded-lg font-medium hover:bg-[#538b0b] text-white normal-case">Add to cart</button>

                        </div>
                    </div>
                </div>
                <div className=" mt-5">
                    <h3 className=" font-medium text-base">{singleProduct.short_description}</h3>
                </div>
            </div>

            {/* footer section here */}
            <Footer/>
        </div>
    );
};

export default ProductDetails;