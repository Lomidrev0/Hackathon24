import React, { useState, useEffect } from "react";
import "../css/home.css";
import { setLoginBg } from "./background";
import Login from "../components/login";
import Register from "../components/register";

const Home = () => {
    const [isRegistering, setIsRegistering] = useState(false); // State to toggle forms

    useEffect(() => {
        setLoginBg();
    }, []);

    // Handlers to toggle between Login and Register components
    const showRegisterForm = () => setIsRegistering(true);
    const showLoginForm = () => setIsRegistering(false);

    return (
        <div>
            <div className="app-name-text">
                <p className="basic-text">Smart Data Allay</p>
            </div>
            <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100 mb-0">
                <div className="d-flex align-items-center justify-content-center min-vh-100 flex-column">
                    <div className="row w-100">
                        {/* Left Section: Text Block */}
                        <div
                            className="col-lg-6 col-12 order-lg-1 order-1 d-flex align-items-center justify-content-center mb-5 mb-lg-0"
                        >
                            <div className="text-center">
                                <h1 className="display-4 loginText text-shadow mb-0">
                                    Platform that makes data analysis accessible to everyone
                                </h1>
                            </div>
                        </div>
                        {/* Right Section: Login/Register Form */}
                        <div className="col-lg-6 col-12 order-lg-2 order-2 d-flex justify-content-center">
                            {isRegistering ? (
                                <Register onSwitchToLogin={showLoginForm}/>
                            ) : (
                                <Login onSwitchToRegister={showRegisterForm}/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
