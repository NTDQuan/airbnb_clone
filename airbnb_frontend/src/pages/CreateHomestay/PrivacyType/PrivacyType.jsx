import React from 'react'
import classNames from 'classnames/bind'
import styles from './PrivacyType.module.scss'
import Container from '../../Container/Container'
import CreateHomestayPrivacyType from '../../../components/CreateHomestayPrivacyType/CreateHomestayPrivacyType'
import CreateHomestayFooter from '../../../components/Footer/CreateHomestayFooter/CreateHomestayFooter'

const cx = classNames.bind(styles)

const PrivacyType = () => {
  return (
    <div className={classNames(cx('wrapper'))}>
      <div className={cx('container')}>
        <Container>
          <div className={cx('contain')}>
            <div className={cx('title')}>
              <h1>What type of place will guests have?</h1>
            </div>
            <div>
              <CreateHomestayPrivacyType/>
            </div>
          </div>
        </Container>
        <CreateHomestayFooter title='Get started' available={true}/>
      </div>
    </div>
  )
}

export default PrivacyType
