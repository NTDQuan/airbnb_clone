import React from 'react'
import classNames from 'classnames/bind'
import styles from './MenuItem.module.scss'

const cx = classNames.bind(styles)

const MenuItem = ({onClick, label}) => {
  return (
    <div className={cx('wrapper')} onClick={onClick}>
      {label}
    </div>
  )
}

export default MenuItem
