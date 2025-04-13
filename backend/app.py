from flask import Flask
from flask import jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os

app = Flask(__name__)
CORS(app)

load_dotenv()

os.getenv("")

@app.route('/login' , methods=["POST"])
def login():
    try:

        return jsonify( {"response" : "Worked"})
    except Exception as e:
        print(f"Error , {e} ")
        return jsonify( {"response" : "Didnt Worked"})


@app.route('/register' ,  methods=["POST"])
def register():
     return jsonify( {"response" : "Worked"})


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')  # Make sure it binds to all network interfaces
