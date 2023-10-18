import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const productData = useLoaderData();
    const { id } = useParams();
    const singleProduct = productData.find(product => product._id === id);
    const {product_name, product_image, brand_name, category, price, rating, } = singleProduct;
    
    const handleSubmit = e => {
        e.preventDefault();
          e.preventDefault();
        const form = e.target;
        const product_name = form.product_name.value;
        const product_image = form.product_image.value;
        const brand_name = form.brand_name.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const short_description = form.short_description.value;
        const productUpdateData = {
            product_name,
            product_image,
            brand_name,
            category,
            price,
            rating,
            short_description
        }
        fetch(`http://127.0.0.1:5000/product/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body:JSON.stringify(productUpdateData),
        })
        .then(res => res.json())
            .then(data => {
            if (data.modifiedCount === 1) {
                Swal.fire({
                    icon: 'success',
                    title: 'Very good',
                    text: 'Product Updated successfully',
                })
            }
        })
    }

    return (
        <div>
            <div className=" min-h-screen bg-base-200">
                     <h2 className=" text-center text-4xl font-bold text-[#82b440] pt-5">Update Product</h2>
                <div className="">
                    <div className="card w-full max-w-3xl  mx-auto">
                        <form onSubmit={handleSubmit} className="card-body">
                            {/* name and product_image */}
                            <div className="flex gap-4">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold text-[#82b440]">Product Name</span>
                                    </label>
                                    <input type="text" name="product_name" defaultValue={product_name} placeholder="product name" className="input input-bordered" required />
                                        
                            </div>
                                <div className=" form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold text-[#82b440]">Product Image</span>
                                    </label>
                                    <input type="text" name="product_image" defaultValue={product_image}placeholder="product image url" className="input input-bordered" required />
                                </div>
                            </div>

                            {/* brand name and category */}
                            <div className="flex gap-4">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold text-[#82b440]">Brand Name</span>
                                    </label>
                                    <input type="text" name="brand_name" defaultValue={brand_name} placeholder="brand name" className="input input-bordered" required />
                                        
                            </div>
                                <div className=" form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold text-[#82b440]">Category</span>
                                    </label>
                                    <input type="text" name="category" defaultValue={category} placeholder="product category" className="input input-bordered" required />
                                </div>
                            </div>

                            {/* price and rating */}
                            <div className="flex gap-4">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold text-[#82b440]">Price</span>
                                    </label>
                                    <input type="number" name="price" defaultValue={price} placeholder="price" className="input input-bordered" required />
                                </div>
                                <div className=" form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold text-[#82b440]">Rating</span>
                                    </label>
                                    <input type="number" name="rating" defaultValue={rating} placeholder="rating" className="input input-bordered" required />
                                </div>
                            </div>

                        <div className=" mt-8 text-right">
                            <button className="px-4 py-2 rounded-lg font-semibold hover:bg-[#3e6210] bg-[#82b440] text-white normal-case">Submit</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
            {/* footer section here */}
            <Footer/>
        </div>
    );
};

export default UpdateProduct;