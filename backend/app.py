from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/login', methods=["POST"])
def login_user(): # Renamed function for clarity
  
  if not request.is_json:
    return jsonify({ "message" : "Request must be in JSON", "status" : "error" }), 400 # Consistent lowercase keys
  
  data = request.get_json()
  
  username = data.get('username')
  password = data.get('password')
  
  # Basic validation if username/password are empty
  if not username or not password:
      return jsonify({"message": "Username and password are required", "status": "error"}), 400


  if username == 'Damilola' and password == 'password':
    return jsonify({ 
      "message" : "Login successful", # Corrected typo, removed emoji
      "username" : username,
      "status" : "success" # Consistent plain text status
    }), 200
  else:
    return jsonify({ 
      "message" : "Invalid username or password", # More generic message
      # "username" : username, # Removed username on failure
      "status" : "failed" # Consistent plain text status
    }), 401


if __name__ == "__main__":
  app.run(debug=True, host="0.0.0.0", port=5000)