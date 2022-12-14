import React from 'react';
import { Link } from 'react-router-dom';

const DashboardSidebar = ({ children }) => {
    return (
        <div className="drawer drawer-mobile">

            {/* <h2>  This is DashboardSidebar from Sidebar layout 4 </h2> */}
            <input id="dashboard-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content">
                {/* <!-- Page content here -->  */}
                <label htmlFor="dashboard-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                {children}
            </div>

            <div className="drawer-side">
                <label htmlFor="dashboard-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-60 bg-base-100 text-base-content">

                    <li>
                        <Link to='/dashboard/AllBlogList' > All Blog List </Link>
                    </li>
                    <li>
                        <Link to='/dashboard/AddBlog' > Add Blog </Link>
                    </li>


                </ul>
            </div>

        </div>
    );
};

export default DashboardSidebar;