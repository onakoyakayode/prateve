import React, { useState } from 'react'
import Main from '../../components/Dashboard/Main'
import masterCardLogo from '../../Icon/mastercard-2.svg'
import Image from 'next/image'
// import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import AddIcon from '@mui/icons-material/Add';
import Profile from '../Profile'

const BankDetails = () => {

  const  [addBankDetails, setAddBankDetails] = useState(false)

  const handleBankDetails = () => {
    setAddBankDetails(!addBankDetails)
  }

  const [accountNumber, setAccountNumber] = useState<number | ''>('');

    const handleChangePhoneNum = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.replace(/\D/g, '');
    const truncatedValue = newValue.slice(0, 10); // Truncate to maximum 10 digits
    setAccountNumber(truncatedValue === '' ? '' : Number(truncatedValue));
    };

  return (
    <Main>
        <Profile>
          <>
          {!addBankDetails ? (
            <div className=''>
                <p className='font-normal text-textColor2 mb-[57px] font-Grotesk'>Bank Account Details where all your withdrawals and similar transactions go to.</p>
                {/* Bank Card */}
                <div className='flex items-start gap-[50px] text-textColorLight relative z-0'>
                  <div className='w-[388px] h-[132px] bg-primaryColor rounded-[20px] absolute top-[-20px] ml-[9px] z-10'></div>
                  <div className='w-[406px] h-[236px] bg-gradient-to-r to-[#0F4062] from-[#1E81C4] rounded-[20px] p-[32px] z-20'>
                    <div className='flex items-center justify-between mb-[36px] font-Grotesk'>
                      <h2 className='text-[14px] text-textColorLight/80'>Account Details</h2>
                      <Image src={masterCardLogo} alt='mastercard' className='w-[44px] h-[28px]' />
                    </div>
                    <h3 className='text-[32px] text-textColorLight/80'>2083  5410 9361</h3>
                    <h5 className='font-Grotesk mb-[32px]'>Union Bank</h5>
                    <p className='text-[16px] font-bold text-textColorLight/80 font-Grotesk'>ANIYA EBUBE P.</p>
                  </div>
                  <div className='w-[406px] h-[236px] flex flex-col items-center justify-center text-primaryColor border border-primaryColor rounded-[20px]'>
                    <AddIcon onClick={handleBankDetails} className=' w-[48px] h-[48px] object-cover p-[2px] rounded-full border border-primaryColor mb-[20px] cursor-pointer'/>
                    <h3 className='font-Grotesk'>Add Bank Account</h3>
                  </div>
                </div>
                <h3 className='text-negativeAlert font-Grotesk font-bold mt-[15px] mx-[118px]'>Delete Accounts Details</h3>
                
                <button className='w-[482px] h-[88px] mt-[50px] m-auto self-center px-[30px] py-[15px] font-Grotesk flex items-center justify-center bg-gradient-to-r from-primaryColor to-primaryColor2 text-secondaryColor/80 rounded-[10px] uppercase'>SAVE CHANGES</button>
            </div>
            ): (
              <div className='font-Grotesk'>
                <h3>Add New Bank Account</h3>
                <div className='w-[100%] h-[1px] bg-primaryColor/25 mt-[25px] mb-[25px]'></div>
                <div className='flex items-center gap-[62px]'>
                  <label className='text-[14px] text-textColor2 w-[114px]' htmlFor="phoneNum">Account Number</label>
                  <input 
                      type="number"
                      value={accountNumber} 
                      id="phoneNum" 
                      onChange={handleChangePhoneNum} 
                      inputMode="numeric"
                      placeholder='2125410936'
                      className='flex items-center justify-center w-[302px] h-[72px] text-[14px] placeholder:text-[14px] p-[10px] text-textColor bg-[#FAFAFA] rounded-[10px] border border-1 border-textColor2 focus:outline-none'
                  />
                </div>
                <div className='w-[100%] h-[1px] bg-primaryColor/25 mt-[25px] mb-[25px]'></div>
                <div className='flex items-start gap-[62px]'>
                  <label className='text-[14px] text-textColor2 w-[114px] h-[18px] mt-[24px]' htmlFor="maritalStatus">Bank Name</label>
                  <div>
                    <select className='h-[68px] w-[302px] text-[14px] mb-[16px] bg-[#FAFAFA] rounded-[10px] placeholder:text-[14px] border border-1 border-textColor2 focus:outline-none p-[20px]' name="maritalStatus" id="maritalStatus">
                      <option value="Access Bank">Access Bank</option>
                      <option value="UBA">UBA</option>
                      <option value="Zenith Bank">Zenith Bank</option>
                      <option value="Palm Pay">Palm Pay</option>
                      <option value="Wema Bank">Wema Bank</option>
                      <option value="Opay">Opay</option>
                    </select>
                    <p className='w-[274px] h-[36px] text-[14px] text-textColor2'>Please wait a few seconds while we confirm your bank details...</p>
                  </div>
                </div>
                <div className='w-[100%] h-[1px] bg-primaryColor/25 mt-[25px] mb-[25px]'></div>
                <div className='flex items-center'>
                  <div className='flex items-center gap-[62px]'>
                    <label htmlFor="firstName" className='text-[14px] text-textColor2 w-[120px]'>Account Name</label>
                    <input type="text" id="firstName" placeholder='Aniya Ebube R.' className='h-[72px] w-[302px] p-[15px] bg-[#FAFAFA] placeholder:text-[14px] rounded-[10px] border border-1 border-textColor2 focus:outline-none placeholder:pl-[28px] placeholder:py-[23px] placeholder:text-textColor' />
                  </div>
                </div>
                <button className='w-[582px] h-[88px] mt-[50px] m-auto self-center px-[30px] py-[15px] font-Grotesk flex items-center justify-center bg-gradient-to-r from-primaryColor to-primaryColor2 text-secondaryColor/80 rounded-[10px] uppercase'>SAVE CHANGES</button>
              </div>
            )}
          </>
        </Profile>
    </Main>
  )
}

export default BankDetails
