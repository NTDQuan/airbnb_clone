import React, { useState, useCallback } from 'react'
import classNames from 'classnames/bind'
import styles from './HostingUserMenu.module.scss'

import { IoMdNotificationsOutline } from "react-icons/io";
import Avatar from '../Avatar/Avatar';
import MenuItem from '../MenuItem/MenuItem';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles)

const HostingUserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className={cx('wrapper')}>
        <div className={cx('container')}>
            <div className={cx('notification-button')}>
              <button>
                <IoMdNotificationsOutline />
              </button>
            </div>
            <div className={cx('avatar')} onClick={toggleOpen}>
              <Avatar/>
            </div>
        </div>
        {isOpen && (
          <div className={cx('user-menu-dropdown')}>
            <div className={cx('user-menu-dropdown-content')}>
              <>
                <MenuItem
                  onClick={() => {}}
                  label="Hồ sơ"
                />
                <MenuItem
                  onClick={() => {}}
                  label="Tài khoản"
                />
                <MenuItem
                  onClick={() => {
                    navigate('/');
                  }}
                  label="Chuyển sang chế độ du lịch"
                />
                <MenuItem
                  onClick={() => {}}
                  label="Đăng xuất"
                />
              </>
            </div>
          </div>
        )}
    </div>
  )
}

export default HostingUserMenu
