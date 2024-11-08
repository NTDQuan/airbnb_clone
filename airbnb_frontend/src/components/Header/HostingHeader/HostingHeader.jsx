import React from 'react'
import classNames from 'classnames/bind'
import styles from './HostingHeader.module.scss'
import Container from '../../Container/Container'
import Logo from '../Logo/Logo'
import NavBar from '../NavBar/NavBar'
import HostingUserMenu from '../UserMenu/HostingUserMenu/HostingUserMenu'

const cx = classNames.bind(styles)

const HostingHeader = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="
              flex
              flex-row
              items-center
              justify-between
              gap-3
              md:gap-0">
            <Logo />
            <NavBar />
            <HostingUserMenu />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default HostingHeader
