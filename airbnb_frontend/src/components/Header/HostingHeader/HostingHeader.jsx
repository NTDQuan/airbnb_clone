import React from 'react'
import classNames from 'classnames/bind'
import styles from './HostingHeader.module.scss'
import Container from '../Container/Container'
import Logo from '../Logo/Logo'
import NavBar from '../NavBar/NavBar'
import HostingUserMenu from '../UserMenu/HostingUserMenu/HostingUserMenu'

const cx = classNames.bind(styles)

const HostingHeader = () => {
  return (
    <div className={cx('wrapper')}>
        <div className={cx('container')}>
            <Container>
                <div className={cx('contain')}>
                    <Logo/>
                    <NavBar/>     
                    <HostingUserMenu/>               
                </div>
            </Container>
        </div>
    </div>
  )
}

export default HostingHeader
