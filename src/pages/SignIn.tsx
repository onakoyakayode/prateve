import React, {useState} from 'react'
import styles from '../styles/overall.module.css'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import GoogleIcon from '../Icon/google.svg'
import Image from 'next/image';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import emailIcon from '../Icon/email.svg'
import successIcon from '../Icon/Group.svg'
import Otp from '../components/pages/HomePage/OTP/Otp';

const SignIn = () => {

    const [successMsg, setSuccessMsg] = useState(false)
    const [sendEmail, setSendEmail] = useState(false)

    const [resendCode, setResendCode] = useState(false)

    const handleSendCode = () => {
      setResendCode(!resendCode)
      setSendEmail(false)
    }

    const handleSuccessMsg = () => {
      setSuccessMsg(!successMsg)
    }

    const handleSendEmail = () => {
      setSendEmail(!sendEmail)
      setResendCode(true)
    }

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('')
    const [showPassword, setShowPassword] = useState(false);

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [popup, setPopup] = useState(false)

    const handlePopup = () => {
      setPopup(!popup)
      setSendEmail(true)
    }

    const [confirmation, setConfirmation] = useState(true)

    const handleConfirmation = () => {
      setConfirmation(!confirmation)
      setResendCode(false)
      setSendEmail(false)
    }

  return (
    <div className={`${styles.signIn} min-h-[100vh] h-[100%] w-[100%] py-[75px] md:py-[150px] px-[20px] md:px-[140px] flex flex-col md:flex md:flex-row items-start md:items-center gap-[50px] md:gap-0 justify-between relative`}>
    <div className='flex flex-col items-start'>
      <h1 className='text-textColorLight w-[100%] md:w-[592px] text-[40px] md:text-[64px] leading-[50px] md:leading-[70px] mb-[30px] md:mb-[50px]'>Your ideal life starts here...</h1>
    </div>
    <div className='w-[100%] md:w-[500px] h-auto md:h-[674px] bg-secondaryColor text-textColor2 rounded-[20px] p-[20px] md:p-[30px]'>
    <>
   {confirmation ? 
   <>
      <div className='h-[26px] flex items-center justify-between mb-[54px] font-Grotesk'>
        <Link href="/InputDetails" className='flex gap-[3px] md:gap-[10px] items-center text-[13px] md:text-[15px]'>
          <KeyboardArrowLeftIcon />
          Back
        </Link>
        <p className='text-[12px] flex items-center gap-[4px] md:gap-[7px] font-normal'>Already have an account? <Link href="/CreateAccount" className='text-primaryColor'>Sign Up</Link></p>
      </div>
        <div className='px-[0] md:px-[20px]'>
          <h1 className='text-[#4A515C] text-[24px] md:text-[32px] mb-[15px]'>Welcome back!</h1>
          <p className='text-[13px] md:text-[14px] text-textColor2 font-Grotesk mb-[30px]'>Please enter your login credentials to continue.</p>
          <form action="" className='flex flex-col items-start w-[full]'>
            <div className='relative flex flex-col items-start gap-[7px] font-Grotesk mb-[18px] w-[100%]'>
                <label className='text-[15px] md:text-[16px] text-textColor2 font-bold' htmlFor="password">Email</label>
                <input type="email" 
                    id="email" 
                    value={email} 
                    onChange={handleEmail} 
                    placeholder='Enter email address' 
                    className='h-[50px] w-[100%] text-[15px] px-[7px] bg-secondaryColor opacity-80 rounded-[5px] border border-textColor2 placeholder:pl-[19px] focus:outline-none' 
                />
            </div>
            <div className='relative flex flex-col items-start gap-[7px] font-Grotesk mb-[30px] w-[100%]'>
                <label className='text-[15px] md:text-[16px] text-textColor2 font-bold' htmlFor="password">Password</label>
                <input type={showPassword ? "text" :"password"} 
                    id="password" 
                    value={password} 
                    onChange={handlePasswordChange} 
                    placeholder='Enter password' 
                    className='h-[50px] w-[100%] text-[14px] px-[7px] bg-secondaryColor opacity-80 rounded-[5px] border border-textColor2 placeholder:pl-[19px] focus:outline-none' 
                />
                <div onClick={handleTogglePasswordVisibility} className='absolute top-[55%] right-[20px] text-textColor2 scale-75 md:scale-100'>
                    {showPassword ? <VisibilityOffOutlinedIcon /> : <RemoveRedEyeOutlinedIcon />}
                </div>
            </div>
            <div className='flex items-center justify-between mb-[30px] font-Grotesk w-[100%]'>
                <div className='flex items-center gap-[4px] md:gap-[10px]'>
                  <input type="checkbox" name="" id="" />
                  <p className='text-[12px] text-textColor2'>Remember me</p>
                </div>
                <p onClick={() => (setPopup(true))} className='text-[14px] text-primaryColor underline cursor-pointer'>Forgot Password</p>
            </div>
          </form>
          <p onClick={handleConfirmation} className='px-[30px] py-[15px] font-Grotesk flex items-center justify-center gap-[15px] text-[15px] md:text-[18px] bg-gradient-to-r from-primaryColor to-primaryColor2 text-secondaryColor rounded-[10px] cursor-pointer'>Log In <ArrowForwardIcon /></p>
          <div className='flex items-center justify-center gap-[25px] font-Grotesk mt-[15px] mb-[15px]'>
            <div className='w-[100%] md:w-[120px] h-[1px] bg-textColor2'></div>
            <p className='text-textColor2 text-[15px] md:text-[16px]'>Or</p>
            <div className='w-[100%] md:w-[120px] h-[1px] bg-textColor2'></div>
          </div>
          <Link href="" className='flex items-center justify-center font-Grotesk gap-[43px] h-[50px] w-[100%] rounded-[10px] text-[15px] md:text-[18px] border border-textColor2'>
            <Image src={GoogleIcon} alt='google' className=''/>
            Sign In with Google
          </Link>
        </div> 
        </>   
    :
    <>
        <div className='h-[26px] flex items-center justify-between mb-[54px] font-Grotesk'>
          <Link href="/InputDetails" className='flex gap-[10px] items-center'>
            <KeyboardArrowLeftIcon />
            Back
          </Link>
        </div>
        <div className='px-[0px] md:px-[20px] flex flex-col items-center'>
          <h1 className='text-[#4A515C] text-[20px] md:text-[24px] mb-[29px]'>Enter confirmation Code</h1>
          <p className='text-[14px] text-textColor2 font-Grotesk mb-[59px] w-[273px] text-center'>Please check your email and enter the confirmation code that was sent to you. </p>

          <Otp />

          <Link href="/HomeDashboard" className='px-[30px] py-[15px] w-[100%] font-Grotesk flex items-center justify-center gap-[15px] mt-[60px] text-[18px] bg-gradient-to-r from-primaryColor to-primaryColor2 text-secondaryColor rounded-[10px] cursor-pointer'>Continue <ArrowForwardIcon /></Link>
          <p onClick={handleSendCode} className='text-primaryColor font-Grotesk mt-[40px] self-end text-[14px] cursor-pointer'>Didn&apos;t get code? Resend code</p>
        </div>
      </>
    }
    </>
    </div>
      <>
        <div className={popup ? `fixed left-0 top-0 w-[100%] h-[100%] bg-textColor/10 `: "none"}>
          <div className={popup ? `w-[90%] md:w-[420px] h-auto md:h-[390px] bg-secondaryColor rounded-[20px] px-[30px] py-[30px] md:py-[63px] fixed left-[5%] md:left-[55%] top-[25%]  ease-in-out duration-500` : "rounded-[20px] px-[30px] py-[30px] md:py-[63px] left-[200%] w-[90%] md:w-[420px] h-auto md:h-[390px] top-[35%] bg-secondaryColor fixed"}>
            <CancelOutlinedIcon onClick={handlePopup} className='absolute right-[20px] top-[20px] text-negativeAlert cursor-pointer'/>
            <div className='flex flex-col items-center'>
              <Image src={emailIcon} alt='emailIcon' className='mb-[30px]'/>
              <div className='text-textColor2 text-[14px mb-[30px] flex flex-col items-center'>
                <h3 className='text-center mb-[15px] text-[32px] text-[#4A515C]'>Recover via email</h3>
                <p className='text-[12px] font-Grotesk mb-[10px]'>We will send a password recovery code to</p>
                <p className='text-[12px] font-Grotesk'>{email}</p>
              </div>
            </div>
            <p onClick={handlePopup} className='cursor-pointer px-[30px] py-[15px] flex items-center justify-center gap-[15px] text-[17px] font-Grotesk mb-[53px] bg-gradient-to-r from-primaryColor to-primaryColor2 text-secondaryColor/80 rounded-[10px]'>Send</p>  
          </div>
        </div>
      </>
      <>
          <div className={sendEmail ? `fixed left-0 top-0 w-[100%] h-[100%] bg-textColor/10 `: ""}>
          <div className={sendEmail ? 'w-[90%] md:w-[420px] h-[390px] bg-secondaryColor rounded-[20px] z-40 px-[30px] py-[63px] absolute left-[5%] md:left-[55%] top-[25%] ease-linear duration-500' : "absolute bg-secondaryColor top-[35%] left-[200%] ease-linear duration-200"}>
          <CancelOutlinedIcon onClick={handleSendEmail} className='absolute right-[20px] top-[20px] text-negativeAlert cursor-pointer'/>
              <div className='flex flex-col items-center'>
                  <Image src={successIcon} alt="success" className='mb-[30px]' />
                  <h2 className='text-[#4A515C] text-[28px] md:text-[32px] mb-[15px]'>Sent</h2>
                  <p className='text-[14px] text-textColor2 font-Grotesk mb-[30px] w-[200px] text-center'>A code has been sent to your email, please confirm.</p>
        
              </div>
              <Link className='px-[30px] py-[15px] flex items-center justify-center gap-[15px] text-[15px] md:text-[17px] font-Grotesk mb-[20px] bg-gradient-to-r from-primaryColor to-primaryColor2 text-secondaryColor/80 rounded-[10px]' href="/Dashboard">Yeah, Got it!</Link> 
              <p onClick={handleSendCode} className='text-negativeAlert font-Grotesk text-[12px] text-center cursor-pointer'>Nah, I Didn&apos;t Get The Code</p> 
          </div>
          </div>
        </>
        <>
        <div className={resendCode ? `fixed left-0 top-0 w-[100%] h-[100%] bg-textColor/10` : ""}>
      <div className={resendCode ? 'w-[90%] md:w-[420px] h-[390px] bg-secondaryColor rounded-[20px] px-[30px] py-[63px] absolute left-[5%] md:left-[55%] top-[35%] ease-linear duration-500' : "absolute bg-secondaryColor top-[35%] left-[200%]"}>
        <CancelOutlinedIcon onClick={handleSendCode} className='absolute right-[20px] top-[20px] text-negativeAlert cursor-pointer'/>
        <div className='font-Grotesk'>
          <div className='text-textColor2 text-[14px mb-[30px]'>
            <p className='text-center mb-[20px]'>Why you&apos;re not getting the code:</p>
            <ul>
              <li className='list-disc text-center list-inside'>Your email address is incorrect.</li>
              <li className='list-disc text-center list-inside'>Check your spam folder.</li>
            </ul>
          </div>
          <div className='flex flex-col gap-[5px] items-start mb-[30px]'>
            <label htmlFor="" className='font-bold text-textColor2 text-[12.69px]'>Re-enter email address</label>
            <input type="email" name="" placeholder='Enter email address' className='h-[39.67px] w-[100%] border text-textColor2 pl-[5px] text-[14px] border-textColor2 rounded-[4px] placeholder:pl-[15px] placeholder:text-[11px] focus:outline-none' />
          </div>
        </div>
        <p onClick={handleConfirmation} className='px-[30px] py-[15px] flex items-center justify-center gap-[15px] text-[17px] font-Grotesk mb-[53px] bg-gradient-to-r from-primaryColor to-primaryColor2 text-secondaryColor/80 rounded-[10px]'>Resend Code</p>  
      </div>
    </div>
        </>
      
  </div>
  )
}

export default SignIn


