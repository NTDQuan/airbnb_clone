import React from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { BiDollar } from 'react-icons/bi';

const Input = ({id, label, type, disabled, formatPrice, required, register, errors}) => {
  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar 
          size={24} 
          className="
            text-neutral-700
            absolute
            top-5
            left-2
          "
        />
      )}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder={label}
        type={type}
        className={`
          peer
          w-full
          p-4
          pt-6
          font-light
          bg-white
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          ${formatPrice ? 'pl-9' : 'pl-4'}
          ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
          ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
        `}
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
