import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Amenities.module.scss'
import { useOutletContext } from 'react-router-dom';
import Container from '../../Container/Container'
import Heading from '../../../components/Heading/Heading'
import CreateHomestayAmenity from '../../../components/CreateHomestayAmenity/CreateHomestayAmenity'

const cx = classNames.bind(styles)

const Amenities = () => {
  const [selectedAmenity, setSelectedAmenity] = useState(null);
  const { handleChildData } = useOutletContext();

  const handleSelectAmenity = (amenities) => {
    setSelectedAmenity(amenities);
    handleChildData({ amenities });
    console.log('Selected amenities:', amenities);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <Container>
          <div className={cx('contain')}>
            <div className={cx('title')}>
              <Heading title='Tell guests what your place has to offer' subtitle="You can add more amenities after you publish your listing." big={true}/>
            </div>
            <div className={cx('list')}>
              <CreateHomestayAmenity onSelectAmenity={handleSelectAmenity}/>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Amenities
