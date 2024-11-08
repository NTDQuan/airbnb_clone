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
          <div className="w-[850px] mb-6 mt-4">
            <Heading title="Review your listing" subtitle="Here's what we'll show to guests. Make sure everything looks good" big={true} />
          </div>
          <div className="w-[850px] flex flex-row">
            <div className="mb-8 md:mb-0">
              <div className="
                bg-[#FFFFFF] 
                rounded-2xl	
                [box-shadow:0_6px_16px_rgba(0,0,0,0.12)]
                border-[1px]
                relative
                md:w-[358px]
                max-w-[40vw]">
                <button className="
                  bg-transparent
                  border-[none]
                  cursor-pointer
                  block
                  m-0
                  p-0
                  text-center
                  no-underline
                  h-full
                  w-full
                  absolute
                  top-0 
                  left-0
                  z-[1]
                  ">
                </button>
                <div className="p-4 flex flex-col">
                  <div className="mb-4 relative">
                    <div className="bg-[50%_50%] bg-no-repeat pt-[95%] rounded-lg">
                      <div className="
                        flex 
                        items-center
                        content-center
                        absolute
                        top-[0] bottom-[0] left-[0] right-[0]">
                        <img 
                          src="https://placehold.co/600x400" 
                          className='
                            object-cover
                            rounded-lg'/>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row w-full">
                    <div className="self-start flex-[1] break-words max-w-[calc(100% - 80px)]">
                      <div className="text-base	font-medium whitespace-nowrap overflow-hidden overflow-ellipsis">test</div>
                      <div className="flex text-base flex-[1]">
                        {homestayData?.defaultPrice && (
                          <>
                            <div className="mr-1 text-[#6A6A6A] line-through">{homestayData.oldPrice ? `${homestayData.oldPrice}$` : null}</div>
                            <div className={cx('preview-price-new')}>
                              <b className='font-bold'>{`${homestayData.defaultPrice}$`}</b> / night
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="ml-auto self-end">
                      <div className="mr-4 font-base">New</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-8 lg:ml-20 md:mb-0 max-w-[400px] self-auto">
              <div>
                <h2 className="mb-6 md:mb-8 md:text-2xl">What's next</h2>
                <div className="mb-6 flex flex-row md:mb-8">
                  <div className="mr-4">

                  </div>
                  <div className="flex flex-col text-sm color-[#222222]">
                    <h3 className='mb-0.5 md:text-lg md:mb-1 md:font-semibold'>Confirm a few details and publish</h3>
                    <div className='color-[#6A6A6A] text-lg mb-1'>
                      <span>We’ll let you know if you need to verify your identity or register with the local government</span>
                    </div>
                  </div>
                </div>
                <div className="mb-6 flex flex-row md:mb-8">
                  <div className="mr-4">

                  </div>
                  <div className="flex flex-col text-sm color-[#222222]">
                    <h3 className='mb-0.5 md:text-lg md:mb-1 md:font-semibold'>Set up your calendar</h3>
                    <div className='color-[#6A6A6A] text-lg mb-1'>
                      <span>Choose which dates your listing is available. It will be visible 24 hours after you publish</span>
                    </div>
                  </div>
                </div>
                <div className="mb-6 flex flex-row md:mb-8">
                  <div className="mr-4">

                  </div>
                  <div className="flex flex-col text-sm color-[#222222]">
                    <h3 className='mb-0.5 md:text-lg md:mb-1 md:font-semibold'>Adjust your settings</h3>
                    <div className='color-[#6A6A6A] text-lg mb-1'>
                      <span>Set house rules, select a cancellation policy, choose how guests book, and more</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Receipt
