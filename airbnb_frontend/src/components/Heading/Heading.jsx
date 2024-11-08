import React from 'react'
import PropTypes from 'prop-types';


const Heading = ({title, subtitle, center, big}) => {
  return (
    <div className={center ? 'text-center' : 'text-start'}>
        <div className="text-2xl font-bold">
            {title}
        </div>
        <div className="font-light text-neutral-500 mt-2">
            {subtitle}
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
