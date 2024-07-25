import React, { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './DefaultLayout.module.scss'
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import HomeHeader from '../../../components/Header/HomeHeader/HomeHeader'
import Home from '../../Home/Home'
import Modal from '../../../components/Modal/Modal'
import RegisterModal from '../../../components/Modal/RegisterModal/RegisterModal'
import ToastProvider from '../../../providers/ToastProvider'
import LoginModal from '../../../components/Modal/LoginModal/LoginModal'

const cx = classNames.bind(styles)

const DefaultLayout = ({ children }) => {
  const authUser = useAuthUser();
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await authUser();
        setCurrentUser(user);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

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
