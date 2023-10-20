import { useLoaderData } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { TiDelete } from "react-icons/ti";
import Swal from "sweetalert2";
import { useState } from "react";

const MyCart = () => {
    const loadedCartData = useLoaderData();
    const [cartData, setCartData] = useState(loadedCartData)

    // delete cart product
    const handleCartDelete = cartId => {
        fetch(`http://127.0.0.1:5000/cart/${cartId}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(( ) => {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Deleted!',
                        'product cart deleted completed!',
                        'success'
                    )
                    const remainingData = cartData.filter(singleCart => singleCart._id != cartId);
                    setCartData(remainingData);
                }
            })
        })
    }

    return (
        <div className=" bg-base-200 font-robotFont">
            <div className=" max-w-6xl mx-auto px-10 lg:px-0 py-12">
                <div className="">
                    {
                        (cartData == '') && <div className=" text-center mb-5">
                            <h2 className=" text-red-600 text-lg font-semibold">No data to show</h2>
                        </div>
                    }

                    <table className=" w-full border-collapse border border-[#82b440] ">
                        {/* head */}
                        <thead  className=" bg-[#82b440] text-white text-lg h-20">
                        <tr>
                            <th className=" border-y border-slate-300">Product Image</th>
                            <th className=" border-y border-slate-300">Product Name</th>
                            <th className=" border-y border-slate-300"> Price</th>
                            <th className=" border-y border-slate-300">Action</th>
                        </tr>
                        </thead>
                        <tbody className="border-slate-300  text-lg">
                            {/* row 1 */}
                            {
                                cartData.map(singleCart => <tr key={singleCart._id}>
                                    <td className=" border-y border-[#82b440]">
                                    <img src={ singleCart.product_image} className=" w-36 h-auto"
                                    alt="not found" />
                                    </td>
                                    <td className=" border-y border-[#82b440]">
                                        <h3 className=" text-[#82b440] text-lg font-semibold">{ singleCart.product_name}</h3>
                                    </td>
                                    <td className=" border-y border-[#82b440]">
                                        <h3 className=" text-[#82b440] text-lg font-semibold">{ singleCart.price} Tk</h3>
                                    </td>
                                    <td className=" border-y border-[#82b440]">
                                        <button
                                            onClick={() => handleCartDelete(singleCart._id)} className=" text-red-700 text-4xl ">
                                            <TiDelete/>
                                        </button>
                                    </td>
                                </tr>)
                                 
                            }
                                
                        </tbody>  
                    </table>
                </div>
            </div>

             {/* footer section here */}
            <Footer/>
        </div>
    );
};

export default MyCart;