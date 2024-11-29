import React from 'react';
import Nav from '../Menu/nav';

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <h1>Logo</h1> 
            </div>
            <Nav />
            <div className="auth-buttons">
                <button className="signin-btn">Sign In</button>
                <button className="login-btn">Log In</button>
            </div>
        </header>
    );
}

export default Header;
