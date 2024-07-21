import React, { useState, useCallback } from 'react'
import classNames from 'classnames/bind'
import styles from './UserMenu.module.scss'

import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from './Avatar/Avatar'
import MenuItem from './MenuItem/MenuItem'

const cx = classNames.bind(styles)
const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value)
  }, [])

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('air-home-btn')}>
          Cho thuê chỗ ở qua Airbnb
        </div>
        <div className={cx('user-menu')} onClick={toggleOpen}> 
          <AiOutlineMenu/>
          <div className={cx('avatar')}>
            <Avatar/>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className={cx('user-menu-dropdown')}>
          <div className={cx('user-menu-dropdown-content')}>
            <>
              <MenuItem
                onClick={() => {}}
                label="Đăng nhập"
              />
              <MenuItem
                onClick={() => {}}
                label="Đăng ký"
              />
            </>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu
