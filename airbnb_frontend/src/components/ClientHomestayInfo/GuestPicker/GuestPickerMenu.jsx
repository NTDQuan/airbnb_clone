import React, { useState } from 'react'
import GuestPickerMenuItem from './GuestPickerMenuItem'

const GuestPickerMenu = ({ adults, children, setAdults, setChildren }) => {

  return (
    <div className='
        bg-white
        rounded-sm
        custom-shadow
        mb-4  
        p-4
        absolute
        text-left
        w-full
        z-40
        min-w-[280px]
        top-full 
        left-0
        mt-1
    '>
      <div>
        <GuestPickerMenuItem 
          title='Adults' 
          subtitle='Age 13+' 
          defaultNumber={1} 
          onNumberChange={(num) => setAdults(num)}
        />
        <GuestPickerMenuItem 
          title='Children' 
          subtitle='Under 12' 
          defaultNumber={0}
          onNumberChange={(num) => setChildren(num)}
        />
      </div>
    </div>
  )
}

export default GuestPickerMenu
