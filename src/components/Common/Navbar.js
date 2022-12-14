import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='grid grid-cols-5 items-center'>
            <div className='col-span-1 px-5 text-2xl font-bold'>
                
                <NavLink to='/'>Logo</NavLink>
            </div>
            <ul className='flex justify-end gap-6 items-center font-semibold col-span-4 px-5'>
                <li> <NavLink to='/'><p className='p-5'>Home</p></NavLink> </li>
                <li> <NavLink to='/about'><p className='p-5'>About</p></NavLink> </li>
                <li> <NavLink to='/blogs'><p className='p-5'>Blogs</p></NavLink> </li>
                <li> <NavLink to='/dashboard'><p className='p-5'>Dashboard</p></NavLink> </li>
            </ul>
        </div>
    );
};

export default Navbar;