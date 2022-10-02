import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useSignOut } from '../../hooks/useSignOut';
import { useUser } from '../../hooks/useUser';
import CartDropdown from './cart-dropdown';

const Header = () => {
    const { user } = useUser();
    const { signOut } = useSignOut();
    const router = useRouter();

    const handleSignOut = async () => {
        const isSignOut = await signOut();
        if (isSignOut) {
            router.push('/');
        }
    }

    const links = <>
        <li>
            <Link href='/'>
                <a>Home</a>
            </Link>
        </li>
        <li>
            <Link href='/catalog'>
                <a>Catalog</a>
            </Link>
        </li>
    </>

    const userNav = user && <div className="navbar-end">
        <div className="dropdown dropdown-end">
            <CartDropdown />
        </div>
        <div className="dropdown dropdown-end ml-3">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src="https://placeimg.com/80/80/people" />
                </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                </li>
                <li><a>Settings</a></li>
                <li><a onClick={handleSignOut}>Logout</a></li>
            </ul>
        </div>
    </div>

    return (
        <header className='bg-primary text-primary-content'>
            <div className="navbar max-w-screen-2xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link href="/">
                        <a className="btn btn-ghost normal-case text-xl">Next.js Shop</a>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {links}
                    </ul>
                </div>
                {/* for users */}
                {user
                    ? userNav
                    : <div className='navbar-end'>
                        <Link href="/sign-in">
                            <a className='btn'>Sign In</a>
                        </Link>
                    </div>
                }
            </div>
        </header>
    )
}

export default Header