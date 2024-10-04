import React from 'react'
import classNames from 'classnames/bind'
import styles from './CreateHomestayPrivacyType.module.scss'

import { privacyType } from '../../assets/data/PrivacyTypeData'
import CreateHomestayType from './CreateHomestayType/CreateHomestayType'

const cx = classNames.bind(styles)

const CreateHomestayPrivacyType = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        {privacyType && privacyType.map((item) => (
          <CreateHomestayType
            key={item.label}
            label={item.label}
            icon={item.icon}
            description={item.description}
          />
        ))}
      </div>
    </div>
  )
}

export default CreateHomestayPrivacyType
