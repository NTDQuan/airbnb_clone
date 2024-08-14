import React, { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './DefaultLayout.module.scss'
import HomeHeader from '../../../components/Header/HomeHeader/HomeHeader'
import RegisterModal from '../../../components/Modal/RegisterModal/RegisterModal'
import ToastProvider from '../../../providers/ToastProvider'
import LoginModal from '../../../components/Modal/LoginModal/LoginModal'

const cx = classNames.bind(styles)

const DefaultLayout = ({ children, currentUser }) => {
  return (
    <div className={cx('wrapper')}>
        <LoginModal/>
        <ToastProvider/>
        <RegisterModal/>
        <HomeHeader currentUser={currentUser}/>
        {children}
    </div>
  )
}

export default DefaultLayout
