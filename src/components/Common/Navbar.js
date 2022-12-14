import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (<>
        {/* <div className='grid grid-cols-5 items-center'>
            <div className='col-span-1 px-5 text-2xl font-bold'>

                <NavLink to='/'>Logo</NavLink>
            </div>
            <ul className='flex justify-end gap-6 items-center font-semibold col-span-4 px-5'>
                <li> <NavLink to='/'><p className='p-5'>Home</p></NavLink> </li>
                <li> <NavLink to='/about'><p className='p-5'>About</p></NavLink> </li>
                <li> <NavLink to='/blogs'><p className='p-5'>Blogs</p></NavLink> </li>
                <li> <NavLink to='/dashboard'><p className='p-5'>Dashboard</p></NavLink> </li>
            </ul>
        </div> */}

        <div className="navbar bg-base-100">
            <div className="flex-1">
                {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                <NavLink to='/'>Logo</NavLink>

            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {/* <li><a>Item 1</a></li>
                        <li tabIndex={0}>
                            <a>
                            Parent
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                            </a>
                            <ul className="p-2 bg-base-100">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                    <li><a>Item 3</a></li> */}
                    <li> <NavLink to='/'>Home</NavLink> </li>
                    <li> <NavLink to='/about'>About</NavLink> </li>
                    {/* <li> <NavLink to='/blogs'>Blogs</NavLink> </li> */}
                    <li tabIndex={0} className=" z-50">
                        <NavLink to='/blogs'>
                            Blogs
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </NavLink>
                        <ul className="p-2 bg-base-100">
                            <li> <NavLink to='/BlogSport'>Blog Sport</NavLink> </li>
                            <li> <NavLink to='/BlogTour'> Blog Tour </NavLink> </li>
                        </ul>
                    </li>
                    <li> <NavLink to='/dashboard'>Dashboard</NavLink> </li>
                </ul>
            </div>
        </div>

    </>);
};

export default Navbar;