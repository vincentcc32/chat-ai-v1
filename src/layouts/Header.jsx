import React from 'react'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
const Header = ({ setOpenSideBar, openSideBar }) => {
  return (
    <div className='bg-primary py-7 px-5'>
      <h2 className='hidden lg:block font-bold text-2xl text-logo'>Tạ Công Cường</h2>
      <div className='lg:hidden inline-block cursor-pointer' onClick={() => setOpenSideBar(!openSideBar)}>
        <DensityMediumIcon sx={{ color: '#E2E2E5' }} />
      </div>
    </div>
  )
}

export default Header