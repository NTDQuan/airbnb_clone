import React from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types';
import styles from './Input.module.scss'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { BiDollar } from 'react-icons/bi';

const cx = classNames.bind(styles)

const Input = ({id, label, type, disabled, formatPrice, required, register, errors}) => {
  return (
    <div className={cx('wrapper')}>
      {formatPrice && (
        <BiDollar size={24} className={cx('icon')}/>
      )}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder={label}
        type={type}
        className={cx('input', { disabled: disabled }, { formatPrice: formatPrice }, {errors: errors[id]})}
      />
    </div>
  )
}

Input.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    formatPrice: PropTypes.bool,
    required: PropTypes.bool,
    register: PropTypes.func,
    error: PropTypes.object
}

export default Input
