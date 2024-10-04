import React from 'react'
import classNames from 'classnames/bind'
import styles from './HeartButton.module.scss'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const cx = classNames.bind(styles)

const HeartButton = ({ listingId, currentUser }) => {
  const hasFavorited = false;
  const toggleFavorite = () => {};

  return (
    <div className={cx('wrapper')}>
      <AiOutlineHeart className={cx('heart-icon')} size={28}/>
      <AiFillHeart size={24} className={cx('heart-icon-filled', { 'active': hasFavorited })}/>
    </div>
  )
}

export default HeartButton
