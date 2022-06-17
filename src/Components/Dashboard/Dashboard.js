import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <h2 className='text-4xl my-5 text-center'>Welcome to your Dashboard </h2>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side ">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-48   text-base-content" style={{ backgroundColor: 'lightgrey' }}>
                        <li><Link to='/dasboard' className='text-xl'>Admin Details</Link></li>
                        <li><Link to='/dasboard/employer' className='text-xl'>Employer List</Link></li>
                    </ul>

                </div>
            </div >
        </div>
    );
};

export default Dashboard;