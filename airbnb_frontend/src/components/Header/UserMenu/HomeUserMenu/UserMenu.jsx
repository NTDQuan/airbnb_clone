import React, { useState, useCallback } from 'react'

import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from '../Avatar/Avatar'
import MenuItem from '../MenuItem/MenuItem'
import useRegisterModal from '../../../../hooks/useRegisterModal'
import useLoginModal from '../../../../hooks/useLoginModal'
import useUserData from '../../../../hooks/useUserData'
import { useNavigate } from 'react-router-dom'

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
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div 
          className="
            hidden
            md:block
            text-sm
            font-semibold
            py-3
            px-4
            rounded-full
            hover:bg-neutral-100
            transition
            cursor-pointer
          "
        >
          Airbnb your home
        </div>
        <div 
          onClick={toggleOpen}
          className="
            p-4
            md:py-1
            md:px-2
            border-[1px]
            border-neutral-200
            flex
            flex-row
            items-center
            gap-3
            rounded-full
            cursor-pointer
            hover:shadow-md
            transition
          "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div 
          className="
            absolute 
            rounded-xl
            shadow-md
            w-[40vw]
            md:w-3/4
            bg-white
            overflow-hidden
            right-0
            top-12
            text-sm
          "
        >
          <div 
            className="
              flex
              flex-col
              cursor-pointer
            "
          >
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
