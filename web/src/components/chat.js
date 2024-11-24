import React, {useEffect, useState} from "react";
import axios from "axios";
import { setBackground } from "./background";
import '../css/variables.css';


const Chat = () => {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async () => {
        try {
            if(prompt === "")return;

            const res = await axios.post("http://127.0.0.1:5000/chat", { prompt });
            setResponse(res.data.response);
            setPrompt("");
            setError("");

        } catch (err) {
            console.error("Error:", err.message);
            setError("An error occurred while fetching the response. Please try again.");
            setResponse("");
        }
    };
    useEffect(() => {
        setBackground();
    }, []);
    return (
        <div className="container-fluid bg-gradient  vh-100 d-flex flex-column p-3">

            <header className="d-flex justify-content-between align-items-center bg-danger p-3 rounded">
                <button className="btn btn-outline-light btn-sm">☰</button>
                <h1 className="text-white fs-4">Smart Data Ally</h1>
                <button className="btn btn-outline-light btn-sm">⚙️</button>
            </header>

            <div className="mt-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="My question..."
                />
            </div>

            <div className="mt-3 bg-white rounded p-3">
                <img
                    src="chart-placeholder.png"
                    alt="Chart"
                    className="img-fluid rounded"
                />
            </div>

            <div className="mt-3 bg-white rounded p-3 text-black">
                <p>{response}</p>
            </div>

            <div className="mt-3 d-flex justify-content-center">
                <button className="btn btn-light text-danger border-danger">
                    + Add data file
                </button>
            </div>

            <div className="fixed-bottom py-3">
                <div className="container text-center">
                    <div className="mt-3 d-flex">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control border-0"
                                placeholder="Message"
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                            />
                            <span
                                style={{ backgroundColor: '#E5E5E5' }}
                                onClick={handleSubmit}
                                className="input-group-text border-0  ">
                            <i className="bi bi-send"></i>
                          </span>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Chat;