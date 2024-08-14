import React from 'react'
import classNames from 'classnames/bind'
import styles from './Structure.module.scss'
import Container from '../../Container/Container'

const cx = classNames.bind(styles)

const Structure = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <Container>

        </Container>
      </div>
    </div>
  )
}

export default Structure
