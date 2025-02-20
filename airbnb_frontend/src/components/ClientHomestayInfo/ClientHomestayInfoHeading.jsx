import React from 'react'
import Heading from '../Heading/Heading'
import HeartButton from '../HeartButton/HeartButton'

const ClientHomestayInfoHeading = ({ name, country, city, image, id, currentUser }) => {
  return (
    <>
      <Heading
        title={name}
        subtitle={`${country}, ${city}`}
      />
      <div
        className='
            w-full
            h-[60vh]
            overflow-hidden
            rounded-xl
            relative
        '
      >
        <img 
            className='
                object-cover
                w-full
            '
            src={image ? image : "https://placehold.co/600x400"}
        />
        <div className='absolute top-5 right-5'>
            <HeartButton
              listingId={id} 
              currentUser={currentUser}
            />
        </div>
      </div>
    </>
  )
}

export default ClientHomestayInfoHeading
