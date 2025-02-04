import React , {useState} from 'react'
import GuestPickerMenu from './GuestPickerMenu';

const GuestPicker = ({ adults, children, setAdults, setChildren }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='
        relative
        flex
        w-full
        text-base
        leading-[1.25rem]
        font-normal
        border
        border-black
        rounded-lg
        font-inherit
    '>
        <label className='
            relatvie
            flex
            flex-1
            w-full
            overflow-hidden
            '
            onClick={toggleMenu}
        >
            <div className='
                absolute
                top-[12px] 
                left-[12px] 
                right-[12px]
                text-[0.625rem]
                leading-[0.75rem]
                uppercase
                font-bold
                w-full
                overflow-hidden
                truncate
                whitespace-nowrap
            '>
                Guests
            </div>  
            <div className='
                min-h-[56px]
                w-full
                pt-[26px] pr-[36px] pb-[10px] pl-[12px]
                bg-transparent
                cursor-pointer
                overflow-hidden
                truncate
                whitespace-normal
            '>
                <div className='
                    font-[0.875rem]
                    leading-[1.125rem]
                '>
                    <span className='whitespace-nowrap'>{adults + children} guest{adults + children > 1 ? 's' : ''}</span>
                </div>
            </div>  
        </label> 
        {isMenuOpen && <GuestPickerMenu adults={adults} children={children} setAdults={setAdults} setChildren={setChildren} />}
    </div>
  )
}

export default GuestPicker
