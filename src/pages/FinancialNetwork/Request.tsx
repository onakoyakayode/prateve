import React from 'react'
import Main from '../../components/Dashboard/Main'
import Image from 'next/image';
import VerifiedIcon from '@mui/icons-material/Verified';
import data from '../../../public/data.json'
import FinancialNetwork from '../FinancialNetwork';

const FinancialNetworkRequest = () => {
  return (
    <Main>
        <FinancialNetwork>
            <div className='mt-[48px] font-Grotesk w-[852px]'>
                <div>
                    {data.map((item) => 
                        <>
                            <div key={item.id} className='h-[65px] w-[100%] flex items-center'>
                                <Image src={item.imageUrl} width={30} height={30} alt={item.firstName} className='w-[48px] h-[48px] object-cover rounded-full' />
                                <div className='flex items-center gap-[5px] ml-[16px]'>
                                    <p>{item.firstName}</p>
                                    <p>{item.lastName}</p>
                                    <VerifiedIcon className='text-primaryColor'/>
                                </div>
                                <div className='flex items-center gap-[32px] ml-auto'>
                                    <button className='px-[30px] py-[15px] flex items-center justify-center h-[60px] w-[203px] gap-[15px] bg-gradient-to-r from-primaryColor to-primaryColor2 text-secondaryColor rounded-[10px]'>Accept</button>
                                    <button className='px-[30px] py-[15px] flex items-center justify-center h-[60px] w-[203px] bg-secondaryColor border border-primaryColor text-primaryColor rounded-[10px]'>Decline</button>
                                </div>
                            </div>
                            <div className='w-[100%] h-[1px] bg-primaryColor/25 mb-[32px] mt-[16px]'></div>
                        </>
                    )}
                </div>
            </div>
        </FinancialNetwork>
    </Main>
  )
}

export default FinancialNetworkRequest
