import React, { useState } from "react";
import axios from "axios";

const App = () => {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");

    const handleSubmit = async () => {
        try {
            const res = await axios.post("http://127.0.0.1:5000/chat", { prompt });
            setResponse(res.data.response);
        } catch (err) {
            console.error("Error:", err.message);
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
            <div>
                <h3>Response:</h3>
                <p>{response}</p>
            </div>
        </div>
    );
};

export default App;
