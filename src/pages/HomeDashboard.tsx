import React, { useState, useEffect } from 'react'
import Main from '../components/Dashboard/Main'
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
import NewUserDashboard from '../components/NewUserDashboard';

const HomeDashboard: React.FC = () => {
    
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

    // TransactionHistory height state management
    const [isExpandable, setIsExpandable] = useState(false)

    // Search input icon disappear 
    const [isInputFocused, setIsInputFocused] = useState(false);

    //Input amount popup
    const [inputAmt, setInputAmt] = useState(false)

    //Input Loan amt popup
    const [loanOpt, setLoanOpt] = useState(false)

    //Repay loan pop up
    const [repayLoan, setRepayLoan] = useState(false);

    // newUSer Authentication
    const [newUser, setNewUser] = useState(false)

    //Repay loan pop up
    const handleRepayLoan = () => {
        setRepayLoan(!repayLoan)
    }

    //Input Loan amt popup
    const handleLoanOpt = () => {
        setLoanOpt(!loanOpt)
    }
    //Input amount popup
    const handleInputAmt = () => {
        setInputAmt(!inputAmt)
    }

     // Search input icon disappear 
    const handleInputFocus = () => {
        setIsInputFocused(true);
    };
    // Search input icon disappear 
    const handleInputBlur = () => {
        setIsInputFocused(false);
    };

    // TransactionHistory height state management
    const toggleHeight = () => {
        setIsExpandable(!isExpandable);
    };
    

    const options = ['Days', 'Weeks', 'Months'];
  return (
    <Main>
        { 
        newUser ?
        <>
        <NewUserDashboard />
        </>
        :
        <>
        <div className='flex flex-col items-start md:flex justify-between w-[100%] min-h-screen h-[100%] pl-[15px] md:pl-[25px] relative'>
            <div className='w-[100%] md:w-[60%] pr-[10px] md:pr-[25px] py-[30px] md:py-[50px] relative'>
                <h1 className='mb-[49px] text-[20px] md:text-[24px]'>Welcome Back 🙂, Aniya.</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className="w-[90%] md:w-[100%] h-auto p-[30px] md:p-[40px] bg-[url('../images/savingsBg.png')] bg-cover bg-left-top bg-primaryColor rounded-[20px]">
                        <h3 className='text-[18px] md:text-[20px] text-textColorLight font-bold font-Grotesk mb-[16px]'>Savings</h3>
                        <h2 className='text-[24px] md:text-[32px] text-textColorLight mb-[8px]'>#2,000.00</h2>
                        <p className='text-[13px] md:text-[14px] font-Grotesk font-bold text-[#D5D5D5] mb-[16px]'>Lien Amount $700.00</p>
                        <Button onClick={handleInputAmt} className={`h-[50px] w-[100%] text-[#0F4062] font-Grotesk bg-[#D2E6F3] flex justify-center items-center uppercase font-bold text-[15px] md:text-[16px] rounded-[10px]`}>Fund my Savings</Button>
                    </div>
                    <div className="w-[90%] md:w-[100%] h-auto p-[30px] md:p-[40px] bg-[url('../images/savingsBg.png')] relative bg-cover bg-left-top bg-[#D2E6F3] rounded-[20px]">
                        <div className='flex justify-between items-start text-textColor'>
                            <h3 className='text-[18px] md:text-[20px] font-bold font-Grotesk mb-[16px]'>Outstanding Loan</h3>
                            <MoreVertIcon onClick={handleLoanOpt} className='cursor-pointer'/>
                        </div>
                        <div className={loanOpt ? 'w-[145px] md:w-[159px] h-[100px] md:h-[103px] absolute right-[3rem] md:right-[4rem] top-[2rem] z-30 bg-secondaryColor rounded-[10px] flex flex-col gap-[15px] p-[20px] font-Grotesk ease-in-out duration-200 opacity-100' : 'absolute opacity-0'}>
                            <Link href='' className='text-[13px] md:text-[14px] flex items-center gap-[6px] md:gap-[10px]'><FlashOnIcon /> Repay Loan</Link>
                            <Link href='' className='text-[13px] md:text-[14px] flex items-center gap-[6px] md:gap-[10px]'><RefreshIcon />Take Loan</Link>
                        </div>
                        <h2 className='text-[24px] md:text-[32px] mb-[46px]'># 1,300.00</h2>
                        <Button onClick={handleRepayLoan} className={` h-[50px] w-[100%] text-[#0F4062] font-Grotesk bg-textColorLight flex justify-center items-center uppercase font-bold text-[15px] md:text-[16px] rounded-[10px]`}>Repay Loan</Button>
                    </div>
                </div>
                <div className='w-[90%] md:w-[100%] h-[1px] bg-primaryColor/30 my-[25px]'></div>
                <div className='h-auto md:h-[300px] w-[90%] flex flex-col md:flex md:items-center md:justify-center flex-wrap gap-[20px] md:gap-[26px] items-start font-Grotesk '>
                    <div className='w-[100%] md:w-[70%]'>
                        <h2 className='text-[16px] md:text-[18px] font-bold'>Saving Activity</h2>
                        <div className='md:col-span-3 w-[100%] h-[100%] flex flex-col gap-0 md:gap-9 relative'>
                            <h1 className='self-end z-20 text-primaryColor absolute cursor-pointer h-auto bg-textColorLight p-[5px] rounded-sm top-0 right-10 text-[14px]'><Dropdown options={options}/></h1>
                            <div className='mt-[40px] w-[100%]'><MonthsChart /></div>
                        </div>
                    </div>
                    <div className='w-[100%] md:w-[30%] h-[100%]'>
                        <h2 className='text-[16px] md:text-[18px] font-bold'>Total Savings</h2> 
                        <div className='w-[100%] h-[100%] mt-[60px]'><DoughnutChart /></div>
                    </div>
                </div>
                <div className='w-[90%] md:w-[100%] h-[1px] bg-primaryColor/30 mt-[60px] mb-[25px]'></div>
                <div className='w-[90%] md:w-[100%] font-Grotesk'>
                    <div className='flex items-start justify-between'>
                        <h2 className='text-textColor text-[16px] md:text-[18px] font-bold'>Transaction History</h2>
                        <p onClick={toggleHeight} className='underline text-primaryColor text-[12px] cursor-pointer'>View All</p>
                    </div>
                    <div className={isExpandable ? 'h-auto' : 'h-[300px] overflow-hidden'}>
                        <TransactionHistory />
                    </div>
                </div>
            </div>
            <div className='w-[23%] hidden md:block shadow-xl shadow-textColor2 py-[46px] h-screen fixed right-0 top-0 px-[25px] font-Grotesk'>
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
                <div className='bg-[#F5F5F5] py-[15px] px-[10px] h-[350px] overflow-auto rounded-[20px] mb-[25px]'>
                    <h2 className='text-textColor text-[18px] mb-[19px] font-normal'>Financial Networks</h2>
                    <FinancialNetwork />
                </div>
                <Link className='px-[30px] py-[15px] flex gap-[15px] bg-gradient-to-r from-primaryColor to-primaryColor2 text-secondaryColor rounded-[10px]' href="">CREATE FINANCIAL NETWORK</Link>
                {/* Upcoming Event */}
                <div className='mt-[24px] h-[187px] w-[100%] bg-primaryColor rounded-[20px] flex flex-col items-start justify-start p-[20px] text-textColorLight font-Grotesk'>
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
        </>
        }
    </Main>
  )
}

export default HomeDashboard
