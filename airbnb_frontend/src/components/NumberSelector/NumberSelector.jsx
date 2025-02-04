import React, { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './NumberSelector.module.scss'
import { ReactComponent as IncreaseIcon } from '../../assets/icon/Increase.svg';
import { ReactComponent as DecreaseIcon } from '../../assets/icon/Decrease.svg';

const cx = classNames.bind(styles)

const NumberSelector = ({ defaultNumber, onNumberChange }) => {
  const [number, setNumber] = useState(defaultNumber);

  useEffect(() => {
    onNumberChange(number);
  }, [number]);

  const handleDecrease = () => {
    setNumber(prevNumber => Math.max(defaultNumber, prevNumber - 1))
  }

  const handleIncrease = () => {
    setNumber(prevNumber => prevNumber + 1);
  }
  
  return (
    <div className="flex">
      <div className="
        inline-flex
        items-center
        justify-between
        w-[104px]
        h-[32px]
        text-gray-900
        font-base
        font-normal
      ">
        <button 
          onClick={handleDecrease} 
          disabled={number === defaultNumber}
          className="
            border-[#B0B0B0]
            bg-[#FFFFFF]
            cursor-pointer
            m-0
            p-0
            text-center
            border
            rounded-[50%]
            w-[32px]
            h-[32px]
            flex-grow-0 
            flex-shrink-0
            inline-flex
            no-underline
            items-center
            justify-center
            text-gray-500
          "
        >
          <DecreaseIcon/>
        </button>
        <div className={cx('number-selection-text')}>
          {number}
        </div>
        <button 
          onClick={handleIncrease}
          className="
            border-[#B0B0B0]
            bg-[#FFFFFF]
            cursor-pointer
            m-0
            p-0
            text-center
            border
            rounded-[50%]
            w-[32px]
            h-[32px]
            flex-grow-0 
            flex-shrink-0
            inline-flex
            no-underline
            items-center
            justify-center
            text-gray-500
          "
        >
          <IncreaseIcon/>
        </button>
      </div>
  </div>
  )
}

export default NumberSelector
