import React, { useState} from 'react'
import classNames from 'classnames/bind'
import styles from './CategoryFilter.module.scss'
import { category } from './CategoryFilterItem/CategoryData.js'
import CategoryFilterItem from './CategoryFilterItem/CategoryFilterItem'

const cx = classNames.bind(styles)

const CategoryFilter = () => {
  const [selectedLabel, setSelectedLabel] = useState("Nông trại");

  const handleItemClick = (label) => {
    setSelectedLabel(label);
    console.log(selectedLabel);
  }

  return (
    <div className={cx('wrapper')}>
        {category && category.map((item) => (
            <CategoryFilterItem
                key={item.label}
                label={item.label}
                icon={item.icon}
                selected={item.label === selectedLabel}
                onClick={() => handleItemClick(item.label)}
            />
        ))}
    </div>
  )
}

export default CategoryFilter
