import React, { useState, useCallback } from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types';
import {  SubmitHandler, useForm } from 'react-hook-form'
import styles from './RegisterModal.module.scss'

import Modal from '../Modal'

import useRegisterModal from '../../../hooks/useRegisterModal'

const cx = classNames.bind(styles)

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    }
  });

  const handleSubmit = () => {};

  return (
    <Modal
      disable={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit}
    />
  )
}

export default RegisterModal
