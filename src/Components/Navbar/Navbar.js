import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <nav>
                {/* <div>
                    <span className='logo-name'>e-BUY</span>
                </div> */}
                <div>
                    <Link className='link' to="/home">Home</Link>
                    <Link className='link' to="/reviews">Reviews</Link>
                    <Link className='link' to="/dashboard">Dashboard</Link>
                    <Link className='link' to="/blogs">Blogs</Link>
                    <Link className='link' to="/about">About</Link>

                </div>

            </nav>
        </div>
    );
};

export default Navbar;