import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand navbar-light">
                <div className="container">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/events">Events</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
