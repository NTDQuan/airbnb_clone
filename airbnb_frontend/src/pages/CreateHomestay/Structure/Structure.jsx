import React from 'react'
import classNames from 'classnames/bind'
import styles from './Structure.module.scss'
import Container from '../../Container/Container'
import CreateHomestayFooter from '../../../components/Footer/CreateHomestayFooter/CreateHomestayFooter'
import CreateHomestayCategory from '../../../components/CreateHomestayCategory/CreateHomestayCategory'

const cx = classNames.bind(styles)

const Structure = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <Container>
          <div className={cx('contain')}>
            <div className={cx('title')}>
              <h1>Which of these best describes your place?</h1>
            </div>
            <div>
              <CreateHomestayCategory/>
            </div>
          </div>
        </Container>
        <CreateHomestayFooter title='Get started' available={true}/>
      </div>
    </div>
  )
}

export default Structure
