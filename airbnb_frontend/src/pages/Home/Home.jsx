import React from 'react'
import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter'

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <div className={cx('wrapper')}>
        <CategoryFilter/>
    </div>
  )
}

export default Home
