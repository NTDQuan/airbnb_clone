import React from 'react'
import Heading from '../Heading/Heading'
import HeartButton from '../HeartButton/HeartButton'

const ClientHomestayInfoHeading = ({ homestay }) => {
  return (
    <>
      <Heading
        title="name"
        subtitle='subtitle'
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
            src="https://placehold.co/600x400"
        />
        <div className='absolute top-5 right-5'>
            <HeartButton
                
            />
        </div>
      </div>
    </>
  )
}

export default ClientHomestayInfoHeading
