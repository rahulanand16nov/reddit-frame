import React from 'react';
import './Header.css';


function Header(props) {
    return (
        <header className="header">
            <div className="header_main">
                <h1 className="header_logo">Reddit</h1>
                <h2 className="header_subreddit">r/{props.subreddit}</h2>
            </div>
            <div className="header_links">
                <a href="/" className="header_link">Login</a>
                <a href="/" className="header_link">Sign Up</a>
            </div>
        </header>
    );
}

export default Header;