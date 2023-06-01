import React, { FC, useEffect, useRef, useState } from 'react'

interface Props{}

let currentOTPIndex: number = 0;

const Otp: FC<Props> = (props):JSX.Element => {

    const [otp, setOtp] = useState<string[]>(new Array(6).fill(""))
    const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0)

    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = target;
        const newOTP: string[] = [...otp];
        newOTP[currentOTPIndex] = value.substring(value.length - 1);


        if(!value)  setActiveOTPIndex(currentOTPIndex - 1)
        else setActiveOTPIndex(currentOTPIndex + 1)

        setOtp(newOTP);
    }

    const handleOneKeyDown = ({key}: React.KeyboardEvent<HTMLInputElement>, index: number) => 
    {
        currentOTPIndex = index
        if(key === "Backspace") setActiveOTPIndex(currentOTPIndex - 1);
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, [activeOTPIndex])

  return (
    <div>
      <div className='flex justify-center gap-[10px] items-center w-[100%]'>
        {otp.map((_, index) => {
            return (
              <React.Fragment key={index}>
                  <input 
                      ref={index === activeOTPIndex ? inputRef : null}
                      type='number'
                      className='w-[30px] md:w-[40px] h-[30px] md:h-[40px] text-center font-semibold text-textColor2 border rounded-[3px] bg-transparent border-textColor2/40 focus:outline-none text-[14px] md:text-[15px] transition spin-button-none'
                      onChange={handleChange}
                      onKeyDown={(e) => handleOneKeyDown(e, index)}
                      value={otp[index]}
                  />
              </React.Fragment>
            )
        })}
      </div>
    </div>
  )
}

export default Otp
