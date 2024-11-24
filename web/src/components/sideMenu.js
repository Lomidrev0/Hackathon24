import React from "react";
import "../css/sideMenu.css";

const SideMenu = ({ isOpen, toggleMenu }) => {
    return (
        <div className={`side-menu ${isOpen ? "open" : ""}`}>
            <div className="menu-header">
                <button className="close-btn delete-shadow" onClick={toggleMenu}>
                    <i className="bi bi-x"></i>
                </button>
                <div className="user-avatar">
                    <span>D</span>
                </div>
            </div>
            <div className="menu-search">
                <input
                    type="text"
                    placeholder="Search in chats"
                    className="search-input"
                />
                <i className="bi bi-search search-icon"></i>
            </div>
            <div className="menu-content">
                <h5>Chats:</h5>
                <ul>
                    <li>Suspindisse faucibus purus rhoncus.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Cras et lacus id.</li>
                    <li>Nulla venenatis libero at.</li>
                    <li>Fusce volutpat a ante.</li>
                    <li>Pellentesque eu sem ullamcorper.</li>
                    <li>Donec pretium massa ac.</li>
                    <li>In hac habitasse platea.</li>
                    <li>Quisque mollis efficitur dolor.</li>
                </ul>
            </div>
            <footer className="menu-footer">
                <p>© 2024 Smart Data Ally All rights reserved.</p>
                <p>Powered by ChatGPT</p>
            </footer>
        </div>
    );
};

export default SideMenu;
