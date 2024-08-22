import React from 'react'
import classNames from 'classnames/bind'
import styles from './BecomeAHostLayout.module.scss'
import CreateHomestayHeader from '../../../components/Header/CreateHomestayHeader/CreateHomestayHeader';
import { Outlet } from 'react-router-dom';
import CreateHomestayFooter from '../../../components/Footer/CreateHomestayFooter/CreateHomestayFooter';

const cx = classNames.bind(styles);

const BecomeAHostLayout = () => {
  return (
    <div className={cx('wrapper')}>
      <CreateHomestayHeader/>
      <div className={cx('content')}>
        <Outlet/>
      </div>
    </div>
  )
}

export default BecomeAHostLayout
