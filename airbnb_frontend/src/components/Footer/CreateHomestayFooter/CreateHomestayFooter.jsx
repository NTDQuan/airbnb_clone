import React from 'react'
import classNames from 'classnames/bind'
import styles from './CreateHomestayFooter.module.scss'
import CreateHomestayButton from '../../Button/CreateHomestayButton/CreateHomestayButton';

const cx = classNames.bind(styles);

const CreateHomestayFooter = ({ title, onClick, path }) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('contain')}>
            <div className={cx('button-holder')}>
              <CreateHomestayButton title={title} onClick={onClick}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CreateHomestayFooter
