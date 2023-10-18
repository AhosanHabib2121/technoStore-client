import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <div>
            <div className="pb-20 pt-14 px-8 md:px-0">
                <div className="flex-col py-5 border border-[#82b440] rounded-md max-w-lg mx-auto ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold pt-6 text-[#82b440]">Login now!</h1>
                    </div>
                    <div className=' px-8 py-5'>
                        {/* {
                            errMessage?<p className=' text-red-500'>{errMessage }</p>:''
                        } */}
                        
                    </div>
                    <div className="card w-full">
                        {/* onSubmit={handleLogin} */}
                        <form  className=" px-8">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-poppins font-medium ">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label ">
                                    <span className="label-text text-lg font-poppins font-medium ">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered mb-2" required />
                                <label className="">
                                    <a href="#" className=" text-base font-poppins font-medium  ">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn  border-0 bg-[#82b440] hover:bg-[#3e6210] normal-case text-xl text-white">Login</button>
                            </div>
                        </form>
                        <div className=' text-center pt-3'>
                            <h4 className=' '>Don’t have an account? <Link to='/register' className=' text-[#82b440]'>Create an account</Link></h4>
                        </div>
                        {/* google button */}
                        <div className=" relative text-center mt-5">
                            <FcGoogle className=" text-3xl absolute top-2 left-16 md:left-36 " />
                            {/* onClick={handleGoogle} */}
                            <button className="btn bg-inherit hover:bg-inherit  outline-1  normal-case rounded-full w-64 border-gray-400">Continue with Google</button>
                            
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;