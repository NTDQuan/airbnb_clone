import React from 'react'
import classNames from 'classnames/bind'
import styles from './CategoryItem.module.scss'

const cx = classNames.bind(styles)

const CategoryItem = ({ label, icon : Icon, onSelect, isSelected }) => {
  const handleClick = () => {
    onSelect(label);
  }

  return (
    <div className={cx('wrapper')}>
      <button className={cx('category-button', { 'selected': isSelected })} onClick={handleClick}>
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

export default CategoryItem
