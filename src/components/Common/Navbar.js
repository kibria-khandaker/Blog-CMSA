import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (<>
        {/* <div className='grid grid-cols-5 items-center'>
            <div className='col-span-1 px-5 text-2xl font-bold'>

                <Link to='/'>Logo</Link>
            </div>
            <ul className='flex justify-end gap-6 items-center font-semibold col-span-4 px-5'>
                <li> <Link to='/'><p className='p-5'>Home</p></Link> </li>
                <li> <Link to='/about'><p className='p-5'>About</p></Link> </li>
                <li> <Link to='/blogs'><p className='p-5'>Blogs</p></Link> </li>
                <li> <Link to='/dashboard'><p className='p-5'>Dashboard</p></Link> </li>
            </ul>
        </div> */}

        <div className="navbar bg-base-100">
            <div className="flex-1 font-semibold text-2xl uppercase">
                {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                <Link to='/'>Logo</Link>

            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 font-semibold">
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
                    <li> <Link to='/'>Home</Link> </li>
                    <li> <Link to='/about'>About</Link> </li>
                    {/* <li> <Link to='/blogs'>Blogs</Link> </li> */}
                    <li tabIndex={0} className=" z-50">
                        <Link to='/blogs'>
                            Blogs
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </Link>
                        <ul className="p-2 bg-base-100">
                            <li> <Link to='/BlogSport'>Blog Sport</Link> </li>
                            <li> <Link to='/BlogTour'> Blog Tour </Link> </li>
                        </ul>
                    </li>
                    <li> <Link to='/dashboard'>Dashboard</Link> </li>
                </ul>
            </div>
        </div>

    </>);
};

export default Navbar;