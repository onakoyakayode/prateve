import React, { ReactNode } from 'react'
import Aside from '../Aside';

type MainProps = {
    children: ReactNode;
}

const Main: React.FC<MainProps> = ({children}) => {
  return (
    <div className='w-[100%] h-full flex justify-between items-start relative'>
      <Aside />
      <main className='w-[100%] py-[0px] px-[0px] bg-secondaryColor h-screen left-[10%] md:left-[17%] relative'>{children}</main>
    </div>
  )
}

export default Main;
