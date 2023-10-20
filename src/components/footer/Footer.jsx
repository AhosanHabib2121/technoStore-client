import { Link } from "react-router-dom";
import logo from '../../assets/technoStore-logo.png'

const Footer = () => {
    return (
        <div className=" bg-[#030610e3]">
            <footer className="footer justify-center md:px-5 md:justify-normal lg:px-0 py-20  text-white font-robotFont max-w-7xl md:mx-auto ">
                <aside>
                    <div className=" flex  md:gap-2 items-center">
                        <img src={logo} alt="not found"  className=" w-20 md:w-24 h-auto"/>
                        <Link to='/' className=" uppercase text-lg md:text-2xl font-semibold tracking-wider font-robotFont">Techno<span className=" text-[#82b440]">Store</span></Link>
                    </div>
                <p className=" text-sm">TECHNOSTORE company .<br/>Providing reliable tech since 2022</p>
            </aside> 
            <nav>
                <header className=" footer-title text-base  ">Product Category</header> 
                <Link className="link link-hover hover:text-[#82b440]">Branding</Link> 
                <Link className="link link-hover hover:text-[#82b440]">Design</Link> 
                <Link className="link link-hover hover:text-[#82b440]">Marketing</Link> 
                <Link className="link link-hover hover:text-[#82b440]">Advertisement</Link>
            </nav> 
            <nav>
                <header className="footer-title text-base">Company</header> 
                <Link to={'/'} className="link link-hover hover:text-[#82b440]">Home</Link> 
                <Link to={'/addProduct'} className="link link-hover hover:text-[#82b440]">Add Product</Link> 
                <Link to={'/myCart'} className="link link-hover hover:text-[#82b440]">My Cart</Link> 
            </nav> 
            <nav>
                <header className="footer-title text-base">Legal</header> 
                <Link className="link link-hover hover:text-[#82b440]">Terms of use</Link> 
                <Link className="link link-hover hover:text-[#82b440]">Privacy policy</Link> 
                <Link className="link link-hover hover:text-[#82b440]">Cookie policy</Link>
            </nav>
            </footer>
        </div>
    );
};

export default Footer;