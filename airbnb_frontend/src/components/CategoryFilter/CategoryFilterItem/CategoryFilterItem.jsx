import React from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types';
import styles from './CategoryFilterItem.module.scss'

const cx = classNames.bind(styles)

const CategoryFilterItem = ({label, icon : Icon, selected, onClick}) => {
  return (
    <div 
      onClick={onClick} 
      className={`
        flex
        flex-col
        items-center
        justify-center
        gap-2
        p-3
        border-b-2
        hover:text-neutral-800
        transition
        cursor-pointer
        ${selected ? 'text-neutral-800' : 'text-neutral-500'}
        ${selected ? 'border-b-neutral-800' : 'border-transparent'}
      `}
    >
        <Icon size={26}/>
        <span className="font-medium text-sm">
          {label}
        </span>
    </div>
  )
}

CategoryFilterItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};

export default CategoryFilterItem
