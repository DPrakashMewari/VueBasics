from flask import Flask ,jsonify
from dotenv import load_dotenv
from flask_cors import CORS
import requests,json
app = Flask(__name__)

load_dotenv("./.flaskenv")
# To Enable CROSS ORIGIN POLICY 
CORS(app,resources={r'/*':{'origins':'*'}})

# For Msg Call 
@app.route("/ping",methods=['GET'])
def home():
    return jsonify("Hello Prakash")

# Antother Msg Call
@app.route("/y",methods=['GET'])
def home1():
    return jsonify(" Hey PrAysh")

# Externale API call and render to Vue 
@app.route("/api_call",methods=['GET'])
def api_call():
    x = requests.get('https://jsonplaceholder.typicode.com/todos')
    data =  x.json()
    return jsonify(data[0])

if __name__ == "__main__":
    app.run()