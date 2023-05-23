import React, { useState } from 'react'
import Image from 'next/image'
import Logo from '../images/prateveLogo.svg'
import Link from 'next/link'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Navbar = () => {

  const [toggleNav, setToggleNav] = useState(false)

  const handleToggle = () => {
    setToggleNav(!toggleNav)
  }


  return (
    <>
    <nav className='bg-secondaryColor hidden md:flex h-[102.51px] items-center justify-between px-[70px] py-[15px] font-Grotesk'>
        <Image
        src={Logo}
        alt='prateve'
        />
        <ul className='flex gap-[30px]'>
            <Link href="">Home</Link>
            <ul>Company <ArrowDropDownIcon /></ul>
            <Link href="">FAQs</Link>
        </ul>
        <Link className='px-[30px] py-[15px] flex gap-[15px] bg-gradient-to-r from-primaryColor to-primaryColor2 text-secondaryColor rounded-[10px]' href="/CreateAccount">Get Started <ArrowForwardIcon /></Link>
    </nav>
    <nav className='px-[10px] bg-secondaryColor relative h-[70px] flex flex-col shadow-lg shadow-primaryColor2/20 items-start md:hidden font-Grotesk'>
      <Image
          src={Logo}
          alt='prateve'
        />
        <ul className={toggleNav ? 'flex flex-col items-center gap-[12%] py-[40px] fixed top-[70px] left-0 z-10 w-[100%] h-[100%] bg-secondaryColor ease-in-out duration-500' : "left-[-100%] fixed"}>
            <Link href="">Home</Link>
            <ul>Company <ArrowDropDownIcon /></ul>
            <Link href="">FAQs</Link>
            <Link className='px-[30px] py-[15px] flex gap-[15px] bg-gradient-to-r from-primaryColor to-primaryColor2 text-secondaryColor rounded-[10px]' href="/CreateAccount">Get Started <ArrowForwardIcon /></Link>
        </ul>
        
        <div onClick={handleToggle} className='absolute top-[1.5rem] right-[1rem] scale-110 cursor-pointer'>
        {toggleNav ? <CloseOutlinedIcon/> :<MenuOutlinedIcon />}
        </div>
    </nav>
    </>
  )
}

export default Navbar
