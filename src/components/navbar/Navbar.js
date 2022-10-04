import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to={"/"}>DR ecommerce </Link>
            </div>
            <div className="flex-none">
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li>
                            <Link to={"/category/1"}>Nintendo Switch</Link>
                        </li>
                        <li>
                            <Link to={"/category/2"}>Playstation</Link>
                        </li>
                    </ul>
                </div>
                <CartWidget />
                <div className="dropdown dropdown-end">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li>
                            <a>Settings</a>
                        </li>
                        <li>
                            <a>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
