import React from 'react'
import NumberSelector from '../../NumberSelector/NumberSelector'

const GuestPickerMenuItem = ({title, subtitle, defaultNumber, onNumberChange}) => {
  return (
    <div className='
        mb-6
        mt-2
    '>
        <div className='
            flex
            items-center
            w-full
            font-normal

        '>
            <div className='flex-1'>
                <div className='
                    text-base
                    leading-5
                    pb-1
                    font-semibold
                '>
                    {title}
                </div>
                <div className='text-sm leading-[1.125rem]'>
                    {subtitle}
                </div>
            </div>
            <NumberSelector defaultNumber={defaultNumber} onNumberChange={onNumberChange}/>
        </div>
    </div>
  )
}

export default GuestPickerMenuItem
