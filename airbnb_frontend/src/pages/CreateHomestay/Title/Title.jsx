import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Title.module.scss'
import { useOutletContext } from 'react-router-dom';

import Container from '../../Container/Container'
import Heading from '../../../components/Heading/Heading'

const cx = classNames.bind(styles)

const Title = () => {
  const [title, setTitle] = useState('');
  const { handleChildData } = useOutletContext();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    handleChildData({ title: e.target.value });
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <Container>
          <div className={cx('contain')}>
            <div className={cx('title')}>
              <Heading title="Now, let's give your boat a title" subtitle="Short titles work best. Have fun with it—you can always change it later." big={true}/>
            </div>
            <div className={cx('input-wrapper')}>
              <div className={cx('textarea-wrapper')}>
                <div className={cx('textarea')}>
                  <textarea rows={6} cols={50} maxlength={32} onChange={handleTitleChange}></textarea>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Title
