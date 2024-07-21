import React from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types';
import styles from './CategoryFilterItem.module.scss'

const cx = classNames.bind(styles)

const CategoryFilterItem = ({label, icon : Icon, selected, onClick}) => {
  return (
    <div className={cx('wrapper', { selected: selected })} onClick={onClick}>
        <Icon className={cx('icon')}/>
        <span className={cx('label')}>{label}</span>
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
