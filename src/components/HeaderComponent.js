import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery";

function Header() {
    useEffect(() => {
        document.documentElement.scrollTop = 0;
        $(".navbar-collapse a").click(function () {
            $(".navbar-collapse").collapse("hide");
        });
    }, []);

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-md navbar-dark">
                <div className="container">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#myNav"
                        aria-controls="myNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="myNav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink activeClassName="selected" to="/home">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="selected" to="about">
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    activeClassName="selected"
                                    to="/events"
                                >
                                    Events
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    activeClassName="selected"
                                    to="/contact"
                                >
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
