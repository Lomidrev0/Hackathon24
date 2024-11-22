import React, { useEffect, useState } from "react";
import axios from "axios";
import {setAppBg} from "./background";
import '../css/chat.css';
import SideMenu from "./sideMenu";
let promptArray = [];

const Chat = () => {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleSubmit = async () => {
        function addPrompt(newPrompt) {
            if (!promptArray.includes(newPrompt)) {
                promptArray.unshift(newPrompt);
            }
        }

        try {
            if (prompt === "") return;
            setPrompt("");
            setLoading(true);
            const res = await axios.post("http://127.0.0.1:5000/chat", { prompt });
            setResponse(res.data.response);
            setError("");
            addPrompt(prompt);
        } catch (err) {
            console.error("Error:", err.message);
            setError("An error occurred while fetching the response. Please try again.");
            setResponse("");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setAppBg();
    }, []);


    return (
        <div className="container-fluid bg-gradient vh-100 d-flex flex-column p-3 mb-0 ">
            <SideMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
            <div>
                <header className=" d-flex justify-content-between align-items-center p-3 rounded">
                <i className=" mb-2 bi bi-list large-icon-size"  onClick={() => setMenuOpen(true)}
                   style={{ cursor: "pointer" }}
                ></i>
                <h1 className=" fs-5 primary-white-text">Smart Data Ally</h1>
                <i className=" mb-2 bi bi-gear medium-icon-size"></i>
            </header>

            <div className=" mt-3 ">
                <select
                    className=" form-select secondary-background border-0 shadow "
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}>
                    <option value="" disabled>
                        My questions...
                    </option>
                    {promptArray.map((item, index) => (
                        item !== "" ? (
                            <option className=" primary-background" key={index} value={item}>
                                {item}
                            </option>
                        ) : null
                    ))}
                </select>
            </div>

            <div className=" flex-container  mt-3 flex-grow-1">
                <div className="bg-white rounded p-3 text-black d-flex flex-column">
                    <p>Graph:</p>
                    <img src="graph.png" alt="graf"/>
                </div>

                <div className=" bg-white rounded p-3 text-black w-100">
                    <p>Answer:</p>
                    <p>{response}</p>
                </div>
            </div>

            <div className=" fixed-bottom py-3 z-2">
                <div className=" container text-center container-fluid">
                    <div className=" mt-3 d-flex justify-content-left">
                        <button className=" btn primary-white-text border-0 bg-transparent ps-1">
                            <i className=" bi bi-plus-square"></i>
                            <span className=" ms-2">Add data file</span>
                        </button>
                    </div>

                    <div className=" d-flex">
                        <div className=" input-group">
                            <input
                                type=" text"
                                className=" input-height form-control border-0 primary-background input-focus "
                                placeholder=" Message"
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                            />
                            <span
                                onClick={handleSubmit}
                                className=" input-group-text border-0 primary-background"
                            >
                                {loading ? (
                                    <div className=" spinner-border spinner-border-sm" role=" status">
                                        <span className=" visually-hidden">Loading...</span>
                                    </div>
                                ) : (
                                    <i className=" bi bi-send"></i>
                                )}
                            </span>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
