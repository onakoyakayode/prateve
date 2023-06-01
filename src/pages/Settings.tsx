import React, { useState } from 'react'
import Main from '../components/Dashboard/Main'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import profilePic from '../images/happy-businesswoman-talking-phone.png'
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';

const Settings: React.FC = () => {

    const [toggleNewsUpdate, setToggleNewsUpdate] = useState(true)
    const [toggleTips, setToggleTips] = useState(true)
    const [toggleUnifinishedTransaction, setToggleUnifinishedTransaction] = useState(true)
    const [toggleReminderNotification, setToggleReminderNotification] = useState(false)
    const [toggleReminderDeadline, setToggleReminderDeadline] = useState(true)
    const [toggleMoreAboutYou, setToggleMoreAboutYou] = useState(false)
    const [toggleTransaction, setToggleTransaction] = useState(true)

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
        <div className='w-[83%] py-[40px] pl-[109px] pr-[61px] font-Grotesk'>
            <div className='flex items-center justify-end mb-[103px] font-Grotesk'>
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
                <h3 className='mb-[8px] text-textColor text-[20px] font-bold'>Settings</h3>
                <p className='text-textColor2'>Select the kind of notifications you get about your activities and our products.</p>
            </div>
            <div className='w-[90%] h-[1px] bg-primaryColor/25 mb-[32px] mt-[16px]'></div>
            <div className='flex items-start w-[820px] h-[290px] gap-[134px]'>
                <div className='w-[250px]'>
                    <h4 className='text-[14px] text-textColor mb-[16px] font-bold'>Email notifications</h4>
                    <p className="w-[252px] h-[37px] text-[12px] text-textColor2">Get mails to know what&apos;s New when you are offline. You can turn these off.</p>
                </div>
                <div className='w-[400px] flex flex-col items-start'>
                    <div className='mb-[30px]'>
                        {/* Toggle Button */}
                        <div className='flex items-center justify-center w-full gap-[40px]'>
                            <label htmlFor="toggleNewsUpdate"
                                className={toggleNewsUpdate ? "relative flex items-center cursor-pointer w-[55px] h-[30px] rounded-full transition duration-200 ease-in-out bg-primaryColor" : "relative flex items-center cursor-pointer w-[55px] h-[30px] rounded-full transition duration-200 ease-in-out bg-[#D2E6F3]"}
                            >
                            <span
                                className={toggleNewsUpdate ?
                                "absolute left-0 inline-block w-[25px] h-[25px] transition duration-200 ease-in-out transform rounded-full translate-x-full bg-textColorLight" : "absolute left-0 inline-block w-[25px] h-[25px] transition duration-200 ease-in-out transform rounded-full translate-x-0 bg-textColorLight"}
                            ></span>
                            <input
                                type="checkbox"
                                id='toggleNewsUpdate'
                                className="sr-only"
                                checked={toggleNewsUpdate}
                                onChange={() => setToggleNewsUpdate(!toggleNewsUpdate)}
                            />
                            </label>
                            <div>
                                <h4 className='text-[14px] mb-[8px]'>News and updates</h4>
                                <p className='text-[12px] text-textColor2'>News about products and new features updates.</p>
                            </div>
                        </div>
                    </div>
                    <div className='mb-[30px]'>
                        {/* Toggle Button */}
                        <div className='flex items-center justify-center w-full gap-[40px]'>
                            <label htmlFor="tipsAndTutorial"
                                className={toggleTips ? "relative flex items-center cursor-pointer w-[55px] h-[30px] rounded-full transition duration-200 ease-in-out bg-primaryColor" : "relative flex items-center cursor-pointer w-[55px] h-[30px] rounded-full transition duration-200 ease-in-out bg-[#D2E6F3]"}
                            >
                            <span
                                className={toggleTips ?
                                "absolute left-0 inline-block w-[25px] h-[25px] transition duration-200 ease-in-out transform rounded-full translate-x-full bg-textColorLight" : "absolute left-0 inline-block w-[25px] h-[25px] transition duration-200 ease-in-out transform rounded-full translate-x-0 bg-textColorLight"}
                            ></span>
                            <input
                                type="checkbox"
                                id='tipsAndTutorial'
                                className="sr-only"
                                checked={toggleTips}
                                onChange={() => setToggleTips(!toggleTips)}
                            />
                            </label>
                            <div>
                                <h4 className='text-[14px] mb-[8px]'>Tips and tutorials</h4>
                                <p className='text-[12px] text-textColor2'>Tips on getting more out of PRATEVE</p>
                            </div>
                        </div>
                    </div>
                    <div className='mb-[30px]'>
                        {/* Toggle Button */}
                        <div className='flex items-center justify-center w-full gap-[40px]'>
                            <label htmlFor="unifinishedTransaction"
                                className={toggleUnifinishedTransaction ? "relative flex items-center cursor-pointer w-[55px] h-[30px] rounded-full transition duration-200 ease-in-out bg-primaryColor" : "relative flex items-center cursor-pointer w-[55px] h-[30px] rounded-full transition duration-200 ease-in-out bg-[#D2E6F3]"}
                            >
                            <span
                                className={toggleUnifinishedTransaction ?
                                "absolute left-0 inline-block w-[25px] h-[25px] transition duration-200 ease-in-out transform rounded-full translate-x-full bg-textColorLight" : "absolute left-0 inline-block w-[25px] h-[25px] transition duration-200 ease-in-out transform rounded-full translate-x-0 bg-textColorLight"}
                            ></span>
                            <input
                                type="checkbox"
                                id='unifinishedTransaction'
                                className="sr-only"
                                checked={toggleUnifinishedTransaction}
                                onChange={() => setToggleUnifinishedTransaction(!toggleUnifinishedTransaction)}
                            />
                            </label>
                            <div>
                                <h4 className='text-[14px] mb-[8px]'>Unfinished transactions</h4>
                                <p className='text-[12px] text-textColor2'>Notifications on unfinished transactions</p>
                            </div>
                        </div>
                    </div>
                    <div className='mb-[30px]'>
                        {/* Toggle Button */}
                        <div className='flex items-center justify-center w-full gap-[40px]'>
                            <label htmlFor="reminderNotification"
                                className={toggleReminderNotification ? "relative flex items-center cursor-pointer w-[55px] h-[30px] rounded-full transition duration-200 ease-in-out bg-primaryColor" : "relative flex items-center cursor-pointer w-[55px] h-[30px] rounded-full transition duration-200 ease-in-out bg-[#D2E6F3]"}
                            >
                            <span
                                className={toggleReminderNotification ?
                                "absolute left-0 inline-block w-[25px] h-[25px] transition duration-200 ease-in-out transform rounded-full translate-x-full bg-textColorLight" : "absolute left-0 inline-block w-[25px] h-[25px] transition duration-200 ease-in-out transform rounded-full translate-x-0 bg-textColorLight"}
                            ></span>
                            <input
                                type="checkbox"
                                id='reminderNotification'
                                className="sr-only"
                                checked={toggleReminderNotification}
                                onChange={() => setToggleReminderNotification(!toggleReminderNotification)}
                            />
                            </label>
                            <div>
                                <h4 className='text-[14px] mb-[8px]'>Reminders</h4>
                                <p className='text-[12px] text-textColor2'>Notifications to remind you of updates you might have missed.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[90%] h-[1px] bg-primaryColor/25 mb-[32px] mt-[32px]'></div><div className='flex items-start w-[820px] h-[290px] gap-[134px]'>
                <div className='w-[250px]'>
                    <h4 className='text-[14px] text-textColor mb-[16px] font-bold'>Push notifications</h4>
                    <p className="w-[252px] h-[37px] text-[12px] text-textColor2">Get push notifications in-website to find out what is going on when you are online.</p>
                </div>
                <div className='w-[400px] flex flex-col items-start'>
                <div className='mb-[30px]'>
                        {/* Toggle Button */}
                        <div className='flex items-center justify-center w-full gap-[40px]'>
                            <label htmlFor="reminderDeadline"
                                className={toggleReminderDeadline ? "relative flex items-center cursor-pointer w-[55px] h-[30px] rounded-full transition duration-200 ease-in-out bg-primaryColor" : "relative flex items-center cursor-pointer w-[55px] h-[30px] rounded-full transition duration-200 ease-in-out bg-[#D2E6F3]"}
                            >
                            <span
                                className={toggleReminderDeadline ?
                                "absolute left-0 inline-block w-[25px] h-[25px] transition duration-200 ease-in-out transform rounded-full translate-x-full bg-textColorLight" : "absolute left-0 inline-block w-[25px] h-[25px] transition duration-200 ease-in-out transform rounded-full translate-x-0 bg-textColorLight"}
                            ></span>
                            <input
                                type="checkbox"
                                id='reminderDeadline'
                                className="sr-only"
                                checked={toggleReminderDeadline}
                                onChange={() => setToggleReminderDeadline(!toggleReminderDeadline)}
                            />
                            </label>
                            <div>
                                <h4 className='text-[14px] mb-[8px]'>Reminders</h4>
                                <p className='text-[12px] text-textColor2'>Notifications to remind you of deadlines</p>
                            </div>
                        </div>
                    </div>
                    <div className='mb-[30px]'>
                        {/* Toggle Button */}
                        <div className='flex items-center justify-center w-full gap-[40px]'>
                            <label htmlFor="moreAboutYou"
                                className={toggleMoreAboutYou ? "relative flex items-center cursor-pointer w-[55px] h-[30px] rounded-full transition duration-200 ease-in-out bg-primaryColor" : "relative flex items-center cursor-pointer w-[55px] h-[30px] rounded-full transition duration-200 ease-in-out bg-[#D2E6F3]"}
                            >
                            <span
                                className={toggleMoreAboutYou ?
                                "absolute left-0 inline-block w-[25px] h-[25px] transition duration-200 ease-in-out transform rounded-full translate-x-full bg-textColorLight" : "absolute left-0 inline-block w-[25px] h-[25px] transition duration-200 ease-in-out transform rounded-full translate-x-0 bg-textColorLight"}
                            ></span>
                            <input
                                type="checkbox"
                                id='moreAboutYou'
                                className="sr-only"
                                checked={toggleMoreAboutYou}
                                onChange={() => setToggleMoreAboutYou(!toggleMoreAboutYou)}
                            />
                            </label>
                            <div>
                                <h4 className='text-[14px] mb-[8px]'>More about you</h4>
                                <p className='text-[12px] text-textColor2'>Notifications about you.</p>
                            </div>
                        </div>
                    </div>
                    <div className='mb-[30px]'>
                        {/* Toggle Button */}
                        <div className='flex items-center justify-center w-full gap-[40px]'>
                            <label htmlFor="transaction"
                                className={toggleTransaction ? "relative flex items-center cursor-pointer w-[55px] h-[30px] rounded-full transition duration-200 ease-in-out bg-primaryColor" : "relative flex items-center cursor-pointer w-[55px] h-[30px] rounded-full transition duration-200 ease-in-out bg-[#D2E6F3]"}
                            >
                            <span
                                className={toggleTransaction ?
                                "absolute left-0 inline-block w-[25px] h-[25px] transition duration-200 ease-in-out transform rounded-full translate-x-full bg-textColorLight" : "absolute left-0 inline-block w-[25px] h-[25px] transition duration-200 ease-in-out transform rounded-full translate-x-0 bg-textColorLight"}
                            ></span>
                            <input
                                type="checkbox"
                                id='transaction'
                                className="sr-only"
                                checked={toggleTransaction}
                                onChange={() => setToggleTransaction(!toggleTransaction)}
                            />
                            </label>
                            <div>
                                <h4 className='text-[14px] mb-[8px]'>Transactions</h4>
                                <p className='text-[12px] text-textColor2'>Notifications on unfinished transactions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Main>
  )
}

export default Settings
