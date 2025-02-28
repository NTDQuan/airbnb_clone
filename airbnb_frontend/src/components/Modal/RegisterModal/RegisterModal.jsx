import React, { useState } from 'react'
import axios from 'axios'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types';
import {  SubmitHandler, useForm } from 'react-hook-form'
import styles from './RegisterModal.module.scss'

import Modal from '../Modal'

import useRegisterModal from '../../../hooks/useRegisterModal'
import Heading from '../../Heading/Heading';
import Input from '../../Input/Input';
import toast from 'react-hot-toast';
import Button from '../../Button/button';

const cx = classNames.bind(styles)

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    }
  });

  const onSubmit = (data) => {
    setIsLoading(true);
    axios.post('http://localhost:8080/api/auth/register', data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((errors) => {
        toast.error('Something went wrong!')
      }) 
      .finally(() => {
        setIsLoading(false);
      })
  }

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
        id="name"
        label="Name"
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
      isOpen={registerModal.isOpen}
      title="Đăng kí"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default RegisterModal
