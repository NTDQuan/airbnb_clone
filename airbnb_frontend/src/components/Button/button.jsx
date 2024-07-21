import React from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types';
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

const Button = ({ label, onClick, disabled, outline, small, icon : Icon }) => {
  return (
    <button className={cx('button', { disable: disabled, outline: outline, small: small })} disabled={disabled} onClick={onClick}>
        { label }
        { Icon && 
          <Icon className={cx('icon')} size={24}/>
        }
    </button>
  )
}

Button.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    icon: PropTypes.elementType,
}

export default Button
