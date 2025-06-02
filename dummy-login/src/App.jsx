import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginFeedback, setLoginFeedback] = useState(null); // Clearer name for user-facing feedback

  const handleSubmit = async (e) => { // Use async/await for cleaner error handling
    e.preventDefault(); // Prevent default form submission and page reload

    setLoginFeedback({ message: "Attempting login...", status: "info" });
    console.log('Sending login request...', { username, password });

    try {
      const response = await axios.post('http://127.0.0.1:5000/login', { // CORRECTED URL and data payload
        username: username,
        password: password
      });

      console.log('Response:', response.data);
      // Update feedback based on backend response
      setLoginFeedback({
        message: response.data.message || "Unknown success",
        status: response.data.status || "success"
      });

      // Clear inputs on successful login (optional)
      if (response.data.status === 'success') {
          setUsername('');
          setPassword('');
      }

    } catch (error) {
      console.error('Login Failed:', error);
      // Check if the error has a response from the server (e.g., 400, 401)
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setLoginFeedback({
          message: error.response.data.message || "Server error occurred.",
          status: error.response.data.status || "error"
        });
      } else if (error.request) {
        // The request was made but no response was received
        setLoginFeedback({
          message: "No response from server. Check network connection or server status.",
          status: "error"
        });
      } else {
        // Something else happened in setting up the request that triggered an Error
        setLoginFeedback({
          message: error.message || "An unexpected error occurred.",
          status: "error"
        });
      }
    }
  };

  return (
    <div className='h-screen justify-center flex items-center'>
      <div className=' border-2 rounded-md p-12'>
        <form onSubmit={handleSubmit}> {/* Form added for submission */}
          <h1 className='text-3xl'>Username</h1>
          <input
            className='w-2xs h-14 border-2 rounded-md mt-4 mb-5 p-3'
            type='text'
            placeholder='Input Username'
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />

          <h1 className='text-3xl'>Password</h1>
          <input
            className='w-2xs h-14 border-2 rounded-md mt-4 mb-5 p-3'
            type='password'
            placeholder='Input Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <div>
            <input
              className='text-2xl border p-2 rounded-md bg-green-400 text-white cursor-pointer'
              type='submit' // Type 'submit' to trigger form onSubmit
              value='Submit'
              // onClick is no longer needed on the input itself if using form onSubmit
            />
          </div>
        </form>

        {/* Display feedback to the user */}
        {loginFeedback && (
          <div className={`mt-4 p-2 rounded ${loginFeedback.status === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            <p>{loginFeedback.message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;