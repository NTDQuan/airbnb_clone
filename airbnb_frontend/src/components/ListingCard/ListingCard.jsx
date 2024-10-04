import React, { useMemo } from 'react'
import classNames from 'classnames/bind'
import styles from './ListingCard.module.scss'
import noImage from '../../assets/image/no_image.jpg'
import HeartButton from '../HeartButton/HeartButton'

const cx = classNames.bind(styles)

const ListingCard = () => {


  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('image-container')}>
          <img src={noImage} alt="No Available"/>
          <div className={cx('favorite-container')}>
            <HeartButton/>
          </div>
        </div>
        <div className={cx('location-container')}>
          HCM, VietNam
        </div>
        <div className={cx('category-container')}>
          Beach
        </div>
        <div className={cx('price-container')}>
          <div className={cx('price')}>
            $ 500
          </div>
          <div className='text'>night</div>
        </div>
      </div>
    </div>
  )
}

export default ListingCard
