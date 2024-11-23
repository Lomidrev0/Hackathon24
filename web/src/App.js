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
        <div>
            <h1>Chat with GPT-4</h1>
            <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter your message..."
                rows="5"
                cols="50"
            />
            <br />
            <button onClick={handleSubmit}>Send</button>

            {/* Display error if any */}
            {error && <div style={{ color: "red" }}>{error}</div>}

            <div>
                <h3>Response:</h3>
                <p>{response}</p>
            </div>
        </div>
    );
};

export default App;
