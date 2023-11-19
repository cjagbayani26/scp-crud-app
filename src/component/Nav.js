import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import './Nav.css'

const Nav = () => {
    const [activeTab, setActiveTab] = useState("Home")
    return (
        <div className="nav">
            <div className="logo">Secure. Contain. Protect.</div>
            <div className="header-right">
                <Link to="/">
                    <p className={`${activeTab === "Home" ? "active" : ""}`}
                       onClick={() => setActiveTab("Home")}>
                        Home
                    </p>
                
                </Link>
                <Link to="/add">
                    <p className={`${activeTab === "AddItem" ? "active" : ""}`}
                       onClick={() => setActiveTab("AddItem")}>
                       Enter a new SCP item
                    </p>
                
                </Link>
                <Link to="/about">
                    <p className={`${activeTab === "About" ? "active" : ""}`}
                       onClick={() => setActiveTab("About")}>
                       Enter a new SCP item
                    </p>
                
                </Link>
            </div>
        </div>
    )
}

export default Nav;