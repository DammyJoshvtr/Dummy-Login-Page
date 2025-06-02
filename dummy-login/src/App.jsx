import React from 'react'

const App = () => {
  return (
    <div className='h-screen justify-center flex items-center'>
      <div className=' border-2 rounded-md p-12'>
        <h1 className='text-3xl'>Username</h1>
        <input 
        className='w-2xs h-14 border-2 rounded-md mt-4 mb-5 p-3'
        type='text'
        placeholder='Input Username'
        required />

        <h1 className='text-3xl'>Password</h1>
        <input 
        className='w-2xs h-14 border-2 rounded-md mt-4 mb-5 p-3'
        type='password'
        placeholder='Input Password' />
        <div>
          <input 
          className='text-2xl border p-2 rounded-md bg-green-400 text-white'
          type='submit'
          value='Submit'/>
        </div>
      </div>
    </div>
  )
}

export default App