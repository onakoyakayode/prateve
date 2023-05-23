import React from 'react'
import RoundBg from '../../../../images/GradientCircle.png'
import moneyBag from '../../../../images/moneyBag.png'
import lineGrad from '../../../../images/Ellipse1.png'
import Image from 'next/image'
import Link from 'next/link'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import checkCircle from '../../../../images/la_check-circle.svg'
import TurquoiseCircle from '../../../../images/TurquoiseCircle.svg'

const Hero = () => {
  return (
    <div className='m-h-[91vh] h-[100%] md:h-87vh relative z-0 overflow-hidden px-[20px] md:px-[165px] pt-[125px] md:py-[93.49px]'>
      <div className='flex flex-col md:flex md:flex-row items-center md:items-start gap-0 justify-center z-20 relative'>
        <div className='w-[100%] md:w-[40%]'>
          <h1 className='text-[48px] md:text-[64px] text-textColor w-[100%] md:w-[565px] h-[140px] md:h-[154px] font-bold leading-[120%] mb-[24px] md:mb-[36px]'>Make <span className='text-primaryColor'>your money</span> work for you...</h1>
          <p className=' font-Grotesk font-normal text-[#515151] w-[100%] md:w-[434px] h-[76px] text-[17px] md:-[20px] leading-[190%] mb-[59px]'>We’re here to help you get loans with ease at no cost, with little or no interest rate....</p>
          <div className='flex flex-col md:flex md:flex-row items-start md:items-center gap-[20px] font-Grotesk'>
            <Link className='px-[30px] py-[15px] text-[16px] flex items-center justify-center gap-[15px] w-[100%] md:w-auto bg-gradient-to-r from-primaryColor to-primaryColor2 text-secondaryColor rounded-[10px]' href='/CreateAccount'>Get Started <ArrowForwardIcon /></Link>
            <Link className='px-[30px] py-[15px] text-[16px] flex items-center justify-center gap-[15px] w-[100%] md:w-auto text-primaryColor rounded-[10px] border-solid border-2 border-primaryColor' href='/SignIn'>Sign In <ArrowForwardIcon /></Link>
          </div>
          {/* Horizontal line */}
          <div className='w-[505px] h-[1px] bg-[#D5D5D5] mt-[59.5px]'></div>
          <div className='mt-[30px] flex items-center justify-center px-[16px] font-Grotesk gap-[20px] text-[14px] text-textColor mb-[30px]'>
            <p className='w-[100%] h-[34px] flex items-center gap-[10px] '>
              <Image src={checkCircle} alt='' className='' />
              No Charges
            </p>
            <p className='w-[100%] h-[34px] flex items-center gap-[10px]'>
              <Image src={checkCircle} alt='' className='' />
              No Collateral
            </p>
            <p className='w-[100%] h-[34px] flex items-center gap-[10px]'>
              <Image src={checkCircle} alt='' className='' />
              No Charges
            </p>
          </div>
          {/* Horizontal line */}
          <div className='w-[505px] h-[1px] bg-[#D5D5D5]'></div>
        </div>
        <div className='w-[100%] md:w-[60%] h-[100%] overflow-auto'>
          <Image src={moneyBag} alt='moneyBag' className='w-[100%] h-[100%] object-cover' />
        </div>
      </div>
      <Image src={RoundBg} alt='roundBg' className='absolute right-0 top-[-119px] z-10 hidden md:block'/>
      <Image src={lineGrad} alt='bg' className='absolute left-0 top-0 z-10' />
      <Image src={TurquoiseCircle} alt="turquoise" className='absolute right-[20%] bottom-4 z-10 hidden md:block' />
    </div>
  )
}

export default Hero
