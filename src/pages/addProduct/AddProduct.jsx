import Swal from "sweetalert2";
import Footer from "../../components/footer/Footer";

const AddProduct = () => {
    const handleAdd = e => {
        e.preventDefault();
        const form = e.target;
        const product_name = form.product_name.value;
        const product_image = form.product_image.value;
        const brand_name = form.brand_name.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const short_description = form.short_description.value;
        const productData = {
            product_name,
            product_image,
            brand_name,
            category,
            price,
            rating,
            short_description
        }
        fetch('https://techno-store-server-ass10-hfz4nucf3-habibs-projects-f48ee51a.vercel.app/product', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body:JSON.stringify(productData),
        })
        .then(res => res.json())
            .then(data => {
            if (data.insertedId) {
                Swal.fire({
                    icon: 'success',
                    title: 'Very good',
                    text: 'Product added successfully',
                })
                form.reset();
            }
        })

    }
    return (
        <div>
            <div className=" min-h-screen bg-base-200">
                <h2 className=" text-center text-4xl font-bold text-[#82b440] pt-5">Product Add</h2>
                <div className="">
                    <div className="card w-full max-w-3xl  mx-auto">
                        <form onSubmit={handleAdd} className="card-body">
                            {/* name and product_image */}
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold text-[#82b440]">Product Name</span>
                                    </label>
                                    <input type="text" name="product_name" placeholder="product name" className="input input-bordered" required />
                                        
                            </div>
                                <div className=" form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold text-[#82b440]">Product Image</span>
                                    </label>
                                    <input type="text" name="product_image" placeholder="product image url" className="input input-bordered" required />
                                </div>
                            </div>

                            {/* brand name and category */}
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold text-[#82b440]">Brand Name</span>
                                    </label>
                                    <input type="text" name="brand_name" placeholder="brand name" className="input input-bordered" required />
                                        
                            </div>
                                <div className=" form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold text-[#82b440]">Category</span>
                                    </label>
                                    <input type="text" name="category" placeholder="product category" className="input input-bordered" required />
                                </div>
                            </div>

                            {/* price and rating */}
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold text-[#82b440]">Price</span>
                                    </label>
                                    <input type="number" name="price" placeholder="price" className="input input-bordered" required />
                                </div>
                                <div className=" form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold text-[#82b440]">Rating</span>
                                    </label>
                                    <input type="number" name="rating" placeholder="rating" className="input input-bordered" required />
                                </div>
                            </div>

                            {/* Short description */}
                            <div >
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold text-[#82b440]">Short Description</span>
                                    </label>
                                    <textarea name="short_description" placeholder="product short description" className="textarea textarea-bordered" id="" cols="30" rows="4" required></textarea>
                                </div>
                            </div>
                        <div className=" mt-8 text-right">
                            <button className="px-4 py-2 rounded-lg font-semibold hover:bg-[#3e6210] bg-[#82b440] text-white normal-case">Add</button>
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

export default AddProduct;