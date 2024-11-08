import React, { useState, useCallback } from 'react'
import classNames from 'classnames/bind'
import styles from './HostingUserMenu.module.scss'

import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineMenu } from 'react-icons/ai'
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
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <button className="
          items-center 
          p-4 
          rounded-full 
          border-[1px] 
          border-[solid] 
          border-[#DDDDDD]
          bg-transparent">
          <IoMdNotificationsOutline />
        </button>
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
          ">
            <AiOutlineMenu />
            <div className="hidden md:block">
              <Avatar />
            </div>
        </div>
      </div>
      {isOpen && (
        <div className="
          absolute 
          rounded-xl
          shadow-md
          w-[40vw]
          md:w-[150%]
          bg-white
          overflow-hidden
          right-0
          top-12
          text-sm
          ">
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem
                onClick={() => { }}
                label="Hồ sơ"
              />
              <MenuItem
                onClick={() => { }}
                label="Tài khoản"
              />
              <MenuItem
                onClick={() => {
                  navigate('/');
                }}
                label="Chuyển sang chế độ du lịch"
              />
              <MenuItem
                onClick={() => { }}
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
