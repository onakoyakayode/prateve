import React, { useState } from 'react'
import styles from '../styles/overall.module.css'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Otp from '../components/pages/HomePage/OTP/Otp';
// import { motion } from 'framer-motion';

const CreateAccount: React.FC = () => {

  const [carousel, setCarousel] = useState(true)

  const [popup, setPopup] = useState(false)

  const handlePopup = () => {
    setPopup(!popup)
  }


  const handleShift = () => {
    setCarousel(!carousel)
  }


  return (
    <div className={`${styles.bg} min-h-[100vh] h-[100%] py-[75px] w-[100%] md:py-[150px] px-[20px] md:px-[140px] flex flex-col md:flex md:flex-row items-start md:items-center gap-[50px] md:gap-0 md:justify-between relative`}>
      <div className='flex flex-col items-start w-[100%] md:w-[50%]'>
        <h1 className='text-textColorLight w-[100%] md:w-[349px] text-[40px] md:text-[64px] mb-[30px] md:mb-[60px]'>Save for Rainy Days!</h1>
        <div className='flex gap-[10px] items-center'>
          <div className='w-[10px] md:w-[13.6px] h-[10px] md:h-[13.6px] bg-secondaryColor rounded-[100%]'></div>
          <div className='w-[10px] md:w-[13.6px] h-[10px] md:h-[13.6px] bg-[grey] rounded-[100%]'></div>
          <div className='w-[10px] md:w-[13.6px] h-[10px] md:h-[13.6px] bg-[grey] rounded-[100%]'></div>
        </div>
      </div>
      <div className='w-[100%] md:w-[500px] h-auto md:h-[674px] bg-secondaryColor text-textColor2 rounded-[20px] px-[20px] md:px-[30px] py-[30px] md:py-[30px]'>
       <> 
        {carousel ? <>
        <div className='h-auto md:h-[26px] flex items-center justify-between mb-[40px] md:mb-[54px] font-Grotesk'>
          <Link href="/" className='flex gap-[3px] md:gap-[10px] items-center text-[13px]'>
            <KeyboardArrowLeftIcon />
            Back
          </Link>
          <p className='text-[12px] md:text-[12px] flex items-center justify-start gap-[3px] md:gap-[7px] font-normal'>Already have an account? <Link href="/SignIn" className='text-primaryColor'>Sign In</Link></p>
        </div>
        <div className='px-[0px] md:px-[20px]'>
          <h1 className='text-[#4A515C] text-[28px] md:text-[32px] mb-[15px]'>Create Account</h1>
          <p className='text-textColor2 text-[14px] md:text-[14px] mb-[30px] font-Grotesk'>Please enter your email address to create an account.</p>
          <div className='flex flex-col items-start gap-[7px] font-Grotesk mb-[30px]'>
            <label className='text-[15px] md:text-[16px] font-bold' htmlFor="">Email Address</label>
            <input type="email" name="email" placeholder='Enter email address' className='h-[50px] w-[100%] px-[7px] text-[14px] bg-secondaryColor opacity-80 rounded-[5px] border border-textColor2 placeholder:pl-[20px] focus:outline-none' />
          </div>
          <p className='px-[30px] py-[15px] flex items-center justify-center gap-[15px] text-[15px] md:text-[18px] bg-gradient-to-r from-primaryColor to-primaryColor2 text-secondaryColor rounded-[10px] cursor-pointer font-Grotesk' onClick={handleShift}>Continue <ArrowForwardIcon /></p>
        </div>
        </>
        :
        <>
        <div className='h-[26px] flex items-center justify-between mb-[40px] md:mb-[54px] font-Grotesk'>
          <p onClick={handleShift} className='flex gap-[3px] md:gap-[10px] items-center'>
            <KeyboardArrowLeftIcon />
            Back
          </p>
        </div>
        <div className='px-[5px] md:px-[20px] text-textColor'>
          <h1 className='text-[#4A515C] text-[20px] md:text-[32px] mb-[15px] text-center'>Verify your email Address</h1>
          <p className='text-textColor2 text-[14px] mb-[20px] md:mb-[30px] font-Grotesk text-center'>We sent a 6-digit-code to your email address.</p>
          <p className='text-textColor2 text-[14px] font-bold mb-[35px] md:mb-[60px] font-Grotesk text-center'>Kindly input the code below.</p>
          <div className='flex flex-col items-center gap-[1px] font-Grotesk mb-[27px] text-textColor'>
            <Otp />
          </div>
          <Link className='px-[30px] py-[15px] flex items-center justify-center gap-[15px] text-[15px] md:text-[18px] font-Grotesk mb-[30px] md:mb-[53px] bg-gradient-to-r from-primaryColor to-primaryColor2 text-secondaryColor rounded-[10px]' href="/InputDetails">Verify <ArrowForwardIcon /></Link>
          <p onClick={handlePopup} className='text-negativeAlert text-center text-[12px] font-Grotesk cursor-pointer'>Nah, I Didn&apos;t Get The Code</p>
        </div>
        </>
        }
        </>
      </div>
      <div className={popup ? `fixed top-0 w-[100%] h-full bg-textColor/10 `: 'w-[0%]'}>
      <div className={popup ? `w-[90%] md:w-[440px] h-auto md:h-[390px] bg-secondaryColor rounded-[20px] px-[20px] md:px-[30px] py-[40px] md:py-[63px] absolute left-[0%] md:left-[48%] top-[25%] md:top-[35%] ease-in-out duration-500` : "left-[200%] top-[38%] absolute"}>
        <CancelOutlinedIcon onClick={handlePopup} className='absolute right-[20px] top-[20px] text-negativeAlert cursor-pointer'/>
        <div className='font-Grotesk'>
          <div className='text-textColor2 text-[14px] mt-[20px] md:mb-[30px]'>
            <p className='text-center mb-[25px] md:mb-[20px]'>Why you&apos;re not getting the code:</p>
            <ul className='mb-[20px]'>
              <li className='list-disc text-center list-inside'>Your email address is incorrect.</li>
              <li className='list-disc text-center list-inside'>Check your spam folder.</li>
            </ul>
          </div>
          <div className='flex flex-col gap-[5px] items-start mb-[30px]'>
            <label htmlFor="" className='font-bold text-textColor2 text-[13px] md:text-[12.69px]'>Re-enter email address</label>
            <input type="email" name="" placeholder='Enter email address' className='h-[50px] md:h-[39.67px] w-[100%] border text-textColor2 pl-[5px] text-[14px] border-textColor2 rounded-[4px] placeholder:pl-[15px] placeholder:text-[11px] focus:outline-none' />
          </div>
        </div>
        <Link className='px-[30px] py-[15px] flex items-center justify-center gap-[15px] text-[15px] md:text-[17px] font-Grotesk mb-[20px] md:mb-[53px] bg-gradient-to-r from-primaryColor to-primaryColor2 text-secondaryColor/80 rounded-[10px]' href="">Resend Code</Link>  
      </div>
    </div>
    </div>
  )
}

export default CreateAccount