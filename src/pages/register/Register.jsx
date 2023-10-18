import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div>
            <div className=" pt-14 pb-24 px-8 md:px-0">
                <div className="flex-col py-5 border border-[#82b440] rounded-md max-w-lg mx-auto ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold pt-6 pb-2 text-[#82b440]">Register</h1>
                    </div>
                    <div className=' px-8 py-5'>
                        {/* {
                            errorMessage?<p className=' text-red-500'>{errorMessage }</p>:''
                        } */}
                        
                    </div>
                    <div className="card w-full">
                        {/* onSubmit={handleRegister} */}
                        <form  className=" px-8">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-poppins font-medium ">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-poppins font-medium ">Image-url</span>
                                </label>
                                <input type="text" name='image_url' placeholder="image url" className="input input-bordered" required />
                            </div>
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
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white border-0 bg-[#82b440] hover:bg-[#3e6210] normal-case text-xl">Register</button>
                            </div>
                        </form>
                        <div className=' text-center pt-3'>
                            <h4 className=''>Already have an account? <Link to='/login' className=' text-[#82b440]'>Login</Link></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;