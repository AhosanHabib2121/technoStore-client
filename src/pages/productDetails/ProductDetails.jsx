import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const ProductDetails = () => {
    const productData = useLoaderData();
    const { id } = useParams();
    const singleProduct = productData.find(product => product._id === id);
    console.log(singleProduct)

    return (
        <div>
            
            <div className="max-w-7xl md:mx-auto px-6 lg:px-0 my-14">
                <h2>this is product brand : { singleProduct.brand_name}</h2>
            </div>

            {/* footer section here */}
            <Footer/>
        </div>
    );
};

export default ProductDetails;