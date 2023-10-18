import Swal from "sweetalert2";

const BrandAdd = () => {
    const handleBrand = e => {
        e.preventDefault();
        const form = e.target;
        const brand_name = form.brand_name.value;
        const brand_image = form.brand_image.value;

        const brandData = {
            brand_name,
            brand_image,
        }
        fetch('http://127.0.0.1:5000/product', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(brandData),
        })
        .then(res => res.json())
            .then(data => {
            if (data.insertedId) {
                Swal.fire({
                    icon: 'success',
                    title: 'Very good',
                    text: 'Brand added successfully',
                })
                form.reset();
            }
        })
    }
    return (
        <div>
            <div className=" min-h-screen bg-base-200">
                     <h2 className=" text-center text-4xl font-bold text-[#82b440] pt-5">Brand Add</h2>
                <div className="">
                    <div className="card w-full max-w-3xl  mx-auto">
                        <form onSubmit={handleBrand} className="card-body">
                            {/* brand name and brand_image */}
                            <div className="flex gap-4">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold text-[#82b440]">Brand Name</span>
                                    </label>
                                    <input type="text" name="brand_name" placeholder="brand name" className="input input-bordered" required />
                                        
                                </div>
                                <div className=" form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold text-[#82b440]">Brand Image</span>
                                    </label>
                                    <input type="text" name="brand_image" placeholder="brand image url" className="input input-bordered" required />
                                </div>
                            </div>
                        <div className=" mt-8 text-right">
                            <button className="px-4 py-2 rounded-lg font-semibold hover:bg-[#3e6210] bg-[#82b440] text-white normal-case">Add</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandAdd;

