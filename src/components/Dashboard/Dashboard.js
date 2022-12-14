import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';

const Dashboard = () => {
    return (
        <div className=' bg-cyan-100'>
            {/* <h1 className='text-4xl text-slate-800 text-center py-10'>
                This is Dashboard Page 1
            </h1> */}
            <DashboardSidebar>
                {/* <h2> This is DashboardSidebar from Dashboard 2 </h2> */}
                <h2 className='px-5 py-5 text-2xl text-center'>
                    Welcome to Dashboard  from Dashboard 3
                </h2>
                <div className='px-5 bg-emerald-300'>
                    <Outlet />
                </div>
            </DashboardSidebar>

        </div>
    );
};

export default Dashboard;