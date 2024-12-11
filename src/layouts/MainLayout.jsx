import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';

const MainLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Navbar></Navbar>
           <div className="w-10/12 mx-auto">
           <Outlet></Outlet>
           </div>
        </div>
    );
};

export default MainLayout;