import React from 'react'
import classNames from 'classnames/bind'
import styles from './MenuItem.module.scss'

const cx = classNames.bind(styles)

const MenuItem = ({onClick, label}) => {
  return (
    <div 
      onClick={onClick} 
      className="
        px-4
        py-3
        hover:bg-neutral-100
        transition
        font-semibold
      "
    >
      {label}
    </div>
  )
}

export default MenuItem
