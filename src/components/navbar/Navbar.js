import React, { useEffect, useState } from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DarkModeContext from "../../context/DarkModeContext";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const Navbar = ({ setDarkMode }) => {
    const [isCheck, setIsCheck] = useState(false);
    const [navItems, setNavItems] = useState([]);
    const darkMode = useContext(DarkModeContext);

    const getItems = () => {
        const db = getFirestore();
        const itemsRef = collection(db, "categories");
        getDocs(itemsRef).then((snapshot) => {
            setNavItems(snapshot.docs.map((e) => ({ id: e.id, ...e.data() })));
        });
    };

    useEffect(() => {
        getItems();
    }, []);

    return (
        <div className="navbar bg-base-100 bg-primary text-primary-content">
            <div className="container mx-auto">
                <div className="flex-1">
                    <Link
                        to={`/`}
                        className="text-xl normal-case btn btn-ghost"
                    >
                        DR ecommerce
                    </Link>
                </div>
                <div className="flex-1">
                    <ul className="p-0 menu menu-horizontal">
                        {navItems.map((e, k) => {
                            return (
                                <li key={k}>
                                    <Link to={`/category/${e.id}`}>
                                        {e.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <CartWidget />
                <div className="form-control">
                    <label className="cursor-pointer label">
                        <input
                            type="checkbox"
                            className="toggle"
                            onClick={() => {
                                setIsCheck(!!isCheck);
                                setDarkMode(!darkMode);
                            }}
                        />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
