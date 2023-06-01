import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import prateveLogo from '../images/prateveLogo.svg'
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import AsideLink from './Links/AsideLink';

const Aside = () => {


  return (
    <div className='w-[10%] md:w-[17%] bg-[#FAFAFA] h-screen flex flex-col items-center font-Grotesk font-bold py-[20px] md:py-[20px] fixed top-0 left-0'>
      <Link className='mb-[60px]' href="/">
        <Image src={prateveLogo} alt='prateve' className='' />
      </Link>
      <ul className='w-[100%] md:gap[0] text-textColor2'>
        <AsideLink href='/HomeDashboard'> <HomeIcon /> <p className='hidden md:block'> Dashboard</p></AsideLink>
        <AsideLink href='/Profile/PersonalDetails'><AccountCircleOutlinedIcon/> <p className='hidden md:block'>Profile</p></AsideLink>
        <AsideLink href='/FinancialNetwork/History'><ConnectWithoutContactIcon /> <p className='hidden md:block'>Financial Netw.</p></AsideLink>
        <AsideLink href='/History'><SyncAltIcon /><p className='hidden md:block'> History</p></AsideLink>
        <AsideLink href='/Settings'><SettingsIcon /> <p className='hidden md:block'>Settings</p></AsideLink>
        <Link href="" className='flex items-center gap-[20px] h-[45px] md:h-[69px] mt-[90px] text-negativeAlert hover:bg-negativeAlert hover:text-textColorLight pl-[15px] md:pl-[50px]'>
            <LogoutIcon />
           <p className='hidden md:block'>Log Out</p>
        </Link>
      </ul>
      
    </div>
  )
}

export default Aside
