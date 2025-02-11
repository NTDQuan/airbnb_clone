import React, { useState} from 'react'
import classNames from 'classnames/bind'
import styles from './CategoryFilter.module.scss'
import { category } from './CategoryFilterItem/CategoryData.js'
import CategoryFilterItem from './CategoryFilterItem/CategoryFilterItem'
import { useSearchParams, useLocation } from 'react-router-dom'

const cx = classNames.bind(styles)

const CategoryFilter = () => {
  const [params] = useSearchParams();
  const selectedCategory = params.get('category');
  const { pathname } = useLocation();

  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null
  }

  return (
    <div className="
      pt-4
      flex
      flex-row
      items-center
      justify-between
      overflow-x-auto
      "
    >
        {category && category.map((item) => (
            <CategoryFilterItem
                key={item.label}
                label={item.label}
                icon={item.icon}
                selected={item.label === selectedCategory}
            />
        ))}
    </div>
  )
}

export default CategoryFilter
