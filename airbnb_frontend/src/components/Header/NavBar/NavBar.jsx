import React, {useState} from 'react'
import classNames from 'classnames/bind'
import styles from './NavBar.module.scss'

import NavBarItem from './NavBarItem/NavBarItem'
import { NavBarData } from './NavBarItem/NavBarData'

const cx = classNames.bind(styles)

const NavBar = () => {
    const [selectedPage, setSelectedPage] = useState("Hôm nay");

    return (
        <div className={cx(styles.wrapper)}>
            {NavBarData && NavBarData.map((item) =>(
                <NavBarItem
                    label={item.label}
                    path={item.path}
                    selected={item.label === selectedPage}
                    onClick={() => setSelectedPage(item.label)}
                />
            ))}
        </div>
    )
}

export default NavBar
