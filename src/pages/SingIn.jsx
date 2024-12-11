import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import signInLottie from '../assets/loitte-animation/signIn-lottie.json';
import AuthContext from '../context/AuthContext/AuthContext';

const SingIn = () => {
    const { signInUser } = useContext(AuthContext)

    const handleSignIn = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
            .then(result => {
                console.log('signIn user', result.user);

            }).catch(error => {
                console.log(error.message);

            })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                <div className="text-center">
                    <Lottie animationData={signInLottie}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold mx-auto mt-5">SignIn now!</h1>
                    <form onSubmit={handleSignIn} className="card-body">
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
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">SignIn</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SingIn;