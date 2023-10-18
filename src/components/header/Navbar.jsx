import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/technoStore-logo.png'
import './Navbar.css'

const Navbar = () => {

    const navLink = <>
        <li><NavLink
            to='/' 
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >Home</NavLink></li>
        <li><NavLink to='/addProduct' >Add Product</NavLink></li>
        <li><NavLink to='/myCart'>My Cart</NavLink></li>
        <li><NavLink to='/ex'>Extra1</NavLink></li> 
        <li><NavLink to='/ex2'>Extra2</NavLink></li>
    </>

    return (
        <div>
            <div className=" bg-[#030610e3] px-6 lg:px-0  ">
            <div className="navbar px-0 text-white py-2  max-w-7xl md:mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost px-0 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#030610e3] rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <div className=" flex  md:gap-2 items-center">
                        <img src={logo} alt="not found"  className=" w-20 md:w-24 h-auto"/>
                        <Link to='/' className=" uppercase text-lg md:text-2xl font-semibold tracking-wider font-robotFont">Techno<span className=" text-[#82b440]">Store</span></Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal gap-7 text-base font-poppins font-medium  px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end ">
                    {/* mobile device */}
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost px-0 md:hidden">
                            {/* <img src='image' className=" w-12 h-12 rounded-full " alt="not found" />  */}
                            
                            <Link to='/login' className=" bg-[#82b440] px-5 py-2 rounded-lg font-medium hover:bg-[#538b0b]">Login</Link>
                            
                        </label>
                        <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] py-3 shadow bg-[#042754] rounded-box w-40  ">
                                <li className=" text-center">
                                    
                                <div className=" md:flex items-center gap-2 mr-4">
                                    <h4>User name</h4>
                                </div> 
                                <Link to='/login' className=" bg-[#82b440] px-2 py-1 rounded-lg font-medium hover:bg-[#538b0b]">Sign Out</Link>
                            </li>
                        </ul>

                    </div>
                    {/* medium and large device */}
                    <div className="navbar-right hidden md:flex ">
                            {/* <div className="flex items-center gap-2 mr-4">
                                <h4>user name</h4>
                                <img src="photo" className=" w-12 h-12 rounded-full " alt="not found" />
                            </div> 
                            <Link to='/login' className=" bg-[#82b440] px-3 py-3 rounded-lg font-medium ">Sign Out</Link> */}
                                    
                        <Link to='/login' className=" bg-[#82b440] px-5 py-2  rounded-lg font-medium hover:bg-[#538b0b]">Login</Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Navbar;