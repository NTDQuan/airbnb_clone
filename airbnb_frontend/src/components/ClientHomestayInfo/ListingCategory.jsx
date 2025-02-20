import React from 'react'

import { category } from '../../assets/data/CategoryData'

const ListingCategory = ({ label }) => {
  const findIconByLabel = (label) => {
    const categoryItem = category.find((item) => item.label === label);
    return categoryItem ? categoryItem.icon : null;
  };

  const Icon = findIconByLabel(label);

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-row items-center gap-4'>
        <Icon size={40} className="text-neutral-600"/>
        <div className='flex flex-col'>
          <div className='text-lg font-semibold'>
            {label}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListingCategory
