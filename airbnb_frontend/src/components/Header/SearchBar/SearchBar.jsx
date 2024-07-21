import React from 'react'
import classNames from 'classnames/bind'
import styles from './SearchBar.module.scss'

import { BiSearch } from 'react-icons/bi'

const cx = classNames.bind(styles)

const SearchBar = () => {
  return (
    <div className={cx('wrapper')}>
        <div className={cx('container')}>
            <div className={cx('location')}>
                Địa điểm bất kì
            </div>
            <div className={cx('time')}>
                Tuần bất kì
            </div>
            <div className={cx('guest')}>
                <div className={cx('guest_text')}>
                    Thêm khách
                </div>
                <div className={cx('guest_icon')}>
                    <BiSearch size={18}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchBar
