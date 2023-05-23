import React, { useState } from 'react'
import styles from '../styles/overall.module.css'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import Image from 'next/image';
import successIcon from '../Icon/Group.svg'

const CreatePassword: React.FC = () => {

    const [successMsg, setSuccessMsg] = useState(false)

    const handleSuccessMsg = () => {
      setSuccessMsg(!successMsg)
    }

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    
    const handleToggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };


  return (
    <div className={`${styles.createPassword} min-h-[100vh] h-[100%] py-[75px] md:py-[150px] px-[20px] md:px-[140px] flex flex-col md:flex-row items-start md:items-center gap-[50px] md:gap-[0px] justify-between relative`}>
      <div className='flex flex-col items-start'>
        <h1 className='text-textColorLight w-[100%] md:w-[592px] text-[40px] md:text-[64px] mb-[30px] md:mb-[60px]'>We make Financial Freedom easy!</h1>
        <div className='flex gap-[10px] items-center'>
          <div className='w-[10px] md:w-[13.6px] h-[10px] md:h-[13.6px] bg-[grey] rounded-[100%]'></div>
          <div className='w-[10px] md:w-[13.6px] h-[10px] md:h-[13.6px] bg-[grey] rounded-[100%]'></div>
          <div className='w-[10px] md:w-[13.6px] h-[10px] md:h-[13.6px] bg-secondaryColor rounded-[100%]'></div>
        </div>
      </div>
      <div className='w-[100%] md:w-[500px] h-auto md:h-[674px] bg-secondaryColor text-textColor2 rounded-[20px] px-[20px] md:px-[30px] py-[30px]'>
        <div className='h-[26px] flex items-center justify-between mb-[40px] md:mb-[54px] font-Grotesk'>
          <Link href="/InputDetails" className='flex gap-[10px] items-center'>
            <KeyboardArrowLeftIcon />
            Back
          </Link>
          <p className='text-[13px] md:text-[12px] flex items-center gap-[7px] font-normal'>Already have an account? <Link href="" className='text-primaryColor'>Sign In</Link></p>
        </div>
        <div className='px-[0px] md:px-[20px]'>
          <h1 className='text-[#4A515C] text-[24px] md:text-[32px] mb-[33px]'>Create Password!</h1>
          <form action="" className='flex flex-col items-start w-[full]'>
            <div className='relative flex flex-col items-start gap-[7px] font-Grotesk mb-[30px] w-[100%]'>
                <label className='text-[15px] md:text-[16px] text-textColor2 font-bold' htmlFor="password">Password</label>
                <input type={showPassword ? "text" :"password"} 
                    id="password" 
                    value={password} 
                    onChange={handlePasswordChange} 
                    placeholder='Enter password' 
                    className='h-[50px] w-[100%] text-[14px] px-[7px] bg-secondaryColor opacity-80 rounded-[5px] border border-textColor2 placeholder:pl-[19px] focus:outline-none' 
                />
                <div onClick={handleTogglePasswordVisibility} className='absolute top-[55%] right-[20px] text-textColor2 md:scale-100 scale-75'>
                    {showPassword ? <VisibilityOffOutlinedIcon /> : <RemoveRedEyeOutlinedIcon />}
                </div>
                
            </div>
            <div className='relative flex flex-col items-start gap-[7px] font-Grotesk mb-[47px] w-[100%]'>
                <label className='text-[16px] font-bold' htmlFor="confrimPassword">Confirm Password</label>
                <input type={showConfirmPassword ? "text" : "password"} 
                    id="password" 
                    value={confirmPassword} 
                    onChange={handleConfirmPasswordChange} 
                    placeholder='Re-enter password' 
                    className='h-[50px] w-[100%] text-[14px] px-[7px] bg-secondaryColor opacity-80 rounded-[5px] border border-textColor2 placeholder:pl-[19px] focus:outline-none' 
                />
                <div onClick={handleToggleConfirmPasswordVisibility} className='absolute top-[55%] right-[20px] text-textColor2 scale-75 md:scale-100'>
                    {showConfirmPassword ? <VisibilityOffOutlinedIcon /> : <RemoveRedEyeOutlinedIcon />}
                </div>
            </div>
            <div className='flex items-center gap-[10px] mb-[30px] font-Grotesk'>
                <input type="checkbox" name="" id="" />
                <p className='text-[12.5px] md:text-[12px]'>I agree to the terms and conditions of use</p>
            </div>
          </form>
          <p onClick={handleSuccessMsg} className='px-[30px] py-[15px] font-Grotesk flex items-center justify-center gap-[15px] text-[15px] md:text-[18px] bg-gradient-to-r from-primaryColor to-primaryColor2 text-secondaryColor rounded-[10px] cursor-pointer'>Create an account <ArrowForwardIcon /></p>
        </div>
        </div>
    <>  
      <div onClick={handleSuccessMsg} className={successMsg ? `absolute left-0 md:left-0 top-[0%] md:top-0 w-[100%] md:w-[100%] m-h-[100vh] h-[100%] bg-textColor/50 ` : "w-0"}>
          <div className={successMsg ? " w-[90%] md:w-[420px] h-auto md:h-[390px] bg-secondaryColor rounded-[20px] px-[20px] md:px-[30px] py-[40px] md:py-[63px] absolute left-[5%] md:left-[58%] top-[50%] md:top-[35%] ease-in-out duration-500" : "absolute left-[200%] md:left-[205%] top-[50%] px-[20px] md:px-[30px] py-[40px] md:py-[63px] rounded-[20px] bg-secondaryColor  w-[90%]"}>
              <div className='flex flex-col items-center'>
                  <Image src={successIcon} alt="" className='mb-[34px]' />
                  <h2 className='text-[#4A515C] text-[32px] mb-[15px]'>Successful</h2>
                  <p className='text-[14px] text-textColor2 font-Grotesk mb-[30px]'>Account successfully created.</p>
        
              </div>
              <Link className='px-[30px] py-[15px] flex items-center justify-center gap-[15px] text-[16px] md:text-[17px] font-Grotesk mb-[30px] md:mb-[53px] bg-gradient-to-r from-primaryColor to-primaryColor2 text-secondaryColor/80 rounded-[10px]' href="/SignIn">Continue</Link>  
          </div>
      </div>
    </>
    </div>
  )
}

export default CreatePassword

