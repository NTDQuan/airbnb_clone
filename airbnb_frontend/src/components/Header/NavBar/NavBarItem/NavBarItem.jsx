import React from 'react'
import classNames from 'classnames/bind'
import styles from './NavBarItem.module.scss'
import { useNavigate } from 'react-router-dom'


const cx = classNames.bind(styles)

const NavBarItem = ({ label, onClick, selected, path }) => {
    const navigate = useNavigate()

    return (
        <button className={cx('Nav-bar-item', { selected: selected })} 
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
