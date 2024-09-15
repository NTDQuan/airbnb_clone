import React from 'react'
import classNames from 'classnames/bind'
import styles from './Receipt.module.scss'
import { useLoaderData } from 'react-router-dom';

import Container from '../../Container/Container'
import Heading from '../../../components/Heading/Heading'

const cx = classNames.bind(styles)

const Receipt = () => {
  const homestayData = useLoaderData();
  
  return (
    <div className={classNames(cx('wrapper'))}>
      <div className={classNames(cx('container'))}>
        <Container>
          <div className={classNames(cx('contain'))}>
            <div className={cx('title')}>
              <Heading title="Review your listing" subtitle="Here's what we'll show to guests. Make sure everything looks good" big={true}/>
            </div>
            <div className={classNames(cx('output'))}>
              <div className={classNames(cx('card'))}>
                <div className={classNames(cx('card-container'))}>
                  <button className={classNames(cx('preview-button'))}></button>
                  <div className={classNames(cx('preview'))}>
                    <div className={classNames(cx('preview-image'))}>
                      <div className={classNames(cx('image'))}>
                        <div className={classNames(cx('image-container'))}>
                          <img src="../../assets/images/no_image.jpg"/>
                        </div>
                      </div>
                    </div>
                    <div className={classNames(cx('preview-contain'))}>
                      <div className={classNames(cx('preview-left'))}>
                        <div className={classNames(cx('preview-title'))}>test</div>
                        <div className={classNames(cx('preview-price'))}>
                          {homestayData?.defaultPrice && (
                            <>
                              <div className={cx('preview-price-old')}>{homestayData.oldPrice ? `${homestayData.oldPrice}$` : null}</div>
                              <div className={cx('preview-price-new')}>
                                <b>{`${homestayData.defaultPrice}$`}</b> / night
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                      <div className={classNames(cx('preview-right'))}>
                        <div className={classNames(cx('tag'))}>New</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classNames(cx('next'))}>
                <div>
                  <h2 className={classNames(cx('next-title'))}>What's next</h2>
                  <div className={classNames(cx('next-step'))}>
                    <div className={classNames(cx('next-step-icon'))}>

                    </div>
                    <div className={classNames(cx('step-text'))}>
                      <h3>Confirm a few details and publish</h3>
                      <div className={classNames(cx('step-description'))}>
                        <span>We’ll let you know if you need to verify your identity or register with the local government</span>
                      </div>
                    </div>
                  </div>
                  <div className={classNames(cx('next-step'))}>
                    <div className={classNames(cx('next-step-icon'))}>

                    </div>
                    <div className={classNames(cx('step-text'))}>
                      <h3>Set up your calendar</h3>
                      <div className={classNames(cx('step-description'))}>
                        <span>Choose which dates your listing is available. It will be visible 24 hours after you publish</span>
                      </div>
                    </div>
                  </div>
                  <div className={classNames(cx('next-step'))}>
                    <div className={classNames(cx('next-step-icon'))}>

                    </div>
                    <div className={classNames(cx('step-text'))}>
                      <h3>Adjust your settings</h3>
                      <div className={classNames(cx('step-description'))}>
                        <span>Set house rules, select a cancellation policy, choose how guests book, and more</span>
                      </div>
                    </div>
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

export default Receipt
