import React, { ChangeEvent, useState } from 'react'
import Main from '../../components/Dashboard/Main'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import Profile from '../Profile';
import Image from 'next/image';

const SecurityDetails: React.FC = () => {

    const [selectedImage, setSelectedImage] = useState<File | null>(null)
    const [imageLoading, setImageLoading] = useState<boolean>(false);

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setSelectedImage(file || null);
        setImageLoading(true)
    };

    function hideEmail(email: string): string {
    const parts = email.split('@');
    const username = parts[0];
    const domain = parts[1];
    
    // Hide a portion of the username
    const hiddenUsername = username.slice(0, Math.floor(username.length / 2)) + '*'.repeat(Math.ceil(username.length / 2));
    
    return hiddenUsername + '@' + domain;
    }
    const email = 'aniyaoyamin@gmail.com';
    const hiddenEmail = hideEmail(email);
  return (
    <Main>
        <Profile>
            <div className='font-Grotesk'>
                <div className='h-[65px] w-[100%] flex items-center justify-between'>
                    <p className='text-textColor2'>Verified Email Address</p>
                    <p>{hiddenEmail}</p>
                    <button className='w-[224px] h-[100%] px-[30px] py-[15px] flex items-center justify-center bg-gradient-to-r from-primaryColor to-primaryColor2 text-secondaryColor/80 rounded-[10px] uppercase'>change email</button>
                </div>
                <div className='w-[100%] h-[1px] bg-primaryColor/25 mt-[25px] mb-[35px]'></div>
                <div className='h-[65px] w-[100%] flex items-center justify-between'>
                    <p className='text-textColor2'>Update Password</p>
                    {/* <p>{hiddenEmail}</p> */}
                    <button className='w-[224px] h-[100%] px-[30px] py-[15px] flex items-center justify-center bg-gradient-to-r from-primaryColor to-primaryColor2 text-secondaryColor/80 rounded-[10px] uppercase'>CHANGE PASSWORD</button>
                </div>
                <div className='w-[100%] h-[1px] bg-primaryColor/25 mt-[25px] mb-[35px]'></div>
                <div className='h-[65px] w-[100%] flex items-center justify-between'>
                    <p className='text-textColor2'>Transaction Pin</p>
                    {/* <p>{hiddenEmail}</p> */}
                    <button className='w-[224px] h-[100%] px-[30px] py-[15px] flex items-center justify-center bg-gradient-to-r from-primaryColor to-primaryColor2 text-secondaryColor/80 rounded-[10px] uppercase'>CHANGE PIN</button>
                </div>
                <div className='w-[100%] h-[1px] bg-primaryColor/25 mt-[25px] mb-[35px]'></div>
                <div className='h-[65px] w-[100%] flex items-center justify-between'>
                    <p className='text-textColor2'>BVN Verification</p>
                    {/* <p>{hiddenEmail}</p> */}
                    <button className='w-[224px] h-[100%] px-[30px] py-[15px] flex items-center justify-center bg-gradient-to-r from-primaryColor to-primaryColor2 text-secondaryColor/80 rounded-[10px] uppercase'>Done</button>
                </div>
                <div className='mt-[45px]'>
                    <h3 className='text-[20px] font-medium text-textColor2 mb-[16px]'>Upload ID Document</h3>
                    <p className='text-textColor2 font-normal text-[15px] mb-[32px]'>You must upload at least <strong className='font-medium text-textColor'>one</strong> of the following in accordance with industry standards.</p>
                    <div className='flex flex-col gap-[10px] items-start mb-[20px]'>
                        <label htmlFor="imageUpload" className='flex items-center gap-[16px] text-primaryColor cursor-pointer'>
                            <CloudUploadOutlinedIcon />
                            <input type="file" id="imageUpload" accept='image/*'  onChange={handleImageChange} className='hidden'/>
                            <p id='imageUpload'>National Identification Number </p>
                        </label>
                        {imageLoading ? selectedImage && (
                            <div className='w-[300px] h-[200px]'>
                                <Image src={URL.createObjectURL(selectedImage)} alt="" className='w-[100%] h-[100%] object-cover'/>
                            </div>
                        ) : (
                            null
                        )}
                    </div>
                    <div className='flex items-start flex-col gap-[10px] mb-[20px]'>
                        <label htmlFor="imageUpload" className='flex items-center gap-[16px] text-primaryColor cursor-pointer'>
                            <CloudUploadOutlinedIcon />
                            <input type="file" id="imageUpload" accept='image/*'  onChange={handleImageChange} className='hidden'/>
                            <p id='imageUpload'>Driver&apos;s License</p>
                        </label>
                        {imageLoading ? selectedImage && (
                            <div className='w-[300px] h-[200px]'>
                                <Image src={URL.createObjectURL(selectedImage)} alt="" className='w-[100%] h-[100%] object-cover'/>
                            </div>
                        ) : (
                            null
                        )}
                    </div>
                </div>
            </div>
        </Profile>
    </Main>
  )
}

export default SecurityDetails
