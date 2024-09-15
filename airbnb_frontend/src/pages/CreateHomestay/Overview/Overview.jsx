import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Overview.module.scss'

import Container from '../../Container/Container'
import homestayService from '../../../service/ListingService'
import { useNavigate, useOutletContext } from 'react-router-dom'
import CreateHomestayFooter from '../../../components/Footer/CreateHomestayFooter/CreateHomestayFooter'

const cx = classNames.bind(styles)

const Overview = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <Container>
          <div className={cx('contain')}>
            <div className={cx('title')}>
              <h1>It's easy to get started on Airbnb</h1>
            </div>
            <div className={cx('step-list')}>
              <div className={cx('step')}>
                <div className={cx('number')}>1</div>
                <div className={cx('text')}>
                  <h2>Tell us about your place</h2>
                  <h3>Share some basic info, like where it is and how many guests can stay.</h3>
                </div>
              </div>
              <div className={cx('step')}>
                <div className={cx('number')}>2</div>
                <div className={cx('text')}>
                  <h2>Make it stand out</h2>
                  <h3>Add 5 or more photos plus a title and description—we'll help you out.</h3>
                </div>
              </div>
              <div className={cx('step')}>
                <div className={cx('number')}>3</div>
                <div className={cx('text')}>
                  <h2>Finish up and publish</h2>
                  <h3>Choose a starting price, verify a few details, then publish your listing.</h3>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Overview
