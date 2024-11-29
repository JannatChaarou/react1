import React from 'react';

function Nav() {
    return (
        <nav className="menu">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/services">Service</a></li>
                    <li><a href="/blog">Blog</a></li>
                </ul>
            </nav>
    );
}

export default Nav;
