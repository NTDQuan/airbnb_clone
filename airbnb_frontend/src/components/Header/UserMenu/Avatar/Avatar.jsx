import React from 'react'
import classNames from 'classnames/bind'
import images from '../../../../asserts/image/image'
import styles from './Avatar.module.scss'

const cx = classNames.bind(styles)

const Avatar = () => {
  return (
    <img
        src={images.user_icon}
        alt='logo'
        className={cx('wrapper')}
        height="30"
        width="30"
    />
  )
}

export default Avatar
