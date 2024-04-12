import React from 'react'
import { Navbar } from '../../components/navbar/navbar'
import { Outlet } from 'react-router-dom'
import './Layout.scss'

export const Layout = () => {
  return (
    <div className='layout'>
      <div className='navbar'>
      <Navbar/>
      </div>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  )
}
