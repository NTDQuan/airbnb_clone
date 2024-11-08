import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Structure.module.scss'
import { useOutletContext } from 'react-router-dom';
import Container from '../../Container/Container'
import CreateHomestayCategory from '../../../components/CreateHomestayCategory/CreateHomestayCategory'

const cx = classNames.bind(styles)

const Structure = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { handleChildData } = useOutletContext();

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    handleChildData({ category });
    console.log('Selected category:', category);
  };

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
        <div className="flex h-auto flex-col items-center w-full">
          <div className="bg-transparent mb-6 mt-4 md:max-w-[650px] md:mb-8">
            <h1 className='
              text-2xl
              break-words
              font-medium
              md:font-2xl
            '>
              Which of these best describes your place?
            </h1>
          </div>
          <div>
            <CreateHomestayCategory onSelectCategory={handleSelectCategory}/>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Structure
