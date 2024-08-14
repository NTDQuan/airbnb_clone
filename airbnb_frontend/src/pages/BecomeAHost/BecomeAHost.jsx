import React from 'react'
import classNames from 'classnames/bind'
import styles from './BecomeAHost.module.scss'
import { BsBuildingAdd } from "react-icons/bs";
import { TbMathGreater } from "react-icons/tb";

const cx = classNames.bind(styles);

const BecomeAHost = ({ currentUser }) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('content')}>
          <div className={cx('create-a-host')}>
            <div className={cx('title')}>
              <h1>Welcome {currentUser?.name}</h1>
            </div>
            <div className={cx('start-new-listing')}>
              <div className={cx('start-new-listing-content')}>
                <h2>Start a new listing</h2>
                <div className={cx('start-new-listing-button')}>
                  <div className={cx('start-new-listing-button-wrapper')}>
                    <div className={cx('start-new-listing-button-container')}>
                      <BsBuildingAdd className={cx('start-new-listing-button-icon')} size={32}/>
                      <div className={cx('start-new-listing-button-text')}>
                        <button>
                          <span className={cx('start-new-listing-button-text-wrapper')}>
                            <div className={cx('start-new-listing-button-text-container')}>
                              Create a new listing
                            </div>
                            <TbMathGreater size={16}/>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BecomeAHost
