import React from 'react'
import classNames from 'classnames/bind'
import styles from './Price.module.scss'
import { useOutletContext } from 'react-router-dom';

import Container from '../../Container/Container'
import Heading from '../../../components/Heading/Heading'
import CreateHomestayFooter from '../../../components/Footer/CreateHomestayFooter/CreateHomestayFooter'
import CreateHomestayPrice from '../../../components/CreateHomestayPrice/CreateHomestayPrice'

const cx = classNames.bind(styles)

const Price = () => {
  const { handleChildData } = useOutletContext()

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
          <Heading title="Now, set your price" subtitle="You can change it anytime" big={true} />
        </div>
        <div className="w-[650px]">
          <CreateHomestayPrice onPriceChange={handleChildData} />
        </div>
        </div>
      </div>
    </Container >
  )
}

export default Price
