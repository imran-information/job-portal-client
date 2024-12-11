import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import registerLottie from '../assets/loitte-animation/register-lottie.json'
import AuthContext from '../context/AuthContext/AuthContext';
const Register = () => {
    const { handleUserRegister } = useContext(AuthContext)
    const [error, setError] = useState({})
    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        if (password > 6) {
            return setError({ ...error, password: "Password must be 6 characters long" })
        }
        if (!/[a-z]/.test(password)) {
            return setError({ ...error, password: "Password must contain at least one  Lowercase letter" })
        }
        if (!/[A-Z]/.test(password)) {
            return setError({ ...error, password: "Password must contain at least one Uppercase letter" })
        }

        handleUserRegister(email, password)
            .then(result => {
                console.log(result);
            }).catch(err => {
                console.log(err);

            })

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                <div className="text-center">

                    <Lottie animationData={registerLottie}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold mx-auto mt-5">Register now!</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            {error?.password && <label className='label text-sm text-red-500'>
                                {error.password}
                            </label>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;