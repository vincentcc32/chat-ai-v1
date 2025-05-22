import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

const RootLayout = () => {

  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <div className='h-full'>
      <Header setOpenSideBar={setOpenSideBar}
        openSideBar={openSideBar} />
      <div className='flex h-full'>
        <Sidebar openSideBar={openSideBar} />
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout