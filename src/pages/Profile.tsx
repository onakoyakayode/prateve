import React, {ReactNode , ChangeEvent, useState } from 'react'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import profilePic from '../images/black-man-black-suit-standing-cafe.png'
import Image from 'next/image';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';
import DashboardLinks from '../components/Links/DashboardLinks';


type MainProps = {
    children: ReactNode;
}

const Profile: React.FC<MainProps> = ({children}) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageLoading, setImageLoading] = useState<boolean>(false);

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setSelectedImage(file || null);
        setImageLoading(true)
    };
  return (
    <div className='py-[40px] px-[61px] w-[83%]'>
      <header className='flex items-center justify-between mb-[31px]'>
        <h1 className='text-[24px] text-textColor'>Edit your Profile</h1>
        <div className='flex items-center'>
          <div className='relative mr-[10px] w-6 h-6'>
            <NotificationsOutlinedIcon className='relative w-[100%] h-[100%] object-cover'/>
            <p className='w-[8px] h-[8px] bg-negativeAlert absolute top-[5px] left-[15px] rounded-full'></p>
          </div>
          <div>
            <Image src={profilePic} alt="profile-picture" className="w-[40px] h-[40px] rounded-full text-textColor2" />
          </div>
        </div>
      </header>
      <div className='flex items-center gap-[16px] mb-[41px]'>
            <div className='relative w-[64px] h-[64px]'>
                <label htmlFor='image-upload' className='absolute bottom-0 right-0'>
                    <input id='image-upload' type="file" accept="image/*" onChange={handleImageChange} className='absolute -z-50' />
                    <CameraAltOutlinedIcon className='cursor-pointer text-textColor2'/>
                </label>
                {imageLoading ? selectedImage && (
                    <div className='w-[64px] h-[64px]'>
                    <Image src={URL.createObjectURL(selectedImage)} className='w-[100%] h-[100%] object-cover rounded-[100%]' alt="" />
                    </div>
                ): (
                    <div className="w-[64px] h-[64px] rounded-full border border-textColor2/10 bg-[#FAFAFA]"></div>
                )}
            </div>
            <div className='font-Grotesk'>
                <div className='flex items-center gap-[5px]'>
                    <h3 className='text-[20px]'>Aniya</h3>
                    <VerifiedIcon className='text-primaryColor'/>
                </div>
                <p className='text-[14px]'>aniya@gmail.com</p>
            </div>
        </div>
        <div className='px-[80px] mb-[35px]'>
            <ul className='font-Grotesk mb-[16px] flex items-center justify-between px-[40px] text-[18px] font-medium'>
              <DashboardLinks href='/Profile/PersonalDetails'>Personal Details</DashboardLinks>
              <DashboardLinks href='/Profile/SecurityDetails'>Security Details</DashboardLinks>
              <DashboardLinks href='/Profile/NextOfKin'>Next Of Kin</DashboardLinks>
              <DashboardLinks href='/Profile/BankDetails'>Bank Details</DashboardLinks>
            </ul>
            <div className='w-[100%] h-[1px] bg-primaryColor/25'></div>
        </div>
      <div className='px-[80px]'>{children}</div>
    </div>
  )
}

export default Profile;

