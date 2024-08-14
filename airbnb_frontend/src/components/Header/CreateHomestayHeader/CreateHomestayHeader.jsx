import React from 'react'
import classNames from 'classnames/bind'
import styles from './CreateHomestayHeader.module.scss'
import Container from '../Container/Container';

import Logo from '../Logo/Logo'

const cx = classNames.bind(styles);

const CreateHomestayHeader = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <Container>
          <div className={cx('contain')}>
            <Logo />
            <button>Exit</button>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default CreateHomestayHeader
