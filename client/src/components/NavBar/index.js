import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg text-light">
            <div className="container">
                <Link className="navbarbrand" to="/">Google Books</Link>
                <ul className="navbar-nav">
                    <li className="navitem">
                        <Link
                            to="/search"
                            className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
                        > Search</Link>
                    </li>
                    <li className="navitem">
                        <Link
                            to="/saved"
                            className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                        >Saved</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;