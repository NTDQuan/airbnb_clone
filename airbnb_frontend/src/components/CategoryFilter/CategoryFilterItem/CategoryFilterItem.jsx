import React, { useCallback } from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types';
import styles from './CategoryFilterItem.module.scss'
import { useNavigate, useSearchParams } from 'react-router-dom';
import qs from 'query-string'

const cx = classNames.bind(styles)

const CategoryFilterItem = ({label, icon : Icon, selected}) => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery = {
      ...currentQuery,
      category: label
    }

    if (params.get('category') === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl({
      url: '/',
      query: updatedQuery
    }, { skipNull: true })

    navigate(url);
  }, [label, params, navigate]);

  return (
    <div 
      onClick={handleClick} 
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
