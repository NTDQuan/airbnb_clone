import React from 'react'
import classNames from 'classnames/bind'
import styles from './Logo.module.scss'
import image from '../../../asserts/image/image'

const cx = classNames.bind(styles)

const Logo = () => {
  return (
    <img
    className={cx('wrapper')}
        alt='logo'
        src={image.logo}
    />
  )
}

export default Logo
