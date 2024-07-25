import React from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types';
import styles from './Heading.module.scss'

const cx = classNames.bind(styles)

const Heading = ({title, subtitle, center}) => {
  return (
    <div className={cx('wrapper', {center})}>
        <div className={cx('title')}>
            {title}
        </div>
        <div className={cx('subtitle')}>

        </div>
    </div>
  )
}

Heading.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  center: PropTypes.bool
}

export default Heading
