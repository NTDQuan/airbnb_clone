import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './CreateHomestayCategory.module.scss'

import { category } from '../../assets/data/CategoryData'
import CategoryItem from './CategoryItem/CategoryItem'

const cx = classNames.bind(styles)

const CreateHomestayCategory = ({ onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (label) => {
    setSelectedCategory(label);
    onSelectCategory(label);
  };

  return (
    <div className="pt-0.5 pb-12 flex flex-wrap gap-3 md:pb-10 md:max-w-[700px] md:gap-4">
      {category && category.map((item) => (
        <CategoryItem
          key={item.label}
          label={item.label}
          icon={item.icon}
          isSelected={selectedCategory === item.label}
          onSelect={handleSelectCategory}
        />
      ))}
    </div>
  )
}

export default CreateHomestayCategory
