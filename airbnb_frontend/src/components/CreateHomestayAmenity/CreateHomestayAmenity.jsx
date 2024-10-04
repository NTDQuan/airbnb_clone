import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames/bind'
import styles from './CreateHomestayAmenity.module.scss'

import { amenities } from '../../assets/data/AmenitiesData'
import AmenityItem from './AmenityItem/AmenityItem'

const cx = classNames.bind(styles)

const CreateHomestayAmenity = ({ onSelectAmenity }) => {
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const prevSelectedAmenitiesRef = useRef(selectedAmenities);

  const handleAmenityClick = (id) => {
    setSelectedAmenities((prevSelected) => {
      const isSelected = prevSelected.includes(id);
      return isSelected
        ? prevSelected.filter((amenityId) => amenityId !== id)
        : [...prevSelected, id];
    });
  };

  useEffect(() => {
    if (prevSelectedAmenitiesRef.current !== selectedAmenities) {
      onSelectAmenity(selectedAmenities);
      prevSelectedAmenitiesRef.current = selectedAmenities;
    }
  }, [selectedAmenities, onSelectAmenity]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        {amenities && amenities.map((item) => (
            <AmenityItem
            key={item.label}
            id={item.id}
            label={item.label}
            icon={item.icon}
            isSelected={selectedAmenities.includes(item.id)}
            onSelect={handleAmenityClick}
            />
        ))}
      </div>
    </div>
  )
}

export default CreateHomestayAmenity
