import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../context/AuthContext/AuthContext';
import logo from '../assets/job-icon.png'

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext)
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><a>Item 3</a></li>
    </>


    const handleLogOut = () => {
        signOutUser()
            .then(result => {
                // console.log(result.user);

            }).catch(error => {
                console.log(error.massage);

            })
    }
    return (
        <div className="navbar bg-base-100 px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="text-2xl font-semibold flex items-center">
                    <img className='w-14' src={logo} alt="" />
                    JOB PORTAL
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-5">
                {
                    user ? <>

                        <button onClick={handleLogOut} className="btn">Log Out</button>
                    </> : <>

                        <Link to="/register" className='underline'>Register</Link>
                        <Link to="/signIn">
                            <button className="btn">Login</button>
                        </Link>
                    </>
                }

            </div>
        </div>
    );
};

export default Navbar;