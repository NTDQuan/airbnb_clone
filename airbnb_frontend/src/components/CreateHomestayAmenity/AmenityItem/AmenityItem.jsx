import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './AmenityItem.module.scss'

const cx = classNames.bind(styles)

const AmenityItem = ({ label, icon : Icon, id, onSelect, isSelected }) => {
  const handleClick = () => {
    onSelect(id);
  }

  return (
    <div className="w-full md:flex-1 md:basis-[calc(33%-10px)]">
      <button
        className={`rounded-lg border ${isSelected ? 'border-transparent shadow-[0_0_0_2px_black]' : 'border-gray-300'} bg-white cursor-pointer p-4 flex flex-col w-full h-full min-h-[68px] justify-between items-start outline-none hover:border-transparent hover:shadow-[0_0_0_2px_black] md:min-h-[88px]`}
        onClick={handleClick}
      >
        <div className="w-[45px] h-[45px] flex items-center">
          <Icon size={40} />
        </div>
        <div className="text-left flex flex-col break-words md:justify-center md:items-center">
          <div className="text-lg leading-5 font-medium text-[#222222]">
            {label}
          </div>
        </div>
      </button>
    </div>
  );
}

export default AmenityItem
