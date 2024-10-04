import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './CreateHomestayInstantBook.module.scss'

import { instantBookData } from '../../assets/data/InstantBookData.js'
import CreateHomestayType from '../CreateHomestayPrivacyType/CreateHomestayType/CreateHomestayType.jsx'
import { useOutletContext } from 'react-router-dom';

const cx = classNames.bind(styles)

const CreateHomestayInstantBook = () => {
    const { handleChildData } = useOutletContext();
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelection = (value) => {
      setSelectedOption(value);
      if(value) {
        handleChildData(true);
      } else {
        handleChildData(false);
      }
    }

    return (
        <div className={cx('wrapper')}>
          <div className={cx('container')}>
            {instantBookData && instantBookData.map((item) => (
              <CreateHomestayType
                key={item.label}
                label={item.label}
                icon={item.icon}
                description={item.description}
                value={item.value}
                onClick={() => handleSelection(item.value)}
                isSelected={selectedOption === item.value}
              />
            ))}
          </div>
        </div>
      )
}

export default CreateHomestayInstantBook
