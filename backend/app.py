from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/login', methods=["POST"])
def login_user():
  
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
    
    
@app.route('/card_slider_data', methods=['GET'])
def card_slider_data():
  
  data_for_slider = [
    {
      "id": 1,
      "image": "https://cdn.pixabay.com/photo/2016/11/29/09/20/briefcase-1868352_1280.jpg",
      "title": "Welcome to the Dashboard",
      "description": "Get a quick overview of your key metrics and recent activities at a glance. Everything you need is right here.",
      "extra": "Read More"
    },

    {
      "id": 2,
      "image": "https://cdn.pixabay.com/photo/2017/08/26/23/37/business-2684758_1280.png",
      "title": "Personalize Your Data",
      "description": "Customize your dashboard to display the information most relevant to you. Tailor your experience for efficiency.",
      "extra": "Read More"
    },

    {
      "id": 3,
      "image": "https://cdn.pixabay.com/photo/2017/10/24/16/54/analysis-2884877_1280.jpg",
      "title": "Explore New Features",
      "description": "Discover our latest additions designed to streamline your workflow and enhance your productivity. Dive in and explore!",
      "extra": "Read More"
    },
    {
      "id": 4,
      "image": "https://cdn.pixabay.com/photo/2017/03/03/16/50/password-2114373_1280.jpg",
      "title": "Security Updates & Tips",
      "description": "Stay informed about the latest security enhancements and best practices to keep your data safe and secure.",
      "extra": "Read more"

    }
  ]
  
  return jsonify(data_for_slider), 200


if __name__ == "__main__":
  app.run(debug=True, host="0.0.0.0", port=5000)