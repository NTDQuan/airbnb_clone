import React from 'react'
import classNames from 'classnames/bind'
import styles from './DefaultLayout.module.scss'
import HomeHeader from '../../../components/Header/HomeHeader/HomeHeader'
import Home from '../../Home/Home'
import Modal from '../../../components/Modal/Modal'
import RegisterModal from '../../../components/Modal/RegisterModal/RegisterModal'

const cx = classNames.bind(styles)

const DefaultLayout = () => {
  return (
    <div className={cx('wrapper')}>
        <HomeHeader/>     
    </div>
  )
}

export default DefaultLayout
