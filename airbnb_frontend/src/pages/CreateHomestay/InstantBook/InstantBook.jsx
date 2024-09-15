import React from 'react'
import classNames from 'classnames/bind'
import styles from './InstantBook.module.scss'
import Container from '../../Container/Container'
import Heading from '../../../components/Heading/Heading'
import CreateHomestayInstantBook from '../../../components/CreateHomestayInstantBook/CreateHomestayInstantBook'
import CreateHomestayFooter from '../../../components/Footer/CreateHomestayFooter/CreateHomestayFooter'

const cx = classNames.bind(styles)

const InstantBook = () => {
  return (
    <div className={classNames(cx('wrapper'))}>
      <div className={cx('container')}>
        <Container>
          <div className={cx('contain')}>
            <div className={cx('content')}>
              <div className={cx('title')}>
                <Heading title="Decide how you’ll confirm reservations" big={true}/>
              </div>
              <div>
                <CreateHomestayInstantBook/>
              </div>
            </div>

          </div>
        </Container>
      </div>
    </div>
  )
}

export default InstantBook
