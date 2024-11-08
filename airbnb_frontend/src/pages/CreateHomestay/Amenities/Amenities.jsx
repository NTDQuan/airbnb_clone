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
    <Container>
      <div className="
        w-full 
       bg-white
        flex
        justify-center
        items-center
        [scrollbar-width:none]
        md:overflow-y-auto
        md:mt-[61px]
        md:border-t-0
        md:h-[calc(100vh-88px)]
        md:px-[80px]
      ">
        <div className="flex h-auto flex-auto flex-col w-full items-center">
          <div className="w-[650px] mb-6 mt-4">
            <Heading title='Tell guests what your place has to offer' subtitle="You can add more amenities after you publish your listing." big={true} />
          </div>
          <div className="w-[650px]">
            <CreateHomestayAmenity onSelectAmenity={handleSelectAmenity} />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Amenities
