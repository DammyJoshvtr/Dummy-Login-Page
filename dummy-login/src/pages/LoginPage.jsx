import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginFeedback, setLoginFeedback] = useState(null);
  
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoginFeedback({ message: "Attempting Login", status: "info" });
    console.log('Sending Login Requests...');

    try {
      const response = await axios.post('http://127.0.0.1:5000/login', {
        username: username,
        password: password
      });

      console.log('-------------------Full Axios Response--------------------');
      console.log(response); // Correct way to log the full object
      console.log('----------------------------------------------------------');
      console.log('Response Data from Flask:', response.data);
      console.log(`Message: ${response.data.message}`);
      console.log(`Username: ${response.data.username}`); // Correctly accessing from response.data

      // Set success feedback here
      setLoginFeedback({
        message: response.data.message || "Login successful!",
        status: response.data.status || "success"
      });

      if (response.data.status === 'success') {
        navigate('/dashboard')
      }

    } catch (err) {
      console.error('Error Fetching:', err); 

      if (err.response) {
        console.error('Server Error Response Data:', err.response.data);
        console.error('Server Error Status:', err.response.status);
        setLoginFeedback({
          message: err.response.data.message || `Server error (Status: ${err.response.status})`,
          status: err.response.data.status || "error" 
        });
      } else if (err.request) {
        console.error('No Response from Server:', err.request);
        setLoginFeedback({
          message: "No response from server. Check network connection or server status.",
          status: "error"
        });
      } else { 
        console.error('Request Setup Error:', err.message);
        setLoginFeedback({
          message: err.message || "An unexpected error occurred during request setup.",
          status: "error"
        });
      }
    } finally {
      console.log('--------------------------------------------------------------');
      console.log('Done Fetching!');
      console.log('--------------------------------------------------------------'); 
    }
  };

  return (
    <div className='h-screen justify-center flex items-center'>
      <div className=' border-2 rounded-md p-12'>
        <h1 className='text-3xl'>Username</h1>
        <input
          className='w-2xs h-14 border-2 rounded-md mt-4 mb-5 p-3'
          type='text'
          placeholder='Input Username'
          value={username}
          onChange={e => setUsername(e.target.value)}
          required />

        <h1 className='text-3xl'>Password</h1>
        <input
          className='w-2xs h-14 border-2 rounded-md mt-4 mb-5 p-3'
          type='password'
          placeholder='Input Password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          required />
        <div>
          <input
            className='text-2xl border p-2 rounded-md bg-green-400 text-white cursor-pointer'
            type='submit'
            value='Submit'
            onClick={handleSubmit} />
        </div>

        {loginFeedback && (
          <div className={`mt-4 p-2 rounded ${loginFeedback.status === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            <p>{loginFeedback.message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;