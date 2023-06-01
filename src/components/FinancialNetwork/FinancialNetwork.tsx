import React from 'react'
import data from '../../../public/data.json'
import Image from 'next/image'
import VerifiedIcon from '@mui/icons-material/Verified';

const FinancialNetwork = () => {
  return (
    <div className=''>
      {data.map((item, index) => 
      <div key={index} className='flex flex-col gap-[16px] items-start p-[25px] bg-secondaryColor rounded-[10px] h-[130px] mb-[16px]'>
        <div className='flex items-center gap-[16px]'>
          <div className='w-[40px] h-[40px]'><Image src={item.imageUrl} alt={item.imageUrl} width={30} height={30} className='w-[100%] h-[100%] object-cover rounded-full' /></div>
          <div className='w-[155px] flex items-center gap-[5px]'>
            <h2 className='text-textColor'>{item.firstName} {item.lastName}</h2>
            <VerifiedIcon className='text-primaryColor'/>
          </div>
        </div>
        <button className='px-[30px] py-[15px] flex justify-center items-center gap-[15px] w-[100%] h-[40px] bg-gradient-to-r from-primaryColor to-primaryColor2 text-secondaryColor rounded-[10px]'>Request Loan</button>
        
      </div>)}
    </div>
  )
}

export default FinancialNetwork
