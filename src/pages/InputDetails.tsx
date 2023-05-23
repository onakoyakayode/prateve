import React from 'react'
import styles from '../styles/overall.module.css'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

const InputDetails = () => {
  return (
    <div className={`${styles.inputDetails} min-h-screen h-[100%] w-[100%] py-[75px] md:py-[150px] px-[20px] md:px-[140px] flex flex-col md:flex md:flex-row items-start md:items-center gap-[50px] md:gap-0 justify-between relative`}>
      <div className='flex flex-col items-start'>
        <h1 className='text-textColorLight w-[100%] md:w-[479px] text-[40px] md:text-[64px] mb-[30px] md:mb-[60px]'>Get loans from your comfort!</h1>
        <div className='flex gap-[10px] items-center'>
          <div className='w-[10px] md:w-[13.6px] h-[10px] md:h-[13.6px] bg-[grey] rounded-[100%]'></div>
          <div className='w-[10px] md:w-[13.6px] h-[10px] md:h-[13.6px] bg-secondaryColor rounded-[100%]'></div>
          <div className='w-[10px] md:w-[13.6px] h-[10px] md:h-[13.6px] bg-[grey] rounded-[100%]'></div>
        </div>
      </div>
      <div className='w-[100%] md:w-[500px] h-auto md:h-[674px] bg-secondaryColor text-textColor2 rounded-[20px] px-[20px]  md:px-[30px] py-[30px]'>
        <div className='h-auto md:h-[26px] flex items-center justify-between mb-[40px] md:mb-[54px] font-Grotesk'>
          <Link href="/CreateAccount" className='flex gap-[3px] md:gap-[10px] items-center'>
            <KeyboardArrowLeftIcon />
            Back
          </Link>
          <p className='text-[12px] md:text-[12px] flex items-center gap-[5px] md:gap-[7px] font-normal'>Already have an account? <Link href="" className='text-primaryColor'>Sign In</Link></p>
        </div>
        <div className='px-[0px] md:px-[20px]'>
          <h1 className='text-[#4A515C] text-[24px] md:text-[32px] mb-[33px]'>Create Account!</h1>
          <form action="" className='flex flex-col items-start w-[full]'>
            <div className='flex flex-col items-start gap-[7px] font-Grotesk mb-[30px] w-[100%]'>
                <label className='text-[15px] md:text-[16px] text-textColor2 font-bold' htmlFor="">Firstname</label>
                <input type="email" name="email" placeholder='Enter your firstname' className='h-[60px] w-[100%] text-[14px] px-[7px] bg-secondaryColor opacity-80 rounded-[5px] border border-textColor2 placeholder:pl-[19px] focus:outline-none' />
            </div>
            <div className='flex flex-col items-start gap-[7px] font-Grotesk mb-[47px] w-[100%]'>
                <label className='text-[16px] font-bold' htmlFor="">Lastname</label>
                <input type="email" name="email" placeholder='Enter your lastname' className='h-[60px] w-[100%] text-[14px] px-[7px] bg-secondaryColor opacity-80 rounded-[5px] border border-textColor2 placeholder:pl-[19px] focus:outline-none' />
            </div>
            <div className='flex items-center gap-[10px] mb-[30px] font-Grotesk'>
                <input type="checkbox" name="" id="" />
                <p className='text-[12px]'>I agree to the terms and conditions of use</p>
            </div>
          </form>
          <Link href='/CreatePassword' className='px-[30px] py-[15px] h-[60px] font-Grotesk flex items-center justify-center gap-[15px] text-[15px] md:text-[18px] bg-gradient-to-r from-primaryColor to-primaryColor2 text-secondaryColor rounded-[10px] cursor-pointer'>Continue <ArrowForwardIcon /></Link>
        </div>
        </div>
    </div>
  )
}

export default InputDetails
