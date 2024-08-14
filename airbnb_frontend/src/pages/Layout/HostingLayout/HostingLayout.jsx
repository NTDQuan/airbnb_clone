import React, { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './HostingLayout.module.scss'
import HostingHeader from '../../../components/Header/HostingHeader/HostingHeader'
import { Outlet } from 'react-router-dom'

const cx = classNames.bind(styles)

const HostingLayout = ({ children, currentUser }) => {

    return (
        <div className={cx('wrapper')}>
            <HostingHeader currentUser={currentUser} />
            <div className={cx('content')}>
                <Outlet />
            </div>
            
        </div>
    )
}

export default HostingLayout
