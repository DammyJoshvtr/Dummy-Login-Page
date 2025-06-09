import React from 'react'
import { Route, Routes, createBrowserRouter, createRoutesFromElements, RouterProvider, Navigate  } from 'react-router-dom'
import LoginPage from "./pages/LoginPage";
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
      <Route path='/' element={ <Navigate to='/login' /> } />
      <Route path='/login' element = { <LoginPage /> } />
      <Route path='/dashboard' element = { <Dashboard /> } />
    </React.Fragment>
  )
)

const App = () => {
  return (
    <RouterProvider router={ router }/>
  ) 
}

export default App