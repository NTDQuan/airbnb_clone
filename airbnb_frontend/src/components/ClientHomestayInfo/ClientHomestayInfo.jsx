import React from 'react'
import Avatar from '../Header/UserMenu/Avatar/Avatar'
import ListingCategory from './ListingCategory'

const ClientHomestayInfo = () => {
  return (
    <div className='col-span-4 flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
            <div className='
                text-xl
                font-semibold
                flex
                flex-row
                items-center
                gap-2
            '    
            >
                <div>Hosted by admin</div>
                <Avatar/>
            </div>
            <div className='
                flex
                flex-grow
                items-center
                gap-4
                font-light
                text-neutral-500
            '>
                <div>
                    2 guest
                </div>
                <div>
                    2 rooms
                </div>
                <div>
                    2 bathrooms
                </div>
            </div>
        </div>   
        <hr/>
        {/*<div className='*/}
        <hr/> 
        <ListingCategory/>
        <hr/>
        <div className='text-lg font-light text-neutral-500'>
            Test description
        </div>
    </div>
  )
}

export default ClientHomestayInfo
