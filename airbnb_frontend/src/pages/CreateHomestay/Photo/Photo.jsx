import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Photo.module.scss'
import Container from '../../Container/Container'
import { useOutletContext } from 'react-router-dom';

import Heading from '../../../components/Heading/Heading'
import CreateHomestayFooter from '../../../components/Footer/CreateHomestayFooter/CreateHomestayFooter'
import ImageUpload from '../../../components/ImageUpload'

const cx = classNames.bind(styles)

const Photo = () => {
  const { handleChildData } = useOutletContext();

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
        md:h-[calc(100vh-88px)]
        md:px-[80px]
      ">
        <div className="flex h-auto flex-auto flex-col w-full items-center">
          <div className="w-[650px] mb-6 mt-4">
            <Heading
              title="Add some photos of your boat"
              subtitle="You'll need 5 photos to get started. You can add more or make changes later."
              big={true}
            />
          </div>
          <div className="w-[650px] relative my-6 bg-transparent">
            <div className="overflow-visible flex flex-col w-full items-center">
              <div className="overflow-y-auto w-full pr-2 -mr-2 md:pr-0 md:mr-0">
                <div className="mb-4">
                  <ImageUpload onChange={handleChildData}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Photo
