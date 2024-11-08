import React, { useState, useEffect, useCallback } from 'react'
import classNames from 'classnames/bind'
import styles from './FloorPlan.module.scss'
import Container from '../../Container/Container'
import Heading from '../../../components/Heading/Heading'
import NumberSelector from '../../../components/NumberSelector/NumberSelector'
import CreateHomestayFooter from '../../../components/Footer/CreateHomestayFooter/CreateHomestayFooter'
import { useOutletContext } from 'react-router-dom'

const cx = classNames.bind(styles)

const FloorPlan = () => {
  const { handleChildData } = useOutletContext();
  const [floorPlanData, setFloorPlanData] = useState({
    max_guests: 1,
    bed_room_num: 0,
    bed_num: 0,
    bath_room_num: 1,
  })

  useEffect(() => {
    handleChildData(floorPlanData);
  }, [floorPlanData, handleChildData]);

  const handleNumberChange = useCallback((type, value) => {
    setFloorPlanData((prevData) => ({
      ...prevData,
      [type]: value
    }));
  }, []);

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
            <Heading title='Share some basics about your place' subtitle="You'll add more details later, like bed types." big={true} />
          </div>
          <div className="relative w-[650px] flex flex-col items-center">
            <div className="w-full px-0 py-2 border-b-[1px_solid_rgb(235,_235,_235)]">
              <div className="py-4 rounded-[1px]">
                <div className="flex gap-[8px 16px] flex-wrap">
                  <div className="flex flex-col justify-center flex-auto w-full">
                    <div className="cursor-pointer text-gray-900 text-base">
                      <div className="text-lg font-normal">
                        Guests
                      </div>
                    </div>
                  </div>
                  <NumberSelector defaultNumber={1} onNumberChange={(value) => handleNumberChange('max_guests', value)} />
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[650px] flex flex-col items-center">
            <div className="w-full px-0 py-2 border-b-[1px_solid_rgb(235,_235,_235)]">
              <div className="py-4 rounded-[1px]">
                <div className="flex gap-[8px 16px] flex-wrap">
                  <div className="flex flex-col justify-center flex-auto w-full">
                    <div className="cursor-pointer text-gray-900 text-base">
                      <div className="text-lg font-normal">
                        Bedrooms
                      </div>
                    </div>
                  </div>
                  <NumberSelector defaultNumber={0} onNumberChange={(value) => handleNumberChange('bed_room_num', value)} />
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[650px] flex flex-col items-center">
            <div className="w-full px-0 py-2 border-b-[1px_solid_rgb(235,_235,_235)]">
              <div className="py-4 rounded-[1px]">
                <div className="flex gap-[8px 16px] flex-wrap">
                  <div className="flex flex-col justify-center flex-auto w-full">
                    <div className="cursor-pointer text-gray-900 text-base">
                      <div className="text-lg font-normal">
                        Beds
                      </div>
                    </div>
                  </div>
                  <NumberSelector defaultNumber={0} onNumberChange={(value) => handleNumberChange('bed_num', value)} />
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[650px] flex flex-col items-center">
            <div className="w-full px-0 py-2 border-b-[1px_solid_rgb(235,_235,_235)]">
              <div className="py-4 rounded-[1px]">
                <div className="flex gap-[8px 16px] flex-wrap">
                  <div className="flex flex-col justify-center flex-auto w-full">
                    <div className="cursor-pointer text-gray-900 text-base">
                      <div className="text-lg font-normal">
                        Bathrooms
                      </div>
                    </div>
                  </div>
                  <NumberSelector defaultNumber={1} onNumberChange={(value) => handleNumberChange('bath_room_num', value)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default FloorPlan
