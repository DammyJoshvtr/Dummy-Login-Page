import React, { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {

  const [userdata, setUserdata] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const verifyLogin = () => {
    console.log('Checking...')
    axios.post('http://127.0.0.1:5000')
      .then(response => {
        console.log(response);
        setUserdata(response.data)
      })
      .catch(
        error => {
          console.error('Login Failed', error)
          setUserdata({
            status: "Error", 
            message: error.message
          });
        }
      )
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
          onClick={ verifyLogin } />
        </div>

        { userdata && (
          <div className="mt-4 p-2 bg-gray-100 rounded">
            <pre>{JSON.stringify(userdata, null, 2)}</pre>
          </div>
        ) }
      </div>
    </div>
  )
}

export default App