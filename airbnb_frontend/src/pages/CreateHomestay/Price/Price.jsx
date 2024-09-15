import React from 'react'
import classNames from 'classnames/bind'
import styles from './Price.module.scss'
import { useOutletContext } from 'react-router-dom';

import Container from '../../Container/Container'
import Heading from '../../../components/Heading/Heading'
import CreateHomestayFooter from '../../../components/Footer/CreateHomestayFooter/CreateHomestayFooter'
import CreateHomestayPrice from '../../../components/CreateHomestayPrice/CreateHomestayPrice'

const cx = classNames.bind(styles)

const Price = () => {
  const { handleChildData } = useOutletContext()
  
  return (
    <div className={classNames(cx('wrapper'))}>
      <div className={cx('container')}>
        <Container>
          <div className={cx('contain')}>
            <div className={cx('title')}>
              <Heading title="Now, set your price" subtitle="You can change it anytime" big={true}/>
            </div>
            <div className={cx('input')}>
              <CreateHomestayPrice onPriceChange={handleChildData}/>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Price
