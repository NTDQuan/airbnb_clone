import React from 'react'
import classNames from 'classnames/bind'
import styles from './CreateHomestayFooter.module.scss'

const cx = classNames.bind(styles);

const CreateHomestayFooter = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('contain')}>
            <div className={cx('button-holder')}>
                <button>
                    <span className={cx('button-contain')}></span>
                    <span className={cx('button-text')}>Get started</span>
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CreateHomestayFooter
