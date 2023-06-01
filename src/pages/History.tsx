import React, { useEffect, useState} from 'react'
import Main from '../components/Dashboard/Main'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import profilePic from '../images/happy-businesswoman-talking-phone.png'
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import FilterListIcon from '@mui/icons-material/FilterList';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SouthWestIcon from '@mui/icons-material/SouthWest';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';


interface DataItem {
    id: number;
    firstName: string;
    lastName: string;
    imageUrl: string;
    paymentType: string;
    Amount: string;
    paymentStatus: string;
}


const History: React.FC = () => {


    const [viewAllTransaction, setViewAllTransaction] = useState(false)

    const handleViewTransaction = () => {
        setViewAllTransaction(!viewAllTransaction)
    }

    const [data, setData] = useState<DataItem[]>([])


    useEffect(() => {
        fetchData();
    }, [setData])


    const fetchData = async () => {
        try {
            const response = await fetch('data.json');
            if(!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const jsonData: DataItem[] = await response.json();
            setData(jsonData);
        } catch (error) {
            console.log('Error fetching data:', error)
        }
    }



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
    <Main>
        <div className='w-[83%] py-[40px] pl-[136px] pr-[61px]'>
            <div className='flex items-center justify-end mb-[80px] font-Grotesk'>
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
            <div className='w-[828px] h-[124px] flex items-start justify-between'>
                <div className="w-[217px] h-[100%] bg-primaryColor rounded-[10px] relative px-[44px] py-[31px] flex flex-col items-center">
                    <OpenInNewIcon className='text-primaryColor bg-secondaryColor p-[5px] w-[30px] h-[30px] rotate-90 object-cover absolute top-0 left-0 rounded-lg'/>
                    <h4 className='text-[13px] text-textColorLight/80 mb-[16px] font-Grotesk'>TOTAL SAVINGS</h4>
                    <div className='flex items-start gap-[4px] text-textColorLight'>
                        <p className='text-[10px] font-Grotesk'>NGN</p>
                        <h2 className='text-[24px]'>12,400.00</h2>
                    </div>
                </div>
                <div className="w-[217px] h-[100%] bg-[#D2E6F3] text-negativeAlert rounded-[10px] relative px-[44px] py-[31px] flex flex-col items-center">
                    <OpenInNewIcon className=' bg-secondaryColor p-[5px] w-[30px] h-[30px] rotate-30 object-cover absolute top-0 left-0 rounded-lg'/>
                    <h4 className='text-[13px]  mb-[16px] font-Grotesk'>TOTAL SAVINGS</h4>
                    <div className='flex items-start gap-[4px]'>
                        <p className='text-[10px] font-Grotesk'>NGN</p>
                        <h2 className='text-[24px]'>13,750.00</h2>
                    </div>
                </div>
                <div className="w-[217px] h-[100%] bg-[#F49F0A] rounded-[10px] relative px-[44px] py-[31px] flex flex-col items-center">
                    <OpenInNewIcon className='text-primaryColor bg-secondaryColor p-[5px] w-[30px] h-[30px] rotate-180 object-cover absolute top-0 left-0 rounded-lg'/>
                    <h4 className='text-[13px] text-textColorLight/80 mb-[16px] font-Grotesk'>FINANCIAL NETWORK</h4>
                    <div className='flex items-start gap-[4px] text-textColorLight'>
                        <p className='text-[10px] font-Grotesk'>NGN</p>
                        <h2 className='text-[24px]'>0.00</h2>
                    </div>
                </div>
            </div>
            <div className='w-[90%] h-[1px] bg-primaryColor/25 mb-[32px] mt-[32px]'></div>
            <h3 className='font-Grotesk text-textColor mb-[24px]'>My Transactions History</h3>
            <div className={viewAllTransaction ? "w-[828px] h-auto" :'w-[828px] h-[619px] overflow-hidden'}>
                <div className='flex items-center font-Grotesk mb-[32px]'>
                    <p className='text-[14px] text-textColor2 mr-[58px]'>December 2022</p>
                    <p  onClick={handleViewTransaction} className='underline text-[14px] text-textColor2 mr-[505px] cursor-pointer'>View All</p>
                    <p className='flex items-center gap-[5px] text-primaryColor text-[12px] cursor-pointer'>Sort By <FilterListIcon /></p>
                </div>
                <div className='font-Grotesk'>
                    {data.map((item) => 
                    <div key={item.id} className='h-[80px] w-[100%] flex items-center px-[8px] py-[17px] bg-[#FAFAFA] mb-[16px]'>
                        <Image src={item.imageUrl} width={30} height={30} alt={item.firstName} className='w-[48px] h-[48px] rounded-full object-cover mr-[16px]' />
                        <div className='w-[197px] mr-[76px]'>
                            <div className='flex items-center gap-[5px] mb-[6px]'>
                                <p>{item.firstName}</p>
                                <p>{item.lastName}</p>
                            </div>
                            <div className='text-[12px]'>
                                <p>3rd, December 2022 | 11:00 AM</p>
                            </div>
                        </div>
                        <p className='w-[50px] mr-[72px]'>{item.paymentType}</p>
                        <p className='font-bold w-[120px] mr-[83px]'># {item.Amount}</p>
                        <p className='w-[100px] mr-[74px]'>{item.paymentStatus}</p>
                        <p>{item.paymentStatus === "Incomplete" ? <CheckCircleOutlineIcon className='text-negativeAlert'/> : item.paymentStatus === "Recieved" ? <SouthWestIcon className='text-[#40C73D] p-[3px] rounded-full border border-[#40C73D]'/> : item.paymentStatus === "Refunded" ? <AssignmentReturnIcon className='text-primaryColor'/> : ""}</p>
                    </div>)}
                </div>
            </div>
        </div>
    </Main>
  )
}

export default History

