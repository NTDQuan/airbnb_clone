import React from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types';
import styles from './CreateHomestayButton.module.scss'

const cx = classNames.bind(styles)

const CreateHomestayButton = ({ title, onClick, disabled, black }) => {
  return (
    <button onClick={onClick} className={cx('button', { disabled: disabled, black: black })}>
        <span className={cx('button-contain')}></span>
        <span className={cx('button-text')}>{title}</span>
    </button>
  )
}

export default CreateHomestayButton
