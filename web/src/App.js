import React, { useState } from "react";
import axios from "axios";

const App = () => {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [error, setError] = useState(""); // New state for error

    const handleSubmit = async () => {
        try {
            const res = await axios.post("http://127.0.0.1:5000/chat", { prompt });
            setResponse(res.data.response);
            setError(""); // Clear previous errors
        } catch (err) {
            console.error("Error:", err.message);
            setError("An error occurred while fetching the response. Please try again.");
            setResponse(""); // Clear response on error
        }
    };

    return (
        <div className="bg-light">
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <div className="card" style={{width: '100%', maxWidth: '400px'}}>
                    <div className="card-body">
                        <h5 className="card-title text-center mb-4">Login</h5>
                        <form>
                            {/* Email Input */}
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            {/* Password Input */}
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>

                            {/* Remember Me Checkbox */}
                            <div className="form-check mb-3">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="rememberMe"
                                />
                                <label className="form-check-label" htmlFor="rememberMe">
                                    Remember me
                                </label>
                            </div>

                            {/* Login Button */}
                            <button type="submit" className="btn btn-primary w-100">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
