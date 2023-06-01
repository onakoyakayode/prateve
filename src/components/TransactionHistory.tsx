import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import CallMadeIcon from '@mui/icons-material/CallMade';

type MyData = {
    id: number;
    firstName: string;
    lastName: string;
    date: string;
    time: any;
    imageUrl: string;
    paymentType: string;
    Amount: string;
    paymentStatus: string;
    paymentConfrimation: string;
    confirmPayment: string;
};
  

const TransactionHistory: React.FC = () => {

    const [data, setData] = useState<MyData[] | null>(null)

    const [paymentConfirmations, setPaymentConfirmations] = useState(false)


    const currentDate = new Date();
    const option: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate: string = currentDate.toLocaleDateString(undefined, option);


    const currentTime = new Date();const options: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedTime: string = currentTime.toLocaleTimeString(undefined, options);


    useEffect(() => {
        // fetch('/api/data')
        // .then((response) => response.json())
        // .then((data: MyData[]) => setData(data))
        const fetchData = async () => {
            try {
                const response = await fetch('/data.json');
                if (!response.ok) {
                  throw new Error('Failed to fetch data');
                }
                const jsonData = await response.json();
                setData(jsonData);
              } catch (error) {
                console.log('Error fetching data:', error);
              }
          };
        
          fetchData();
    }, [])   

  return (
    <div>
        {data && 
      <ul className='py-[16px]'>
        {data.map((item) =>
         <li className='h-[83px] flex items-center w-[100%] bg-[#FAFAFA] rounded-[20px] mb-[16px]' key={item.id}>
            <div className='flex items-center gap-[16px] w-[225px] p-[18px]'>
                <div className='w-[32px] h-[32px] overflow-hidden rounded-full'>
                    <Image src={item.imageUrl} alt={item.imageUrl} width={100} height={100} />
                </div>
                <div className='flex flex-col items-start text-textColor text-[16px]'>
                    <div className='flex items-center gap-[12px]'>
                        <p>{item.firstName}</p>
                        <p>{item.lastName}</p>
                    </div>
                    <div className='flex items-center gap-[5px] text-textColor text-[12px]'>
                        <p>{formattedDate}</p> |
                        <p className='uppercase'>{formattedTime}</p>
                    </div>
                </div>
            </div>
            <h4 className='ml-[48px] text-textColor text-[16px] w-[85px]'>{item.paymentType}</h4>
            <h2 className='text-textColor font-bold ml-[90px] w-[85px]'>₦ {item.Amount}</h2>
            <p className='text-textColor ml-[49px] font-normal w-[85px]'>{item.paymentType === "Savings" ? "Received" : "Sent"}</p>
            {/* <p>{paymentConfirmations ?  <CallReceivedIcon /> : "pla"}</p> */}
            <p className='ml-[53px] font-medium'>{item.paymentType === "Loan" ? <CallMadeIcon style={{ color: "red", border: "1px solid red", padding: "2px", borderRadius: "50%"}} /> : <CallReceivedIcon style={{ color: "green", border: "1px solid green", padding: "2px", borderRadius: "50%"}} />}</p>
        </li>)}
      </ul>
      }
    </div>
  )
}

export default TransactionHistory
