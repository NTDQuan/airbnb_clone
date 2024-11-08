import React from 'react'
import classNames from 'classnames/bind'
import styles from './CreateHomestayFooter.module.scss'
import CreateHomestayButton from '../../Button/CreateHomestayButton/CreateHomestayButton';

const cx = classNames.bind(styles);

const CreateHomestayFooter = ({ title, onClick, path }) => {
  return (
    <div className="bottom-0 z-[2] w-[100vw] fixed">
      <div className="bg-white border-t-[6px] border-t-solid border-t-[rgb(221, 221, 221)]">
        <div className="flex items-center py-4 justify-end">
            <div className="mr-6 md:mr-12">
              <CreateHomestayButton title={title} onClick={onClick}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CreateHomestayFooter
