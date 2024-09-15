import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Description.module.scss'
import { useOutletContext } from 'react-router-dom';

import Container from '../../Container/Container'
import Heading from '../../../components/Heading/Heading'

const cx = classNames.bind(styles)


const Description = () => {
  const [description, setDescription] = useState('');
  const { handleChildData } = useOutletContext();

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    handleChildData({ description: e.target.value });
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <Container>
          <div className={cx('contain')}>
            <div className={cx('title')}>
              <Heading title="Create your description" subtitle="Share what makes your place special." big={true}/>
            </div>
            <div className={cx('input-wrapper')}>
              <div className={cx('textarea-wrapper')}>
                <div className={cx('textarea')}>
                  <textarea rows={6} cols={50} maxlength={32} onChange={handleDescriptionChange}></textarea>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Description
