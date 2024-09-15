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
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <Container>
          <div className={cx('contain')}>
            <div className={cx('title')}>
              <Heading title='Share some basics about your place' subtitle="You'll add more details later, like bed types." big={true}/>
            </div>
            <div className={cx('input')}>
              <div className={cx('input-wrapper')}>
                <div className={cx('input-container')}>
                  <div className={cx('input-contain')}>
                    <div className={cx('text-wrapper')}>
                      <div className={cx('text-container')}>
                        <div className={cx('text')}>
                          Guests
                        </div>
                      </div>
                    </div>
                    <NumberSelector defaultNumber={1} onNumberChange={(value) => handleNumberChange('max_guests', value)}/>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx('input')}>
              <div className={cx('input-wrapper')}>
                <div className={cx('input-container')}>
                  <div className={cx('input-contain')}>
                    <div className={cx('text-wrapper')}>
                      <div className={cx('text-container')}>
                        <div className={cx('text')}>
                          Bedrooms
                        </div>
                      </div>
                    </div>
                    <NumberSelector defaultNumber={0} onNumberChange={(value) => handleNumberChange('bed_room_num', value)}/>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx('input')}>
              <div className={cx('input-wrapper')}>
                <div className={cx('input-container')}>
                  <div className={cx('input-contain')}>
                    <div className={cx('text-wrapper')}>
                      <div className={cx('text-container')}>
                        <div className={cx('text')}>
                          Beds
                        </div>
                      </div>
                    </div>
                    <NumberSelector defaultNumber={0} onNumberChange={(value) => handleNumberChange('bed_num', value)}/>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx('input')}>
              <div className={cx('input-wrapper')}>
                <div className={cx('input-container')}>
                  <div className={cx('input-contain')}>
                    <div className={cx('text-wrapper')}>
                      <div className={cx('text-container')}>
                        <div className={cx('text')}>
                          Bathrooms
                        </div>
                      </div>
                    </div>
                    <NumberSelector defaultNumber={1} onNumberChange={(value) => handleNumberChange('bath_room_num', value)}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default FloorPlan
