import React from 'react'
import classNames from 'classnames/bind'
import styles from './Photo.module.scss'
import Container from '../../Container/Container'

import Heading from '../../../components/Heading/Heading'
import CreateHomestayFooter from '../../../components/Footer/CreateHomestayFooter/CreateHomestayFooter'

const cx = classNames.bind(styles)

const Photo = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <Container>
          <div className={cx('contain')}>
            <div className={cx('title')}>
              <Heading title='Add some photos of your boat' subtitle="You'll need 5 photos to get started. You can add more or make changes later." big={true}/>
            </div>
            <div className={cx('photo-wrapper')}>
              <div className={cx('photo-container')}>
                <div className={cx('photo-contain')}>
                  <div className={cx('photo')}>
                    <button className={cx('button')}>Add photos</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Photo
