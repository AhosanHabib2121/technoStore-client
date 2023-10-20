import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const { createAccount, profileUpdate } = useContext(AuthContext);
    const navigate = useNavigate()
    const [error, setError] = useState(null)

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image_url = form.image_url.value;
        const email = form.email.value;
        const password = form.password.value;

        // error message clean
        setError('')

        if(password.length < 6){
            setError('Password must be 6 characters!')
            return;
        }
        else if (!/[A-Z]/.test(password) || !/[!@#$%^&*()]/.test(password)) {
            setError('Please add capital letter and special character');
            return;
        }

        // create account
        createAccount(email, password)
            .then(data => {
                // profile update
                profileUpdate(name, image_url)
                    .then(() => {
                        const createdAt = data.user?.metadata.creationTime;
                        const userData = {
                            name,
                            image_url,
                            email,
                            password,
                            createdAt
                        }
                        fetch('https://techno-store-server-ass10-j3ilwbepb-habibs-projects-f48ee51a.vercel.app/user', {
                            method: 'POST',
                            headers: { 'content-type': 'application/json' },
                            body:JSON.stringify(userData)
                        })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
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
                                title: 'Account create successfully'
                                })
                                form.reset();
                            }
                            navigate('/');
                        })
                    })
            })
            .catch(error => setError(error.message))

    }
    return (
        <div>
            <div className=" pt-14 pb-24 px-8 md:px-0">
                <div className="flex-col py-5 border border-[#82b440] rounded-md max-w-lg mx-auto ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold pt-6 pb-2 text-[#82b440]">Register</h1>
                    </div>
                    <div className=' px-8 py-5'>
                        {
                            error?<p className=' text-red-500'>{error }</p>:''
                        }
                        
                    </div>
                    <div className="card w-full">
                        <form onSubmit={handleRegister}  className=" px-8">
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