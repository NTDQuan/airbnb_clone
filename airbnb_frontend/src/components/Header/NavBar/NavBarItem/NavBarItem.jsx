import React from 'react'
import classNames from 'classnames/bind'
import styles from './NavBarItem.module.scss'
import { useNavigate } from 'react-router-dom'


const cx = classNames.bind(styles)

const NavBarItem = ({ label, onClick, selected, path }) => {
    const navigate = useNavigate()

    return (
        <button className={`
            relative
            rounded-full
            px-4
            py-[10px]
            border-none
            bg-transparent
            text-sm
            font-medium
            cursor-pointer
            text-gray-500
            ${selected ? 'text-gray-900 font-bold' : 'text-gray-500'}
            hover:bg-gray-100 hidden xl:inline-block
        `} 
                onClick={() => {
                    onClick();
                    navigate(path);
                }}
        
        >
            {label}
        </button>
    )
}

export default NavBarItem
