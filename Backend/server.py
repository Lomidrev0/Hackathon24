from flask import Flask, request, jsonify
from dotenv import load_dotenv, find_dotenv
import openai
import os


app = Flask(__name__)


load_dotenv()

openai.api_key = ""

def chat_with_gpt(prompt):
    try:

        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt}
            ]
        )

        return response['choices'][0]['message']['content']
    except Exception as e:
        return f"Error: {e}"



@app.route("/chat", methods=["POST"])
def chat():

    data = request.get_json()
    prompt = data.get("prompt", "")
    if not prompt:
        return jsonify({"error": "No prompt provided"}), 400


    gpt_response = chat_with_gpt(prompt)
    return jsonify({"response": gpt_response})

if __name__ == "__main__":
    app.run(debug=True)


