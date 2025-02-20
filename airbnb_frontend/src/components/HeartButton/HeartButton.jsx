import React from 'react'
import classNames from 'classnames/bind'
import styles from './HeartButton.module.scss'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import useFavourite from '../../hooks/useFavourite';

const cx = classNames.bind(styles)

const HeartButton = ({ listingId, currentUser }) => {
  const { hasFavourited, toggleFavourite } = useFavourite({ currentUser, listingId });

  return (
    <div 
      onClick={toggleFavourite}
      className='
        relative
        hover-opacity-80
        transition
        cursor-pointer
      '
    >
      <AiOutlineHeart 
        size={28} 
        className="
          fill-white
          absolute
          -top-[2px]
          -right-[2px]
        "
      />
      <AiFillHeart 
        size={24} 
        className={
          hasFavourited ? 'fill-rose-500' : 'fill-neutral-500/70'
        }
      />
    </div>
  )
}

export default HeartButton
