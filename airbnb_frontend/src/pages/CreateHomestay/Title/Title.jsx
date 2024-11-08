import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Title.module.scss'
import { useOutletContext } from 'react-router-dom';

import Container from '../../Container/Container'
import Heading from '../../../components/Heading/Heading'

const cx = classNames.bind(styles)

const Title = () => {
  const [title, setTitle] = useState('');
  const { handleChildData } = useOutletContext();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    handleChildData({ title: e.target.value });
  };

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
            <Heading title="Now, let's give your boat a title" subtitle="Short titles work best. Have fun with it—you can always change it later." big={true} />
          </div>
          <div className="flex flex-col items-start justify-start w-[650px]">
            <div className="w-full">
              <div className="rounded-[8px] [box-shadow:grey_0px_0px_0px_1px_inset]">
                <textarea 
                  onChange={handleTitleChange} 
                  rows={6} 
                  cols={50} 
                  maxlength={32}
                  className='
                    text-[rgb(34,_34,_34)]
                    min-w-full
                    max-w-full
                    outline-[none]
                    border-[none]
                    m-0
                    box-border
                    bg-transparent
                    appearance-none
                    resize-y
                    p-4
                    overflow-ellipsis
                    text-lg
                    overflow-y-hidden
                    rounded-[8px]
                    md:p-6
                    md:max-h-[50vh]
                    md:text-2xl
                  '
                  >
                </textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Title
