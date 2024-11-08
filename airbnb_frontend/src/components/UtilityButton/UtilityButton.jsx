import React from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types';
import styles from './UtilityButton.module.scss'

const cx = classNames.bind(styles)

const UtilityButton = ({ onClick, disabled, outline, icon : Icon }) => {
  return (
    <button 
      disabled={disabled}
      onClick={onClick}
      className={`
        relative
        rounded-full
        border-none
        p-3
        bg-gray-100
        cursor-pointer
        hover:bg-gray-200
      `}>
        <Icon className={cx('icon')} size={22}/>
    </button>
  )
}

UtilityButton.propTypes = {
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    outline: PropTypes.bool,
    icon: PropTypes.elementType.isRequired,
  };

export default UtilityButton
