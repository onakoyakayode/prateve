import React, { useState, useEffect } from 'react'
import Main from './Dashboard/Main'
import Button from '../Reusables/Button'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MonthsChart from '../components/Charts/Months/MonthsChart';
import Dropdown from '../Reusables/Dropdown';
import DoughnutChart from '../components/Charts/Months/DoughnutChart';
import TransactionHistory from '../components/TransactionHistory';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import profilePic from '../images/black-man-black-suit-standing-cafe.png'
import Image from 'next/image';
import FinancialNetwork from '../components/FinancialNetwork/FinancialNetwork';
import Link from 'next/link';
import Brightness1RoundedIcon from '@mui/icons-material/Brightness1Rounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import RefreshIcon from '@mui/icons-material/Refresh';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const NewUserDashboard:React.FC = () => {

    const [guarantorLists, setGuarantorLists] = useState<string[]>(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']);
    const addItem = () => {
        const newItem = `Item ${guarantorLists.length + 1}`;
        setGuarantorLists(prevItems => [...prevItems, newItem]);
        console.log('Updated Array:', guarantorLists);
      };
    
      const removeItem = (index: number) => {
        if (index >= 0 && index < guarantorLists.length) {
          const updatedItems = [...guarantorLists];
          updatedItems.pop();
          setGuarantorLists(updatedItems);
          console.log('Updated Array:', guarantorLists);
        } else {
          console.log('Invalid index');
        }
    };

    useEffect(() => {
        console.log('Updated Array:', guarantorLists);
    }, [guarantorLists]);

    const [isInputFocused, setIsInputFocused] = useState(false);
    const [inputAmt, setInputAmt] = useState(false)
    const [loanOpt, setLoanOpt] = useState(false)
    const [repayLoan, setRepayLoan] = useState(false)

    const handleRepayLoan = () => {
        setRepayLoan(!repayLoan)
    }


    const handleLoanOpt = () => {
        setLoanOpt(!loanOpt)
    }
    
    const handleInputAmt = () => {
        setInputAmt(!inputAmt)
    }

    const handleInputFocus = () => {
        setIsInputFocused(true);
    };

    const handleInputBlur = () => {
        setIsInputFocused(false);
    };

  return (
    <Main>
        <div className='flex justify-between w-[100%] min-h-screen h-[100%] pl-[25px] left-[-17%] relative'>
            <div className='w-[60%] pr-[25px] py-[50px] relative'>
                <h1 className='mb-[49px] text-[24px]'>Welcome Back 🙂, Aniya.</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className="w-[100%] h-auto p-[40px] bg-[url('../images/savingsBg.png')] bg-cover bg-left-top bg-primaryColor rounded-[20px]">
                        <h3 className='text-[20px] text-textColorLight font-bold font-Grotesk mb-[16px]'>Savings</h3>
                        <h2 className='text-[32px] text-textColorLight mb-[48px]'>#0.00</h2>
                        {/* <p className='text-[14px] font-Grotesk font-bold text-[#D5D5D5] mb-[16px]'>Lien Amount $700.00</p> */}
                        <Button onClick={handleInputAmt} className={`h-[50px] w-[100%] text-[#0F4062] font-Grotesk bg-[#D2E6F3] flex justify-center items-center uppercase font-bold text-[16px] rounded-[10px]`}>Fund my Savings</Button>
                    </div>
                    <div className="w-[100%] h-auto p-[40px] bg-[url('../images/savingsBg.png')] relative bg-cover bg-left-top bg-[#D2E6F3] rounded-[20px]">
                        <div className='flex justify-between items-start text-textColor'>
                            <h3 className='text-[20px] font-bold font-Grotesk mb-[16px]'>Loan</h3>
                            <MoreVertIcon onClick={handleLoanOpt} className='cursor-pointer'/>
                        </div>
                        <div className={loanOpt ? 'w-[159px] h-[103px] absolute right-[4rem] top-[2rem] z-30 bg-secondaryColor rounded-[10px] flex flex-col gap-[15px] p-[20px] font-Grotesk ease-in-out duration-200 opacity-100' : 'absolute opacity-0'}>
                            <Link href='' className='text-[14px] flex items-center gap-[10px] hover:text-textColorLight hover:bg-textColor2'><FlashOnIcon /> Repay Loan</Link>
                            <Link href='' className='text-[14px] flex items-center gap-[10px] hover:text-textColorLight hover:bg-textColor2'><RefreshIcon />Take Loan</Link>
                        </div>
                        <h2 className='text-[32px] mb-[46px]'>#0.00</h2>
                        <Button onClick={handleRepayLoan} className={` h-[50px] w-[100%] text-[#0F4062] font-Grotesk bg-textColorLight flex justify-center items-center uppercase font-bold text-[16px] rounded-[10px]`}>Repay Loan</Button>
                    </div>
                </div>
                {/* New User Guidelines */}
                <div className='mt-[90px] flex flex-col items-center w-[100%]'>
                    <h4 className='text-[22px] text-textColor mb-[32px]'>Some guidelines to get you started.</h4>
                    <div className='h-[85px] bg-[#FAFAFA] rounded-[10px] flex items-center justify-center mb-[16px] w-[100%]'>
                        <p className='flex items-center gap-[8px] font-Grotesk'>1. Complete your Profile details.<Link href='' className='text-primaryColor'>Click here &gt;&gt;&gt;</Link></p>
                    </div>
                    <div className='h-[85px] bg-[#FAFAFA] rounded-[10px] flex items-center justify-center mb-[16px] w-[100%]'>
                        <p className='flex items-center gap-[8px] font-Grotesk'>2. Fund your Savings to take a Loan.<Link href='' className='text-primaryColor'>Click here &gt;&gt;&gt;</Link></p>
                    </div>
                    <div className='h-[85px] bg-[#FAFAFA] rounded-[10px] flex items-center justify-center mb-[16px] w-[100%]'>
                        <p className='flex items-center gap-[8px] font-Grotesk'>3. Create Financial Network.<Link href='' className='text-primaryColor'>Click here &gt;&gt;&gt;</Link></p>
                    </div>
                </div>
            </div>
            <div className='w-[23%] shadow-xl shadow-textColor2 py-[46px] h-screen fixed right-0 top-0 px-[25px] font-Grotesk'>
                <div className='flex items-center mb-[32px]'>
                    <div className='relative mr-[20px]'>
                        <input type="text" onFocus={handleInputFocus} onBlur={handleInputBlur} name="search" id="" className='h-[42px] py-[5px] px-[10px] text-[13px] bg-[#FAFAFA] rounded-[10px] placeholder:pl-[30px] focus:outline-[1px] focus:outline-textColor2/30' placeholder='Search...'/>
                        {!isInputFocused && <SearchIcon className='absolute left-[0.8rem] top-[0.5rem] focus:hidden text-textColor2a w-[25px] h-[25px]' />}
                    </div>
                    <div className='relative mr-[10px] w-6 h-6'>
                        <NotificationsOutlinedIcon className='relative w-[100%] h-[100%] object-cover'/>
                        <p className='w-[8px] h-[8px] bg-negativeAlert absolute top-[5px] left-[15px] rounded-full'></p>
                    </div>
                    <div>
                        <Image src={profilePic} alt="profile-picture" className="w-[40px] h-[40px] rounded-full" />
                    </div>
                </div>
                <div className='mb-[30px]'>
                    <div className='h-[160px] w-[100%] rounded-[15px] p-[20px] bg-[#4396CE] flex items-start gap-[15px] mb-[15px]'>
                        <ErrorOutlineIcon className='text-[#F49F0A] w-[24px] h-[24px] object-cover'/>
                        <div className='w-[234px] h-[108px] font-Grotesk text-textColorLight flex flex-col items-start'>
                            <h5 className='mb-[8px]'>Profile Incomplete</h5>
                            <p className='text-[12px] mb-[16px]'>Please visit your profile and verify your details to have full access to the features of Prateve.</p>
                            <p className='text-[10px]'>Today  09:50AM</p>
                        </div>
                        <CloseRoundedIcon className='text-textColorLight w-[24px] h-[24px] object-cover'/>
                    </div>
                    <div className='h-[160px] w-[100%] rounded-[15px] p-[20px] bg-[#4396CE] flex items-start gap-[15px] mb-[15px]'>
                        <ErrorOutlineIcon className='text-[#F49F0A] w-[24px] h-[24px] object-cover'/>
                        <div className='w-[234px] h-[108px] font-Grotesk text-textColorLight flex flex-col items-start'>
                            <h5 className='mb-[8px]'>Fund Savings</h5>
                            <p className='text-[12px] mb-[16px]'>Fund your savings to begin your journey to financial freedom with Prateve.</p>
                            <p className='text-[10px]'>Today  09:50AM</p>
                        </div>
                        <CloseRoundedIcon className='text-textColorLight w-[24px] h-[24px] object-cover'/>
                    </div>
                </div>
                <Link className='px-[30px] py-[15px] flex gap-[15px] bg-gradient-to-r from-primaryColor to-primaryColor2 text-secondaryColor rounded-[10px]' href="">CREATE FINANCIAL NETWORK</Link>
                {/* Upcoming Event */}
                <div className='mt-[30px] h-[187px] w-[100%] bg-primaryColor rounded-[20px] flex flex-col items-start justify-start p-[20px] text-textColorLight font-Grotesk'>
                    <h4 className='text-[14px] mb-[8px] self-center'>Upcoming Events</h4>
                    <div className='w-[100%] h-[1px] bg-secondaryColor mb-[10px]'></div>
                    <div className='flex items-center mb-[6px]'>
                        <Brightness1RoundedIcon className='w-[32px] h-[32px]'/>
                        <div className='flex flex-col gap-[8px]'>
                            <p className='text-[12px]'>Upcoming Products</p>
                            <p className='text-[12px]'>Upcoming Products</p>
                        </div>
                    </div>
                    <div className='w-[100%] h-[1px] bg-secondaryColor mb-[10px]'></div>
                    <div className='flex items-center'>
                        <Brightness1RoundedIcon className='w-[32px] h-[32px]'/>
                        <div className='flex flex-col gap-[8px]'>
                            <p className='text-[12px]'>Upcoming Products</p>
                            <p className='text-[12px]'>Upcoming Products</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Input Amount Savings*/}
            <div className={inputAmt ? 'bg-textColor/70 w-[60%] top-[100px] h-[70vh] rounded-[10px] absolute z-30 flex items-center left-0 ease-in-out duration-500' : "absolute left-[300%]"}>
                <div className='w-[369px] h-[282px] rounded-[10px] bg-secondaryColor relative left-[30%] py-[50px] px-[28px] font-Grotesk'>
                    <CloseRoundedIcon onClick={handleInputAmt} className='top-[15px] right-[12px] absolute text-negativeAlert cursor-pointer'/>
                    <div>
                        <h3 className='text-[14px] text-textColor font-bold mb-[15px]'>Input Amount</h3>
                        <input type="number" name="" id="" placeholder='Amount' className='h-[58px] w-[100%] rounded-[10px] px-[10px] mb-[30px] bg-[#FAFAFA] placeholder:pl-[10px] focus:outline-textColor2/30 placeholder:text-[12px] placeholder:text-textColor'/>
                        <button className='px-[30px] py-[15px] flex items-center justify-center w-[100%] cursor-pointer gap-[15px] bg-gradient-to-r from-primaryColor to-primaryColor2 text-secondaryColor uppercase rounded-[10px]'>Make Payment</button>
                    </div>
                </div>
            </div>
            {/* Outstanding Loan Amount */}
            <div className={ repayLoan ?'bg-textColor/70 w-[100%] top-[0px] h-[100vh] rounded-[10px] absolute z-30 flex items-center left-0 ease-in-out duration-500' : 'absolute left-[300%]'}>
                <div className='h-[584px] w-[437px] bg-secondaryColor rounded-[10px] left-[20%] relative py-[50px] px-[30px] font-Grotesk'>
                    <CloseRoundedIcon onClick={handleRepayLoan} className='top-[20px] right-[13px] absolute text-negativeAlert cursor-pointer'/>
                    <form className='mt-[20px]'>
                        <label className='text-[14px] font-bold'>Input Amount</label>
                        <input type="number" name="" id="" placeholder='Amount' className='h-[58px] w-[100%] rounded-[10px] px-[10px] mt-[15px] mb-[25px] bg-[#FAFAFA] placeholder:pl-[10px] focus:outline-textColor2/30 placeholder:text-[12px] placeholder:text-textColor'/>
                    </form>
                    <div>
                        <h3 className='text-[14px] font-bold mb-[15px]'>Guarantor username</h3>
                        <div className='flex flex-wrap gap-[12px]'>
                        <>
                            {/* {guarantorLists.map((guarantorList, index) => {
                                <div className='w-[100%] h-[76px] bg-primaryColor'>
                                    <div key={index} className='bg-textColor text-primaryColor' >
                                        <span>{guarantorList}</span>
                                        <CloseRoundedIcon onClick={() => removeItem(0)}/>
                                    </div>
                                </div>
                            })} */}
                            {guarantorLists}
                            <CloseRoundedIcon onClick={() => removeItem(0)}/>
                        </>
                         </div>
                        <button onClick={addItem}>Add Item</button>
                    </div>
                    <form className='mt-[25px] mb-[50px]'>
                        <label className='text-[14px] font-bold'>Payment Duration</label>
                        <input type="number" name="" id="" placeholder='Duration' className='h-[58px] w-[100%] rounded-[10px] px-[10px] mt-[15px] mb-[25px] bg-[#FAFAFA] placeholder:pl-[10px] focus:outline-textColor2/30 placeholder:text-[12px] placeholder:text-textColor'/>
                    </form>
                    <Link className='px-[30px] py-[15px] flex items-center justify-center gap-[15px] bg-gradient-to-r from-primaryColor to-primaryColor2 text-secondaryColor rounded-[10px] uppercase' href="">REQUEST LOAN</Link>
                </div>
            </div>
        </div>
    </Main>
  )
}

export default NewUserDashboard
