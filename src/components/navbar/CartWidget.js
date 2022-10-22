import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
const CartWidget = () => {
    const { count } = useCart();
    return (
        <div className="dropdown dropdown-end">
            <Link to="/cart">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>
                        <span className="badge badge-sm indicator-item">
                            {count}
                        </span>
                    </div>
                </label>
            </Link>
        </div>
    );
};

export default CartWidget;
