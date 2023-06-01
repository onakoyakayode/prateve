import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


type DropdownProps = {
    options: string[];
};

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
    const [open, setOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('')

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
    }

  return (
    <div className=''>
      <button className='flex items-center font-Grotesk text-primaryColor ' onClick={() => setOpen(!open)}>
        {selectedOption || 'Months'}
        <ArrowDropDownIcon />
      </button> 
      {open && (
        <ul>
            {options.map((option) => (
                <li key={option} onClick={() => handleOptionSelect(option)}>
                    {option}
                </li>
            ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
