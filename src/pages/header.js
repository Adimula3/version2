import React from "react";
import '../style/styles.css';
function Header () {
    return (
        <div>
            <header>
                <nav className="navbar">
                    <a className="navbar-brand" href="https://">My store</a>
                    <div className="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item"><a className="nav-link" href="https://">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="https://">Products</a></li>
                            <li className="nav-item"><a className="nav-link" href="https://">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
}
export default Header;
