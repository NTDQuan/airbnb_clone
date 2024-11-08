import React from 'react'
import classNames from 'classnames/bind'
import styles from './BecomeAHost.module.scss'
import { BsBuildingAdd } from "react-icons/bs";
import { TbMathGreater } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import Container from '../Container/Container';

const cx = classNames.bind(styles);

const BecomeAHost = ({ currentUser }) => {
  const navigate = useNavigate();
  
  return (
    <Container>
      <div className="
        w-full
        flex
        flex-col
        [scrollbar-width:none]
        md:overflow-y-auto
        md:mt-[61px]
        md:border-t-0
        md:h-[calc(100vh-88px)]
        md:px-[80px]
      ">
        <div className="
          mt-auto
          mb-auto
        ">
          <div className="
            w-full
            bg-white
            flex
            pb-[calc(82px + 16px)]
            pl-[24px]
            pr-[24px]
            md:pb-0
            md:pl-0
            md:pr-0
            justify-center
          ">
            <div className="
              bg-transparent
              mb-10
              mt-8
              flex
              flex-col
              items-start
              justify-between
              max-w-[623px]
              overflow-visible
              scrollbar-width:none
            ">
              <div className="bg-transparent text-gray-900">
                <h1 className='
                  text-2xl
                  font-medium
                  md:text-3xl
                  md:mb-8
                '>
                  Welcome {currentUser?.name}
                </h1>
              </div>
              <div className="w-full">
                <div className="pb-10 w-full">
                  <h2 className='pb-4'>Start a new listing</h2>
                  <div>
                    <div className="w-full">
                      <div className="
                        py-4 
                        flex 
                        flex-row
                        md:py-6
                      ">
                        <BsBuildingAdd 
                          size={32} 
                          className="
                            mr-4
                        "/>
                        <div className="
                          flex
                          flex-col
                          justify-center
                          flex-auto
                          w-full
                        ">
                          <button 
                            onClick={() => navigate('/become-a-host/overview')}
                            className="
                              bg-transparent
                              border-0
                              cursor-pointer
                              m-0
                              p-0
                            "
                          >
                            <span className="
                              text-left
                              justify-between
                              inline-flex
                              w-full
                              items-center
                            ">
                              <div className="
                                text-base
                                text-[#222222]
                              ">
                                Create a new listing
                              </div>
                              <TbMathGreater size={16}/>
                            </span>
                          </button>
                        </div>
                      </div>
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

export default BecomeAHost
