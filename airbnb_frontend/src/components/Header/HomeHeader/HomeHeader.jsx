import React from 'react'
import classNames from 'classnames/bind'
import styles from './HomeHeader.module.scss'
import images from '../../../assets/image/image'
import Container from '../Container/Container'
import Logo from '../Logo/Logo'
import SearchBar from '../SearchBar/SearchBar'
import UserMenu from '../UserMenu/HomeUserMenu/UserMenu'
import CategoryFilter from '../../CategoryFilter/CategoryFilter'

const cx = classNames.bind(styles)

const HomeHeader = ({ currentUser }) => {
  return (
    <div className={cx('wrapper')}>
        <div className={cx('container')}>
            <Container>
              <div className={cx('contain')}>
                <Logo/>
                <SearchBar/>
                <UserMenu currentUser={currentUser}/>
              </div>
              <CategoryFilter/>
            </Container>
        </div>
    </div>
  )
}

export default HomeHeader
