import React, { useState, useEffect } from 'react'
import axios from 'axios'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types';
import {  SubmitHandler, useForm } from 'react-hook-form'
import styles from './LoginModal.module.scss'
import useSignIn from 'react-auth-kit/hooks/useSignIn'

import Modal from '../Modal'

import useRegisterModal from '../../../hooks/useRegisterModal'
import Heading from '../../Heading/Heading';
import Input from '../../Input/Input';
import toast from 'react-hot-toast';
import Button from '../../Button/button';
import useLoginModal from '../../../hooks/useLoginModal';
import fetchUserInfo from '../../../actions/fetchUserInfo'; 
import { useNavigate } from 'react-router-dom';
import { act } from 'react';
import useUserData from '../../../hooks/useUserData';

const cx = classNames.bind(styles)

const LoginModal = () => {
  const registerModal = useRegisterModal();
  const signIn = useSignIn()
  const loginModal = useLoginModal();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const userState = useUserData();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    }
  });

  useEffect(() => {
    async function autoLogin() {
      try {
        const res = await axios({
          method: 'get',
          url: 'http://localhost:8080/api/auth/auto-login',
          withCredentials: true,
        });

        if (res.status === 200) {
          userState.onLogin(await fetchUserInfo());
        } else {
          navigate('/');
        }
      } catch (error) {
        console.error('Error during auto-login:', error);
        navigate('/');
      }
    }
    autoLogin();
  }, []);

  const onSubmit = (data) => {
    setIsLoading(true);
    axios.post('http://localhost:8080/api/auth/login', data, { withCredentials: true })
        .then(async (res) => {
            setIsLoading(false);
            if (res.status === 200) {
              userState.onLogin(await fetchUserInfo());
              toast.success('Đăng nhập thành công');
              loginModal.onClose();
            } else {
              toast.error('Sai tài khoản hoặc mật khẩu');            
            }
        })
        .catch((error) => {
            setIsLoading(false);
            toast.error('Đã xảy ra lỗi khi đăng nhập');
            console.error('Error logging in:', error);
        });
  };

  const bodyContent = (
    <div className={cx('wrapper')}>
      <Heading
        title="Chào mừng bạn đến với Airbnb"
      />
      <Input 
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input 
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  )

  const footerContent = (
    <div className={cx('footer-wrapper')}>
      <hr/>
        <div className={cx('to-login-container')}>
          <div className={cx('to-login-content')}>
            <div>
              Đã có tài khoản ?
            </div>
            <div className={cx('to-login-text')} onClick={registerModal.onClose}>
              Đăng nhập
            </div>
          </div>
        </div>
    </div>
  )


  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Đăng nhập"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default LoginModal
