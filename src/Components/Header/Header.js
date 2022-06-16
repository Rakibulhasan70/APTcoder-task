import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Link, Navigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = ({ children }) => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        Navigate('/login')
    };

    const menuItem = <>
        <NavLink to='/home' className='rounded-lg px-5  text-lg hover:bg-primary '>Home</NavLink>
        <NavLink to='/dasboard' className='rounded-lg px-5  text-lg hover:bg-primary '>Dashboard</NavLink>
        {
            user ?
                <NavLink to='/login' className='rounded-lg px-5  text-lg hover:bg-primary ' onClick={logout}>Logout</NavLink>

                :
                <NavLink to='/login' className='rounded-lg px-5  text-lg hover:bg-primary '>Login</NavLink>
        }
    </>
    return (
        <div>
            <div class="drawer drawer-end ">
                <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col ">
                    <div class="w-full navbar bg-accent">
                        <div class="flex-1 px-2 mx-2 text-xl "><Link to='/home'> APTCoder</Link></div>
                        <div class="flex-none lg:hidden ">
                            <label for="my-drawer-3" class="btn btn-square btn-ghost ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div class="flex-none hidden lg:block">
                            <ul class="menu menu-horizontal m-5">
                                {menuItem}
                            </ul>
                        </div>
                    </div>
                    {children}
                </div>
                <div class="drawer-side ">
                    <label for="my-drawer-3" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                        {menuItem}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;