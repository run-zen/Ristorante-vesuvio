import React from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery";

function hide() {
    document.documentElement.scrollTop = 0;
    return $(".navbar-collapse a").click(function () {
        $(".navbar-collapse").collapse("hide");
    });
}

function Header() {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-md navbar-dark">
                <div className="container">
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#myNav"
                        aria-controls="myNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="myNav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink to="/home" onClick={hide}>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="about" onClick={hide}>
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/events" onClick={hide}>
                                    Events
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" onClick={hide}>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
