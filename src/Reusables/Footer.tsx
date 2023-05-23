import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import prateveLogo from '../images/prateveLogoFoooter.svg'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer className='h-auto md:h-[377px] bg-primaryColor text-textColorLight py-[50px] md:py-[75px] px-[20px] md:px-[220px] font-Grotesk flex flex-col md:flex md:flex-row items-center justify-between gap-[30px] md:gap-0'>
        <div className='flex items-start gap-[75px] w-[100%] md:w-auto'>
            <div className='w-[100%]'>
                <h2 className='mb-[30px] text-[18px] md:text-[20px]'>Company</h2>
                <ul className='flex flex-col gap-[15px] opacity-80 text-[13px] md:text-[14px]'>
                    <Link href="">About Us</Link>
                    <Link href="">Contact Us</Link>
                    <Link href="">Get Help</Link>
                    <Link href="">FAQ</Link>
                </ul>
            </div>
            <div className='w-[100%]'>
                <h2 className='mb-[30px] text-[18px] md:text-[20px]'>Legal</h2>
                <ul className='flex flex-col gap-[15px] opacity-80 text-[13px] md:text-[14px]'>
                    <Link href="">Security</Link>
                    <Link href="">Privacy</Link>
                    <Link href="">Terms of Service</Link>
                    <Link href="">Agreement & Disclosures</Link>
                </ul>
            </div>
            <div className='w-[100%]'>
                <h2 className='mb-[30px] text-[18px] md:text-[20px]'>Legal</h2>
                <ul className='flex flex-col gap-[15px] opacity-80 text-[13px] md:text-[14px]'>
                    <Link href="">Privacy Terms</Link>
                    <Link href="">Terms of Service</Link>
                    <Link href="">Agreement & Disclosures</Link>
                </ul>
            </div>
        </div>
        <div className='flex flex-col items-center md:items-end'>
            <Image src={prateveLogo} alt='prateve' className='mb-[30px]' />
            <p className='text-[14px] opacity-80 w-[100%] md:w-[209px] mb-[20px]'>No. 24, Oluwatimilehin Avenue, Grace Close, Ikoyi, Lagos State.</p>
            <Link href='mailto:prateveco@yahoo.co' className='text-[14px] font-semibold opacity-80 mb-[35px] underline'>prateveco@yahoo.co</Link>
            <ul className='flex gap-[15px] items-center opacity-80'>
                <Link href=""><FacebookIcon /></Link>
                <Link href=""><TwitterIcon /></Link>
                <Link href=""><InstagramIcon /></Link>
            </ul>
        </div>
    </footer>
  )
}

export default Footer
