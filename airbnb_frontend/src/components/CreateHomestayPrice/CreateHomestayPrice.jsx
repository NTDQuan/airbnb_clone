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
    <div className={cx('wrapper')}>
      <div className={cx('price-container')}>
        <div className={cx('price')}>
          <div className={cx('price-sign')}>
            $
          </div>
          <input
              className={cx('price-input')}
              inputMode="numeric"
              type="text"
              autoComplete="off"
              value={value}
              onChange={handleChange}
          />
        </div>
      </div>
      <div className={cx('detail')}>

      </div>
    </div>
  )
}

export default CreateHomestayPrice
