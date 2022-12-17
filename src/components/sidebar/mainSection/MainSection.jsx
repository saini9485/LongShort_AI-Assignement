import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../Sidebar'

export  function MainSection() {
  return (
    <div>
        <Sidebar/>
        <Outlet/>
        </div>
  )
}
