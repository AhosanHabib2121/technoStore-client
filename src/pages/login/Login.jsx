import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const { accountLogin, loginGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState(null)


    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        //  error message clean
        setError('')

        if (password.length < 6) {
            setError('Password must be 6 characters!');
            return;
        }

        // create account
        accountLogin(email, password)
            .then(data => {
                const lastLoginAt = data.user?.metadata?.lastSignInTime;
                        const userData = {
                            email,
                            password,
                            lastLoginAt
                        }
                fetch('https://techno-store-server-ass10.vercel.app/user', {
                    method: 'PATCH',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(userData)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount) {
                            const Toast = Swal.mixin({
                                toast: true,
                                position: 'top-end',
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true,
                                didOpen: (toast) => {
                                    toast.addEventListener('mouseenter', Swal.stopTimer)
                                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                                }
                            })
                            Toast.fire({
                                icon: 'success',
                                title: 'Login successfully'
                            })
                            form.reset();
                            navigate('/');
                        }
                    })   
            })
            .catch(error => setError(`Please signUp then try. ${error.message}`))
    }
    // login with google
    const handleGoogle = () => {
        loginGoogle()
            .then(() => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                Toast.fire({
                    icon: 'success',
                    title: 'Login successfully'
                })
                navigate('/')
            })
            .catch(error => console.log(error))
    }
    
    return (
        <div>
            <div className="pb-20 pt-14 px-8 md:px-0">
                <div className="flex-col py-5 border border-[#82b440] rounded-md max-w-lg mx-auto ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold pt-6 text-[#82b440]">Login now!</h1>
                    </div>
                    <div className=' px-8 py-5'>
                        {
                            error?<p className=' text-red-500'>{error}</p>:''
                        }
                        
                    </div>
                    <div className="card w-full">
                        <form onSubmit={handleLogin} className=" px-8">
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
                            <button onClick={handleGoogle} className="btn bg-inherit hover:bg-inherit  outline-1  normal-case rounded-full w-64 border-gray-400">Continue with Google</button>
                            
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;