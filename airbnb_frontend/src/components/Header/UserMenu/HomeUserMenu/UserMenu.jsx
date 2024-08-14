import React, { useState, useCallback } from 'react'
import classNames from 'classnames/bind'
import styles from './UserMenu.module.scss'

import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from '../Avatar/Avatar'
import MenuItem from '../MenuItem/MenuItem'
import useRegisterModal from '../../../../hooks/useRegisterModal'
import useLoginModal from '../../../../hooks/useLoginModal'
import useUserData from '../../../../hooks/useUserData'
import { useNavigate } from 'react-router-dom'

const cx = classNames.bind(styles)
const UserMenu = ({ currentUser }) => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isOpen, setIsOpen] = useState(false);
  const userState = useUserData();
  const navigate = useNavigate();

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('air-home-btn')}>
          Cho thuê chỗ ở qua Airbnb
        </div>
        <div className={cx('user-menu')} onClick={toggleOpen}>
          <AiOutlineMenu />
          <div className={cx('avatar')}>
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className={cx('user-menu-dropdown')}>
          <div className={cx('user-menu-dropdown-content')}>
            {currentUser ? (
              <>
                <MenuItem
                  onClick={() => {}}
                  label="Tin nhắn"
                />
                <MenuItem
                  onClick={() => {}}
                  label="Thông báo"
                />
                <MenuItem
                  onClick={() => {}}
                  label="Chuyến đi"
                />
                <MenuItem
                  onClick={() => {}}
                  label="Danh sách yêu thích"
                />
                <hr />
                <MenuItem
                  onClick={() => {
                    navigate('/hosting');
                  }}
                  label="Quản lý nhà/phòng cho thuê"
                />
                <MenuItem
                  onClick={() => {}}
                  label="Tài khoản"
                />
                <hr />
                <MenuItem
                  onClick={() => {
                    userState.onLogout();
                    navigate(0);
                  }}
                  label="Đăng xuất"
                />
              </>
            ) : (
              <>
                <MenuItem
                  onClick={loginModal.onOpen}
                  label="Đăng nhập"
                />
                <MenuItem
                  onClick={registerModal.onOpen}
                  label="Đăng ký"
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};


export default UserMenu
