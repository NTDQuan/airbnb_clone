import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './AmenityItem.module.scss'

const cx = classNames.bind(styles)

const AmenityItem = ({ label, icon : Icon, id, onSelect, isSelected }) => {
  const handleClick = () => {
    onSelect(id);
  }

  return (
    <div className={cx('wrapper')}>
      <button className={cx('button', { 'selected': isSelected })} onClick={handleClick}>
        <div className={cx('icon')}>
          <Icon size={40}/>
        </div>
        <div className={cx('title')}>
          <div className={cx('title-content')}>{label}</div>
        </div>
      </button>
    </div>
  )
}

export default AmenityItem
