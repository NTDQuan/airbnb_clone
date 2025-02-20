import React, { useMemo } from 'react'
import classNames from 'classnames/bind'
import styles from './ListingCard.module.scss'
import { useNavigate } from 'react-router-dom'
import noImage from '../../assets/image/no_image.jpg'
import HeartButton from '../HeartButton/HeartButton'

const cx = classNames.bind(styles)

const ListingCard = ({ homestay, reservation, onAction, disable, actionLabel, actionId, currentUser }) => {
  const navigate = useNavigate();

  return (
    <div className="col-span-1 cursor-pointer group"
      onClick={() => navigate(`/rooms/${homestay.id}`)}
    >
      <div className="flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <img 
            src={homestay.image ? homestay.image : "https://placehold.co/600x400"} 
            alt="No Available"
            className='
              object-cover
              w-full
              h-full
              group-hover:scale-110
              transition
            '
          />
          <div className="absolute top-3 right-3">
            <HeartButton listingId={homestay.id} currentUser={currentUser}/>
          </div>
        </div>
        <div className='font-semibold text-lg'>
          {homestay.city}, {homestay.country}
        </div>
        <div className='font-light text-neutral-500'>
          {homestay.type}
        </div>
        <div className='flex flex-row items-center gap-1'>
          <div className='font-semibold'>
            $ {homestay.defaultPrice}
          </div>
          <div className='font-light'>night</div>
        </div>
      </div>
    </div>
  )
}

export default ListingCard
