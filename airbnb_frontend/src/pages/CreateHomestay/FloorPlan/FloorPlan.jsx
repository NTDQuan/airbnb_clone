import React from 'react'
import classNames from 'classnames/bind'
import styles from './FloorPlan.module.scss'
import Container from '../../Container/Container'
import Heading from '../../../components/Heading/Heading'
import NumberSelector from '../../../components/NumberSelector/NumberSelector'
import CreateHomestayFooter from '../../../components/Footer/CreateHomestayFooter/CreateHomestayFooter'

const cx = classNames.bind(styles)

const FloorPlan = () => {
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
                    <NumberSelector defaultNumber={1}/>
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
                    <NumberSelector defaultNumber={0}/>
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
                    <NumberSelector defaultNumber={0}/>
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
                    <NumberSelector defaultNumber={1}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <CreateHomestayFooter title='Get started' available={true}/>
      </div>
    </div>
  )
}

export default FloorPlan
