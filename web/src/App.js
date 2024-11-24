import React, { useState } from "react";
import axios from "axios";
import Chat from "./conponents/chat";

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
                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Email"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Password"
                                    required
                                />
                            </div>

                            <button type="submit" className="btn btn-primary w-100">
                                Continue
                            </button>

                            <div className="mb-3">
                                <p>Don't have an account - <a href="#">Sing up</a></p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <hr className="flex-grow-1 divider-line"/>
                                <span className="mx-3 divider-text">or</span>

                                <hr className="flex-grow-1 divider-line"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default App;
