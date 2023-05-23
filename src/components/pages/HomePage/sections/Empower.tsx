import Image from 'next/image'
import React from 'react'
import empowerLeft from '../../../../images/empowerLeft.svg'
import empowerRight from '../../../../images/empowerRight.svg'
import loanImage from '../../../../images/krakenimages.svg'
import savingsImage from '../../../../images/savingsImage.svg'
import finNetworkImage from '../../../../images/finNetworkImage.svg'
import moneyPic from '../../../../images/moneyPic.png'
import Link from 'next/link'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Empower = () => {
  return (
    <div className='flex flex-col'>
        <div className='h-[350px] w-full bg-primaryColor flex flex-col items-center justify-center relative px-[20px]'>
        <h1 className='text-[26px] md:text-[32px] h-[70px] md:h-[90px] w-[100%] md:w-[441px] text-textColorLight opacity-80 text-center mb-[25px]'>We Empower Africans in Creating Real Wealth</h1>
        <p className='h-[104px] w-[100%] md:w-[555px] text-[15px] md:text-[16px] text-textColorLight opacity-80 font-Grotesk font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies tristique mollis lacus ultrices feugiat curabitur tempus arcu, est. Risus mauris ultrices tellus ante purus tortor sem sit purus. Non tempus libero cras sed congue mi. Leo arcu sed maecenas aliquet ut quam.</p>
        <Image src={empowerLeft} alt='svg' className='absolute left-0 top-0' />
        <Image src={empowerRight} alt='svg' className='absolute right-0 top-0 z-20'/>
        </div>
        <div className='h-auto md:h-[390px] px-[20px] flex flex-col-reverse md:flex md:flex-row items-center md:items-start justify-center gap-[30px] md:gap-[89px] mt-[40px] md:mt-[73px]'>
            <div className=' w-[100%] md:w-[436px] flex flex-col items-start mt-[33px]'>
                <h3 className='text-[30px] md:text-[32px] text-textColor mb-[20px]'>Loans</h3>
                <p className='text-textColor2 font-Grotesk text-[100%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies tristique mollis lacus ultrices feugiat curabitur tempus arcu, est. Risus mauris ultrices tellus ante purus tortor sem sit purus. Non tempus libero cras sed congue mi. Leo arcu sed maecenas aliquet ut quam.</p>
                <Link className='mt-[51px] bg-primaryColor text-textColorLight text-[15px] md:text-[16px] rounded-[10px] py-[15px] px-[30px] flex justify-center font-Grotesk w-[100%] md:w-auto' href="">Learn more</Link>
            </div>
            <Image src={loanImage} alt='loan-image' className='shadow-3xl rounded-[20px] w-[300px] md:w-auto h-[300px] md:h-auto' />
        </div>
        <div className='h-auto md:h-[450px] px-[20px] flex flex-col-reverse items-center md:items-start md:flex-row-reverse bg-[#D2E6F3] py-[50px] justify-center gap-[20px] md:gap-[89px] mt-[73px]'>
            <div className='w-[100%] md:w-[436px] flex flex-col items-start mt-[33px]'>
                <h3 className='text-[32px] text-textColor mb-[20px]'>Savings</h3>
                <p className='text-textColor2 font-Grotesk text-[100%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies tristique mollis lacus ultrices feugiat curabitur tempus arcu, est. Risus mauris ultrices tellus ante purus tortor sem sit purus. Non tempus libero cras sed congue mi. Leo arcu sed maecenas aliquet ut quam.</p>
                <Link className='mt-[30px] bg-primaryColor text-textColorLight text-[15px] md:text-[16px] rounded-[10px] py-[15px] px-[30px] font-Grotesk flex justify-center w-[100%] md:w-auto' href="">Learn more</Link>
            </div>
            <Image src={savingsImage} alt='loan-image' className='shadow-3xl rounded-[20px] w-[300px] md:w-auto h-[300px] md:h-auto' />
        </div>
        <div className='h-auto md:h-[390px] px-[20px] flex flex-col-reverse md:flex md:flex-row items-center md:items-start justify-center gap-[20px] md:gap-[89px] mt-[73px]'>
            <div className='w-[100%] md:w-[436px] flex flex-col items-start mt-[33px]'>
                <h3 className='text-[30px] md:text-[32px]text-[30px] md:text-[32px] text-textColor mb-[20px]'>Financial Network</h3>
                <p className='text-textColor2 font-Grotesk text-[100%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies tristique mollis lacus ultrices feugiat curabitur tempus arcu, est. Risus mauris ultrices tellus ante purus tortor sem sit purus. Non tempus libero cras sed congue mi. Leo arcu sed maecenas aliquet ut quam.</p>
                <Link className='mt-[51px] bg-primaryColor text-textColorLight text-[15px] md:text-[16px] rounded-[10px] py-[15px] px-[30px] font-Grotesk flex justify-center w-[100%] md:w-auto' href="">Learn more</Link>
            </div>
            <Image src={finNetworkImage} alt='loan-image' className='shadow-3xl rounded-[20px] w-[300px] md:w-auto h-[300px] md:h-auto' />
        </div>
        <div className='flex items-center justify-center pt-[100px] pb-[35px]'>
            <div className='h-[300px] md:h-[404px] w-[100%] md:w-[920px] bg-primaryColor rounded-[20px] p-[30px] md:p-[60px]'>
                <h1 className='w-[60%] md:w-[302px] text-secondaryColor opacity-80 text-[28px] md:text-[32px] mb-[100px] md:mb-[149px]'>Create an Account In Simple Steps...</h1>
                <Link className='flex items-center gap-[15px] justify-center text-[15px] md:text-[16px] w-[100%] md:w-[199px] h-[50px] md:h-[65px] rounded-[10px] bg-[#D2E6F3] text-primaryColor py-[15px] px-[30px] font-Grotesk' href="/CreateAccount">Get started <ArrowForwardIcon /></Link>
            </div>
        </div>
        <div className='h-auto md:h-[483px] px-[20px] bg-[#D2E6F3] flex flex-col items-start md:items-center justify-center py-[30px] md:py-[85px]'>
            <h1 className='w-[80%] md:w-[404px] h-[124px] text-textColor text-[32px] mb:text-[48px] mb-[23px] md:mb-[29px]'>Keep Up with Current Events...</h1>
            <p className='font-Grotesk w-[100%] md:w-[431px] h-[52px] text-textColor2 text-center mb-[53px]'>Get constant updates, commentary, and knowledge on the news that matters most Right in your inbox</p>
            <div className='flex flex-col md:flex md:flex-row items-start md:items-center justify-center gap-[20px] md:gap-[30px] font-Grotesk w-[100%]'>
                <input type="text" name="" placeholder='Enter your email address' className='flex justify-center items-center px-[10px] placeholder:pl-[25%] focus:bg-secondaryColor focus:outline-none h-[60px] md:h-[65px] w-[100%] md:w-[419px] bg-[transparent] text-textColor2 border border-1 border-textColor2 rounded-[10px]' />
                <Link className='px-[30px] py-[15px] h-[60px] md:h-[65px] w-[100%] md:w-auto flex items-center justify-center gap-[15px] bg-gradient-to-r from-primaryColor to-primaryColor2 text-secondaryColor rounded-[10px]' href="">Stay up to date <ArrowForwardIcon /></Link>
            </div>
        </div>
        <div className='flex flex-col md:flex md:flex-row justify-center items-start gap-[50px] md:gap-[30px] px-[20px] md:px-[166px] py-[70px]'>
            <div className='flex flex-col w-[100%] md:w-[349px] h-auto md:h-[760px] pb-[40px] md:pb-0 rounded-[10px] bg-[#4396CE]'>
                <Image src={moneyPic} alt='dollars' className='h-[300px] md:h-[311px] w-[100%] object-cover rounded-[10px]' />
                <div className='flex flex-col px-[30px] mt-[40px] text-secondaryColor opacity-80'>
                    <h3 className='text-[24px] md:text-[27px] mb-[15px]'>Spend money wisely</h3>
                    <p className='font-Grotesk mb-[59px] text-[100%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum diam, turpis sed vulputate et, donec est eget gravida. Pellentesque nulla interdum tristique massa praesent. Felis, senectus pellentesque cursus ultrices. Ut curabitur et eu cursus habitant lectus egestas in.</p>
                    <Link className='flex items-center justify-center gap-[15px] w-[100%] h-[65px] rounded-[10px] bg-[#D2E6F3] text-primaryColor py-[15px] px-[30px] font-Grotesk' href="">Read more<ArrowForwardIcon /></Link>
                </div>
            </div>
            <div className='flex flex-col w-[100%] md:w-[349px] h-auto md:h-[760px] pb-[40px] md:pb-0 rounded-[10px] bg-[#4396CE]'>
                <Image src={moneyPic} alt='dollars' className='h-[300px] md:h-[311px] w-[100%] object-cover rounded-[10px]' />
                <div className='flex flex-col px-[30px] mt-[40px] text-secondaryColor opacity-80'>
                    <h3 className='text-[24px] md:text-[27px] mb-[15px]'>Spend money wisely</h3>
                    <p className='font-Grotesk mb-[59px] text-[100%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum diam, turpis sed vulputate et, donec est eget gravida. Pellentesque nulla interdum tristique massa praesent. Felis, senectus pellentesque cursus ultrices. Ut curabitur et eu cursus habitant lectus egestas in.</p>
                    <Link className='flex items-center justify-center gap-[15px] w-[100%] h-[65px] rounded-[10px] bg-[#D2E6F3] text-primaryColor py-[15px] px-[30px] font-Grotesk' href="">Read more<ArrowForwardIcon /></Link>
                </div>
            </div>
            <div className='flex flex-col w-[100%] md:w-[349px] h-auto md:h-[760px] pb-[40px] md:pb-0 rounded-[10px] bg-[#4396CE]'>
                <Image src={moneyPic} alt='dollars' className='h-[300px] md:h-[311px] w-[100%] object-cover rounded-[10px]' />
                <div className='flex flex-col px-[30px] mt-[40px] text-secondaryColor opacity-80'>
                    <h3 className='text-[24px] md:text-[27px] mb-[15px]'>Spend money wisely</h3>
                    <p className='font-Grotesk mb-[59px] text-[100%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum diam, turpis sed vulputate et, donec est eget gravida. Pellentesque nulla interdum tristique massa praesent. Felis, senectus pellentesque cursus ultrices. Ut curabitur et eu cursus habitant lectus egestas in.</p>
                    <Link className='flex items-center justify-center gap-[15px] w-[100%] h-[65px] rounded-[10px] bg-[#D2E6F3] text-primaryColor py-[15px] px-[30px] font-Grotesk' href="">Read more<ArrowForwardIcon /></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Empower

