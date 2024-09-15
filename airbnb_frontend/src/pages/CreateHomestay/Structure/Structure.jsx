import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Structure.module.scss'
import { useOutletContext } from 'react-router-dom';
import Container from '../../Container/Container'
import CreateHomestayCategory from '../../../components/CreateHomestayCategory/CreateHomestayCategory'

const cx = classNames.bind(styles)

const Structure = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { handleChildData } = useOutletContext();

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    handleChildData({ category });
    console.log('Selected category:', category);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <Container>
          <div className={cx('contain')}>
            <div className={cx('title')}>
              <h1>Which of these best describes your place?</h1>
            </div>
            <div>
              <CreateHomestayCategory onSelectCategory={handleSelectCategory}/>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Structure
