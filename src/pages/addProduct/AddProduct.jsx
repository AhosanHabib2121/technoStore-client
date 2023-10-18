
const AddProduct = () => {
    return (
        <div>
            <div className=" min-h-screen bg-base-200">
                     <h2 className=" text-center text-4xl font-bold text-[#82b440] pt-5">Product Add</h2>
                <div className="">
                    <div className="card w-full max-w-3xl  mx-auto">
                        {/* onSubmit={handleSubmit} */}
                        <form className="card-body">
                            {/* name and product_image */}
                            <div className="flex gap-4">
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
                            <div className="flex gap-4">
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
                            <div className="flex gap-4">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold text-[#82b440]">Price</span>
                                    </label>
                                    <input type="text" name="price" placeholder="price" className="input input-bordered" required />
                                        
                            </div>
                                <div className=" form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold text-[#82b440]">Rating</span>
                                    </label>
                                    <input type="text" name="rating" placeholder="rating" className="input input-bordered" required />
                                </div>
                            </div>

                            {/* Short description */}
                            <div >
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold text-[#82b440]">Student Name</span>
                                    </label>
                                    <textarea name="short_description" placeholder="product short description" className="textarea textarea-bordered" id="" cols="30" rows="4"></textarea>
                                        
                                </div>
                            </div>
                        <div className=" mt-8 text-right">
                            <button className="px-4 py-2 rounded-lg font-semibold hover:bg-[#3e6210] bg-[#82b440] text-white normal-case">Add button</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;