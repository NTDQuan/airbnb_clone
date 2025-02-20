import React from 'react'
import Avatar from '../Header/UserMenu/Avatar/Avatar'
import ListingCategory from './ListingCategory'

const ClientHomestayInfo = ({user, description, guestCount, roomCount, bathroomCount, category}) => {
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
                <div>Hosted by {user?.username}</div>
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
                    {guestCount} guests
                </div>
                <div>
                    {roomCount} rooms
                </div>
                <div>
                    {bathroomCount} bathrooms
                </div>
            </div>
        </div>   
        <hr/> 
        {category && (
            <ListingCategory
                label={category}
            /> 
        )}
        <hr/>
        <div className='text-lg font-light text-neutral-500'>
            {description}
        </div>
    </div>
  )
}

export default ClientHomestayInfo
