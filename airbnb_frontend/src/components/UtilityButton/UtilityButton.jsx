import React from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types';
import styles from './UtilityButton.module.scss'

const cx = classNames.bind(styles)

const UtilityButton = ({ onClick, disabled, outline, icon : Icon }) => {
  return (
    <button className={cx('button', { disable: disabled, outline: outline})} disabled={disabled} onClick={onClick}>
        <Icon className={cx('icon')} size={16}/>
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
