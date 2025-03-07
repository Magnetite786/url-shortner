import { useState } from 'react'

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/app-layout'
import LandingPage from './pages/landing'
import Auth from './pages/auth'
import Dashboard from './pages/Dashboard'
import Link from './pages/link'
import RedirectLink from './pages/redirect-link'

function App() {
  const router = createBrowserRouter([
    {
      element:<AppLayout/>,
      children:[
        {
          path:'/',
          element:<LandingPage/>
        },
        {
          path:'/dashboard',
          element:<Dashboard/>
        },
        {
          path:'/auth',
          element:<Auth/>
        },
        {
          path:'/link/:id',
          element:<Link/>
        },
        {
          path:'/:id',
          element:<RedirectLink/>
        },
      ]
    }
  ])

  return <RouterProvider router={router}/>
}

export default App
