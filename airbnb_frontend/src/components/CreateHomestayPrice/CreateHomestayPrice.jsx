import React, { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './CreateHomestayPrice.module.scss'

const cx = classNames.bind(styles)

const CreateHomestayPrice = ({ onPriceChange }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    const newValue = e.target.value;
    // Allow only numeric values
    if (/^\d*$/.test(newValue)) {
      setValue(newValue);
    }
  };

  useEffect(() => {
    console.log('price render')
    onPriceChange({ price: value });
  }, [value, onPriceChange])

  return (
    <div className="w-full flex items-center justify-center">
        <div className="w-auto flex flex-row">
          <div className="relative 
            border-[none] 
            font-bold 
            inline-block
            text-6xl
            md:text-9xl
            ">
            $
          </div>
          <input
              inputMode="numeric"
              type="text"
              autoComplete="off"
              value={value}
              onChange={handleChange}
              className="
                relavtive
                border-[none]
                font-bold
                inline-block
                text-6xl
                break-all
                w-[600px]
                max-w-full
                box-border
                md:text-9xl
                focus:outline-none
              "
          />
      </div>
      <div className={cx('detail')}>

      </div>
    </div>
  )
}

export default CreateHomestayPrice
