import React, {useState} from 'react'
import Main from '../../components/Dashboard/Main'
import Profile from '../Profile';

const NextOfKin = () => {

    const [value, setValue] = useState<number | ''>('');

    const handleChangePhoneNum = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.replace(/\D/g, '');
    const truncatedValue = newValue.slice(0, 10); // Truncate to maximum 10 digits
    setValue(truncatedValue === '' ? '' : Number(truncatedValue));
    };
  return (
    <Main>
        <Profile>
            <form action="" className='font-Grotesk flex flex-col items-start'>
                <div className='flex items-center gap-[62px]'>
                    <div className='flex items-center gap-[45px]'>
                        <label htmlFor="firstName" className='text-[14px] text-textColor2 w-[120px]'>First Name</label>
                        <input type="text" id="firstName" placeholder='Aniya' className='h-[72px] w-[302px] p-[15px] bg-[#FAFAFA] placeholder:text-[14px] rounded-[10px] border border-1 border-textColor2 focus:outline-none placeholder:pl-[28px] placeholder:py-[23px] placeholder:text-textColor/60' />
                    </div>
                    <div className='flex items-center gap-[45px]'>
                        <label className='text-[14px] text-textColor2' htmlFor="maritalStatus">Relationship</label>
                        <select className='h-[68px] w-[147px] text-[14px] bg-[#FAFAFA] rounded-[10px] placeholder:text-[14px] border border-1 border-textColor2 focus:outline-none p-[20px]' name="maritalStatus" id="maritalStatus">
                            <option value="Father">Father</option>
                            <option value="Mother">Mother</option>
                            <option value="Brother">Brother</option>
                            <option value="Sister">Sister</option>
                            <option value="Father-in-law">Father-in-law</option>
                            <option value="Mother-in-law">Mother-in-law</option>
                        </select>
                    </div>
                </div>   
                <div className='w-[100%] h-[1px] bg-primaryColor/25 mt-[25px] mb-[25px]'></div>
                <div className='flex items-center gap-[62px]'>
                    <div className='flex items-center gap-[45px]'>
                        <label htmlFor="lastName" className='text-[14px] text-textColor2 w-[120px]'>Last Name</label>
                        <input type="text" id="lastName" placeholder='Ebube' className='h-[72px] w-[302px] p-[15px] bg-[#FAFAFA] placeholder:text-[14px] rounded-[10px] border border-1 border-textColor2 focus:outline-none placeholder:pl-[28px] placeholder:py-[23px] placeholder:text-textColor/60' />
                    </div>
                    <div className='flex items-center gap-[90px]'>
                        <label htmlFor="gender" className='text-[14px] text-textColor2'>Gender</label>
                        <div className='flex items-center gap-[16px]'>
                            <div className='flex items-center gap-[16px]'>
                                <input type="radio" id="radio1" name="radio" value="option1" className={''}/>
                                <label htmlFor="radio1" className="text-[14px] text-textColor font-normal">Female</label>
                            </div>
                            <div className='flex items-center gap-[16px]'>
                                <input type="radio" id="radio2" name="radio" value="option2" />
                                <label htmlFor="radio2" className="text-[14px] text-textColor font-normal">Male</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[100%] h-[1px] bg-primaryColor/25 mt-[25px] mb-[25px]'></div>
                <div className='flex items-center gap-[62px]'>
                    <div className='flex items-center gap-[45px]'>
                        <label htmlFor="email" className='text-[14px] text-textColor2 w-[120px]'>Email Address</label>
                        <input type="email" id="email" placeholder='brown@gmail.com' className='h-[72px] w-[302px] p-[15px] bg-[#FAFAFA] rounded-[10px] placeholder:text-[14px] border border-1 border-textColor2 focus:outline-none placeholder:pl-[28px] placeholder:py-[23px] placeholder:text-textColor/60' />
                    </div>
                    <div className='flex items-center'>
                        <label className='text-[14px] text-textColor2 w-[100px] mr-[45px]' htmlFor="phoneNum">Phone Num</label>
                        <div className='flex items-center gap-[10px]'>
                            <select name="" id="phoneNum" className='flex items-center justify-center w-[92px] h-[70px] text-[14px] p-[10px] text-textColor bg-[#FAFAFA] rounded-[10px] border border-1 border-textColor2 focus:outline-none'>
                                <option value="+234">+234</option>
                            </select>
                            <input 
                                type="number"
                                value={value} 
                                id="phoneNum" 
                                onChange={handleChangePhoneNum} 
                                inputMode="numeric"
                                placeholder='8031328976'
                                className='flex items-center justify-center w-[132px] h-[70px] text-[15px] placeholder:text-[14px] p-[10px] text-textColor bg-[#FAFAFA] rounded-[10px] border border-1 border-textColor2 focus:outline-none'
                            />
                        </div>
                    </div>
                </div>  
                <div className='w-[100%] h-[1px] bg-primaryColor/25 mt-[25px] mb-[25px]'></div>
                <div className='flex items-center gap-[62px]'>
                    <div className='flex items-center gap-[45px]'>
                        <label htmlFor="address" className='text-[14px] text-textColor2 w-[120px]'>Postal Address</label>
                        <input type="text" id="address" placeholder='24, Grubs street Falomo Lagos' className='h-[72px] w-[302px] p-[15px] bg-[#FAFAFA] rounded-[10px] border border-1 border-textColor2 focus:outline-none placeholder:pl-[28px] placeholder:py-[23px] placeholder:text-[14px] placeholder:text-textColor/60' />
                    </div>
                </div> 
                <button className='w-[482px] h-[88px] mt-[50px] self-center px-[30px] py-[15px] flex items-center justify-center bg-gradient-to-r from-primaryColor to-primaryColor2 text-secondaryColor/80 rounded-[10px] uppercase'>SAVE CHANGES</button>          
            </form>
        </Profile>
    </Main>
  )
}

export default NextOfKin
