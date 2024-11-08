import React, { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './DefaultLayout.module.scss'
import HomeHeader from '../../../components/Header/HomeHeader/HomeHeader'
import RegisterModal from '../../../components/Modal/RegisterModal/RegisterModal'
import ToastProvider from '../../../providers/ToastProvider'
import LoginModal from '../../../components/Modal/LoginModal/LoginModal'
import { Outlet } from 'react-router-dom'
import CategoryFilter from '../../../components/CategoryFilter/CategoryFilter'

const cx = classNames.bind(styles)

const DefaultLayout = ({ children, currentUser }) => {
  return (
    <div>
        <LoginModal/>
        <ToastProvider/>
        <RegisterModal/>
        <HomeHeader currentUser={currentUser}/>
        <div className="pb-20 pt-[181px]">
          <Outlet/>
        </div>
        
    </div>
  )
}

export default DefaultLayout
