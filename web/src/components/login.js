import React, {useEffect, useState} from "react";
import  '../css/login.css';
import {setBackground} from "./background";

const Login = () => {
    useEffect(() => {
        setBackground();
    }, []);
    return (
        <div>
            <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100">
                <div className="row w-100">
                    {/* Left Section: Text Block */}
                    <div
                        className="col-lg-6 col-12 order-lg-1 order-1 d-flex align-items-center justify-content-center">
                        <div className="text-center">
                            <h1 className="display-4">Platform that makes data analysis accessible to everyone</h1>
                        </div>
                    </div>

                    {/* Right Section: Login Form */}
                    <div className="col-lg-6 col-12 order-lg-2 order-2 d-flex justify-content-center">
                        <div className="card" style={{width: '100%', maxWidth: '400px'}}>
                            <div className="card-body">
                                <h5 className="card-title text-center mb-4">Login</h5>
                                <form>
                                    <div className="mb-3">
                                        <input type="email" className="form-control" id="email" placeholder="Email"/>
                                    </div>

                                    <div className="mb-3">
                                        <input type="password" className="form-control" id="password"
                                               placeholder="Password"/>
                                    </div>

                                    <button type="submit" className="btn btn-primary w-100 mb-3">
                                        Continue
                                    </button>

                                    <div className="mb-3">
                                        <p className="text-center">Don't have an account - <a href="#">Sign up</a></p>
                                    </div>

                                    <div className="d-flex align-items-center justify-content-center mb-3">
                                        <hr className="flex-grow-1"/>
                                        <span className="mx-3">or</span>
                                        <hr className="flex-grow-1"/>
                                    </div>

                                    <div className="mb-3">
                                        <button
                                            className="btn w-100 primaryBorder d-flex justify-content-center align-items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="mr10px" width="1.33em" height="1em"
                                                 viewBox="0 0 256 193">
                                                <path fill="#4285f4"
                                                      d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z"/>
                                                <path fill="#34a853"
                                                      d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z"/>
                                                <path fill="#ea4335"
                                                      d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"/>
                                                <path fill="#fbbc04"
                                                      d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z"/>
                                                <path fill="#c5221f"
                                                      d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z"/>
                                            </svg>
                                            <p className="m-0">Continue with Google</p>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;