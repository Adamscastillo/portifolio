import { Bars3Icon } from '@heroicons/react/16/solid'
import React from 'react'

interface Props{
    openNav: () => void;
}

const Nav = ({openNav}:Props) => {
  return (
    <div className='w-[100%] top-0 h-[12vh] bg-[#141c27] shodow-md '>
        <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
            <h1 className='nav-title'>
                WEB
                <span className='nav-title text-red-600'>DEV</span>
            </h1>
            <div className='nav-link'>HOME</div>
            <div className='nav-link'>SERVIÇOS</div>
            <div className='nav-link'>PROJETOS</div>
            <div className='nav-link'>CONTATO</div>
            <div className='nav-link'>SOBRE</div>
            <div onClick={openNav} >
                <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-red-400 '/>
            </div>
        </div>

      
    </div>
  )
}

export default Nav
