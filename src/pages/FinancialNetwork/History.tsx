import React from 'react'
import Main from '../../components/Dashboard/Main'
import FilterListIcon from '@mui/icons-material/FilterList';
import Image from 'next/image';
import VerifiedIcon from '@mui/icons-material/Verified';
import data from '../../../public/data.json'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import FinancialNetwork from '../FinancialNetwork';


const FinancialNetworkHistory = () => {

    const currentTime = new Date();
    const options: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedTime: string = currentTime.toLocaleTimeString(undefined, options);

    const date = new Date(); // Create a Date object representing the current date

    const year = date.getFullYear(); // Get the 4-digit year
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Get the month (0-based) and pad with leading zero if necessary
    const day = String(date.getDate()).padStart(2, '0'); // Get the day of the month and pad with leading zero if necessary

    const formattedDate = `${day}/${month}/${year}`;

  return (
    <Main>
        <FinancialNetwork>
            <div className='mt-[32px] font-Grotesk w-[965px] h-[444px]'>
                <div className='flex items-center justify-between mb-[22px]'>
                    <p className='text-[15px] text-textColor'>Guarantee for You</p>
                    <p className='flex items-center gap-[5px] text-primaryColor text-[12px]'>Sort By <FilterListIcon/></p>
                </div>
                <div className='w-[100%] h-[404px] bg-secondaryColor shadow-2xl py-[32px] pl-[32px] pr-[57px] rounded-[20px] overflow-hidden'>
                    {data.map((item) => 
                    <>
                        <div key={item.id} className='h-[45px] w-[100%] flex items-center justify-between overflow-hidden'>
                            <div className='flex'>
                                <div className='mr-[16px]'>
                                    <Image src={item.imageUrl} alt={item.imageUrl} width={30} height={30} className='w-[45px] h-[45px] rounded-full object-cover' />
                                </div>
                                <div className='flex items-center gap-[5px] w-[120px]'>
                                    <h3>{item.firstName}</h3>
                                    <h3>{item.lastName}</h3>
                                    <VerifiedIcon className='text-primaryColor w-[16px] h-[16px] object-cover'/>
                                </div>
                            </div>
                            <h4 className=' font-bold'>
                                #{item.Amount}
                            </h4>
                            <p className=''>
                                {formattedDate}
                            </p>
                            <p className=''>
                                {formattedTime}
                            </p>
                            <div className=''>
                                {item.confirmPayment === "true" ? <TaskAltIcon className='text-[#40C73D] w-[24px] h-[24px]'/> : <HourglassBottomIcon className='text-primaryColor w-[24px] h-[24px]'/>}
                            </div>
                        </div>
                        <div className='w-[100%] h-[1px] bg-[#FAFAFA] mb-[32px] mt-[16px]'></div>
                    </>
                    )}
                </div>
                <div className='w-[101%] h-[1px] bg-primaryColor/25 mb-[32px] mt-[16px]'></div>
                <div className='flex items-center justify-between mb-[22px]'>
                    <p className='text-[15px] text-textColor'>People You Guaranteed for</p>
                    <p className='flex items-center gap-[5px] text-primaryColor text-[12px]'>Sort By <FilterListIcon/></p>
                </div>
                <div className='w-[100%] h-[404px] bg-secondaryColor shadow-2xl py-[32px] pl-[32px] pr-[57px] rounded-[20px] overflow-hidden'>
                    {data.map((item) => 
                    <>
                        <div key={item.id} className='h-[45px] w-[100%] flex items-center justify-between overflow-hidden'>
                            <div className='flex'>
                                <div className='mr-[16px]'>
                                    <Image src={item.imageUrl} alt={item.imageUrl} width={30} height={30} className='w-[45px] h-[45px] rounded-full object-cover' />
                                </div>
                                <div className='flex items-center gap-[5px]'>
                                    <h3>{item.firstName}</h3>
                                    <h3>{item.lastName}</h3>
                                    <VerifiedIcon className='text-primaryColor w-[16px] h-[16px] object-cover'/>
                                </div>
                            </div>
                            <h4 className=' font-bold'>
                                #{item.Amount}
                            </h4>
                            <p className=''>
                                {formattedDate}
                            </p>
                            <p className=''>
                                {formattedTime}
                            </p>
                            <div className=''>
                                {item.confirmPayment === "true" ? <TaskAltIcon className='text-[#40C73D] w-[24px] h-[24px]'/> : <HourglassBottomIcon className='text-primaryColor w-[24px] h-[24px]'/>}
                            </div>
                        </div>
                        <div className='w-[100%] h-[1px] bg-[#FAFAFA] mb-[32px] mt-[16px]'></div>
                    </>
                    )}
                </div>
                
            </div>
        </FinancialNetwork>
    </Main>
  )
}

export default FinancialNetworkHistory
