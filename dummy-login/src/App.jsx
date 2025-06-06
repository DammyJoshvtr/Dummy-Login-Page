import React, { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginFeedback, setLoginFeedback] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoginFeedback({ message: "Attempting Login", status: "Info" });
    console.log('Sending Login Requests...')

    
    try{
      const response = await axios.post('http://127.0.0.1:5000/login', {
      username: username,
      password: password
      })

      console.log('-------------------Full Axios Response--------------------')
      console.log(response)
      console.log(`username: ${response.data.username}\npassword: ${response.password}`)
    } catch{err =>{
      console.error('Error Fetching', err)

      if (error.response) {
        console.error('Server Error Response: ', err.response.data)
        console.error('Server Error Status: ', err.response.status)
      }else if (err.request) {
        console.error('No Response from Server: ', err.request)
      }else {
        console.error('Request Setup Error:', err.message);
      }
    }

    }

    console.log('--------------------------------------------------------------')
    console.log('--------------------------------------------------------------')
    console.log('Done Fetching!')

  }


  return (
    <div className='h-screen justify-center flex items-center'>
      <div className=' border-2 rounded-md p-12'>
        <h1 className='text-3xl'>Username</h1>
        <input 
        className='w-2xs h-14 border-2 rounded-md mt-4 mb-5 p-3'
        type='text'
        placeholder='Input Username'
        value={ username }
        onChange={e => setUsername(e.target.value)}
        required />

        <h1 className='text-3xl'>Password</h1>
        <input 
        className='w-2xs h-14 border-2 rounded-md mt-4 mb-5 p-3'
        type='password'
        placeholder='Input Password'
        value={ password }
        onChange={ e => setPassword(e.target.value) } />
        <div>
          <input 
          className='text-2xl border p-2 rounded-md bg-green-400 text-white'
          type='submit'
          value='Submit'
          onClick={ handleSubmit } />
        </div>
      </div>
    </div>
  )
}

export default App