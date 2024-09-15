import React from 'react'
import classNames from 'classnames/bind'
import styles from './CreateHomestayType.module.scss'

const cx = classNames.bind(styles)

const CreateHomestayType = ({ value, label, description, icon:Icon, onClick, isSelected }) => {
  return (
    <div className={cx('wrapper')}>
      <button className={cx('button', { selected: isSelected })} onClick={onClick}>
        <div className={cx('text-container')}>
          <h2>{label}</h2>
          <div className={cx('description')}>{description}</div>
        </div>
        <div className={cx('icon-container')}>
          <div className={cx('icon')}>
            <Icon/>
          </div>
        </div>
      </button>
    </div>
  )
}

export default CreateHomestayType
