import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import './Nav.css';

const Nav = () => {
    const [activeTab, setActiveTab] = useState("Home")
    const location = useLocation();

    useEffect(() => {
     if(location.pathname === "/") {
        setActiveTab("Home")
     }  else if(location.pathname === "/add") {
        setActiveTab("AddItem");
     }  else if(location.pathname === "/about") {
        setActiveTab("About");
     }
    }, [location]);
    return (
        <div className="nav">
            <div className="logo">Secure. Contain. Protect.</div>
            <div className="nav-right">
                <Link to="/">
                    <p className={`${activeTab === "Home" ? "active" : ""}`}
                       onClick={() => setActiveTab("Home")}>
                        Home
                    </p>
                
                </Link>
                <Link to="/add">
                    <p className={`${activeTab === "AddItem" ? "active" : ""}`}
                       onClick={() => setActiveTab("AddItem")}>
                       Add Item
                    </p>
                
                </Link>
                <Link to="/about">
                    <p className={`${activeTab === "About" ? "active" : ""}`}
                       onClick={() => setActiveTab("About")}>
                       About
                    </p>
                
                </Link>
            </div>
        </div>
    )
}

export default Nav;