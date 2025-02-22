import Header from '@/components/header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
        <main className='min-h-screen px-20'>
            <Header/>
            <Outlet/>
        </main>

        <div className='p-10 text-center bg-gray-800 mt-10 text-white'>
            Developed by Pravin B
        </div>
    </div>
  )
}

export default AppLayout