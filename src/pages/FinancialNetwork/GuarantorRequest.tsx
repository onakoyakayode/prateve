import React, { useEffect, useState } from 'react'
import Main from '../../components/Dashboard/Main'
import Image from 'next/image'
import CloseIcon from '@mui/icons-material/Close';
import VerifiedIcon from '@mui/icons-material/Verified';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import FinancialNetwork from '../FinancialNetwork';

interface DataItem {
    id: number;
    firstName: string;
    lastName: string;
    imageUrl: string;
    paymentType: string;
    Amount: string;
  }

const GuarantorRequest: React.FC = () => {

    const [data, setData] = useState<DataItem[]>([]);
    const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
    const [selectedItemDetails, setSelectedItemDetails] = useState<DataItem | null>(null);

    useEffect(() => {
        fetchData();
    }, [setData])


    const fetchData = async () => {
        try {
            const response = await fetch('/data.json');
            if(!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const jsonData: DataItem[] = await response.json();
            setData(jsonData);
        } catch (error) {
            console.log('Error fetching data:', error)
        }
    };

    const [seeDetails, setSeeDetails] = useState(false)

    const handleCloseDetails = () => {
        setSeeDetails(false)
    }
    

    const handleItemClick = (itemId: number) => {
        setSelectedItemId(itemId);
        const selectedItem = data.find((item) => item.id === itemId) || null;
        setSelectedItemDetails(selectedItem);
        setSeeDetails(true)
    };
    

  return (
    <Main>
        <FinancialNetwork>
            <div className='mt-[73px] font-Grotesk relative'>
                {data.map((item) => 
                    <div key={item.id}>
                        <div  className={ seeDetails ? 'blur-sm h-[124px] w-[100%] px-[13px] py-[27px] flex items-center gap-[48px] z-20' : 'h-[124px] w-[100%] px-[13px] py-[27px] flex items-center gap-[48px] z-20'}>
                            <div className='flex items-start gap-[16px]'>
                                <Image src={item.imageUrl} alt={item.firstName} width={30} height={30} className='w-[48px] h-[48px] object-cover rounded-full' />
                                <p className='w-[339px] h-[57px] text-textColor2 text-[14px]'>{item.firstName} request for you to be his guarantorfor a loan of <strong className='text-textColor font-bold'>#{item.Amount}</strong></p>
                            </div>
                            <div className='h-[70px] flex items-center gap-[32px]'>
                                <button className='py-[15px] px-[30px] w-[165px] flex items-center justify-center rounded-[10px] bg-primaryColor text-textColorLight'>Accept</button>
                                <button className='py-[15px] px-[30px] w-[165px] flex items-center justify-center rounded-[10px] bg-secondaryColor text-primaryColor border border-primaryColor'>Decline</button>
                                <button onClick={() => handleItemClick(item.id)} className='py-[15px] px-[30px] w-[165px] flex items-center justify-center rounded-[10px] bg-secondaryColor text-primaryColor border border-primaryColor'>See details</button>
                            </div>
                            
                        </div>  
                    </div> 
                )}
                        
                {selectedItemDetails && (
                    <div className={seeDetails ? 'w-[83%] h-[90vh] rounded-xl bg-textColor/20 fixed top-[21vh] left-[17%] opacity-90 ease-out duration-500' : 'opacity-0 absolute'}>
                        <div className={seeDetails ? 'h-[375px] w-[397px] bg-secondaryColor rounded-[10px] absolute top-[100px] left-[35%] shadow-sm z-40 ease-in-out duration-500 opacity-100' : "left-[200%] absolute"}>
                            <CloseIcon onClick={handleCloseDetails} className='absolute top-[24px] right-[24px] w-[24px] h-[24px] text-negativeAlert cursor-pointer mb-[16px]' />
                            <div className='mt-[56px] px-[32px]'>
                                <div className='flex items-center h-[45px] w-[212px]'>
                                    <Image src={selectedItemDetails.imageUrl} alt='' width={30} height={30} className='w-[45px] h-[45px] rounded-full object-cover' />
                                    <div className='flex items-center gap-[5px] ml-[16px] mr-[5px] text-textColor'>
                                        <p>{selectedItemDetails.firstName}</p>
                                        <p>{selectedItemDetails.lastName}</p>   
                                    </div>
                                    <VerifiedIcon className='text-primaryColor w-[16px] h-[16px]'/>
                                </div>
                                <p className='ml-[61px] text-[12px] text-textColor2 mb-[32px]'>Payment Duration: <strong className='text-textColor font-medium'>3months</strong></p>

                                <form className='ml-[61px]'>
                                    <h3 className='text-[14px] text-textColor font-bold mb-[16px]'>Amount</h3>
                                    <input type="text" id="" value={`# ${selectedItemDetails.Amount}`} placeholder={selectedItemDetails.Amount} className='w-[100px] h-[48px] pl-[10px] border border-textColor2/10 rounded-[10px] bg-[#FAFAFA]'/>
                                    <span className='py-[10px] px-[5px] w-[111px] text-[14px] h-[48px] ml-[16px] mb-[32px] text-primaryColor font-bold cursor-pointer'>Review Amount <PriorityHighIcon /></span>
                                    <button className='px-[30px] py-[15px] mt-[32px] flex items-center justify-center h-[65px] w-[90%] text-[18px] bg-gradient-to-r from-primaryColor to-primaryColor2 text-secondaryColor rounded-[10px] uppercase'>Done</button>
                                </form>
                            </div>
                         
                        </div>
                    </div> 
                )}
            </div>
        </FinancialNetwork>
    </Main>
  )
}

export default GuarantorRequest
