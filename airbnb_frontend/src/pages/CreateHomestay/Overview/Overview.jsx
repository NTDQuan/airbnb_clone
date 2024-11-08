import React, { useEffect, useState } from 'react'

import Container from '../../Container/Container'
import homestayService from '../../../service/ListingService'
import { useNavigate, useOutletContext } from 'react-router-dom'
import CreateHomestayFooter from '../../../components/Footer/CreateHomestayFooter/CreateHomestayFooter'


const Overview = () => {
  return (
    <Container>
      <div className="
        w-full 
        bg-white
        flex
        items-center
        justify-center
        [scrollbar-width:none]
        md:overflow-y-auto
        md:mt-[61px]
        md:border-t-0
        md:h-[calc(100vh-88px)]
        md:px-[80px]
      ">
            <div className="
              overflow-visiable
              flex
              h-auto
              flex-row
              w-full
              justify-center
            ">
              <div className="
                flex
                flex-col
                justify-center
                items-start
                w-[50vw]
                max-w-[700px]
                mr-[48px]
              ">
                <h1 className='
                  font-semibold
                  text-4xl
                  text-gray-900
                  md:text-5xl
                  md:max-w-[514px]
                '>
                  It's easy to get started on Airbnb
                </h1>
              </div>
              <div className='
                flex 
                flex-col 
                mt-2 
                justify-center
                md:w-[50vw]
                max-w-[600px]
              '>
                <div className="flex flex-row py-10 border-b border-black/10 md:py-9">
                  <div className="pr-3 text-lg text-gray-900 font-semibold md:pr-4">1</div>
                  <div className="mr-3 flex flex-col md:mr-4 md:max-w-[448px]">
                    <h2 className='
                      mb-1
                      text-lg
                      text-gray-900
                      font-semibold
                      md:mb-2
                      md:text-2xl
                    '>
                      Tell us about your place
                    </h2>
                    <h3 className='
                      text-gray-500
                      font-normal
                      text-sm
                      md:text-lg
                    '>
                      Share some basic info, like where it is and how many guests can stay.
                    </h3>
                  </div>
                </div>
                <div className="flex flex-row py-10 border-b border-black/10 md:py-9">
                  <div className="pr-3 text-lg text-gray-900 font-semibold md:pr-4">2</div>
                  <div className="mr-3 flex flex-col md:mr-4 md:max-w-[448px]">
                    <h2 className='
                      mb-1
                      text-lg
                      text-gray-900
                      font-semibold
                      md:mb-2
                      md:text-2xl
                    '>
                      Make it stand out
                    </h2>
                    <h3 className='
                      text-gray-500
                      font-normal
                      text-sm
                      md:text-lg
                    '>
                      Add 5 or more photos plus a title and description—we'll help you out.
                    </h3>
                  </div>
                </div>
                <div className="flex flex-row py-10 border-b border-black/10 md:py-9">
                  <div className="pr-3 text-lg text-gray-900 font-semibold md:pr-4">3</div>
                  <div className="mr-3 flex flex-col md:mr-4 md:max-w-[448px]">
                    <h2 className='
                      mb-1
                      text-lg
                      text-gray-900
                      font-semibold
                      md:mb-2
                      md:text-2xl
                    '>
                      Finish up and publish
                    </h2>
                    <h3 className='
                      text-gray-500
                      font-normal
                      text-sm
                      md:text-lg
                    '>
                      Choose a starting price, verify a few details, then publish your listing.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </Container>
  )
}

export default Overview
