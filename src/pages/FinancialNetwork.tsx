import React, { ReactNode, useState} from 'react'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import profilePic from '../images/happy-businesswoman-talking-phone.png'
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import DashboardLinks from '../components/Links/DashboardLinks';

type FinancialNetworkProps = {
    children: ReactNode;
}

const FinancialNetwork: React.FC<FinancialNetworkProps> = ({children}) => {

  // Search input icon disappear 
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };
  // Search input icon disappear 
  const handleInputBlur = () => {
      setIsInputFocused(false);
  };
  return (
    <div className='py-[40px] px-[61px] w-[83%]'>
      <div className='flex items-center justify-end mb-[41px] font-Grotesk'>
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
      <div>
        <ul className='font-Grotesk mb-[16px] flex items-center justify-between px-[40px] text-[18px] font-medium'>
          <DashboardLinks href='/FinancialNetwork/History'>Financial Network History</DashboardLinks>
          <DashboardLinks href='/FinancialNetwork/Request'>Financial Network Requests</DashboardLinks>
          <DashboardLinks href='/FinancialNetwork/GuarantorRequest'>Guarantor Requests</DashboardLinks>
        </ul>
        <div className='w-[100%] h-[1px] bg-primaryColor/25'></div>
      </div>
      
      <div className='px-[80px]'>{children}</div>
    </div>
  )
}

export default FinancialNetwork
