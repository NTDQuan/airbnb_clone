import React from 'react'
import classNames from 'classnames/bind'
import styles from './CreateHomestayCategory.module.scss'

import { category } from '../../asserts/data/CategoryData'
import CategoryItem from './CategoryItem/CategoryItem'

const cx = classNames.bind(styles)

const CreateHomestayCategory = () => {
  return (
    <div className={cx('wrapper')}>
      {category && category.map((item) => (
        <CategoryItem
          key={item.label}
          label={item.label}
          icon={item.icon}
        />
      ))}
    </div>
  )
}

export default CreateHomestayCategory
