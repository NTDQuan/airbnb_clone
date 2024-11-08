import React from 'react'
import classNames from 'classnames/bind'
import styles from './CategoryItem.module.scss'

const cx = classNames.bind(styles)

const CategoryItem = ({ label, icon : Icon, onSelect, isSelected }) => {
  const handleClick = () => {
    onSelect(label);
  }

  return (
    <div className="flex-[0_1_calc(33%_-_6px)] md:flex-[0_1_calc(33%_-_9px)]">
      <button 
        onClick={handleClick} 
        className={`
          rounded-lg
          cursor-pointer
          p-4
          flex-col
          items-start
          flex
          w-full
          h-full
          min-h-[68px]
          justify-between
          outline-[none]
          md:min-h-[88px]
          hover:border-transparent
          hover:shadow-[0_0_0_2px_black]
          ${isSelected ? 'border-transparent shadow-[0_0_0_2px_black]' : 'border-[1px] border-[solid] border-[#DDDDDD]'}
        `} 
      >
        <div>
          <Icon size={40}/>
        </div>
        <div className="flex flex-col break-words text-left md:justify-center md:items-center">
          <div className="text-base font-medium text-gray-900">{label}</div>
        </div>
      </button>
    </div>
  )
}

export default CategoryItem
