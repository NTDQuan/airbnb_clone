import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './NumberSelector.module.scss'
import { ReactComponent as IncreaseIcon } from '../../asserts/icon/Increase.svg';
import { ReactComponent as DecreaseIcon } from '../../asserts/icon/Decrease.svg';

const cx = classNames.bind(styles)

const NumberSelector = ({ defaultNumber }) => {
  const [number, setNumber] = useState(defaultNumber);

  const handleDecrease = () => {
    setNumber(prevNumber => Math.max(defaultNumber, prevNumber - 1))
  }

  const handleIncrease = () => {
    setNumber(prevNumber => prevNumber + 1);
  }
  
  return (
    <div className={cx('number-selection-wrapper')}>
      <div className={cx('number-selection-container')}>
        <button onClick={handleDecrease} disabled={number === defaultNumber}>
          <DecreaseIcon/>
        </button>
        <div className={cx('number-selection-text')}>
          {number}
        </div>
        <button onClick={handleIncrease}>
          <IncreaseIcon/>
        </button>
      </div>
  </div>
  )
}

export default NumberSelector
