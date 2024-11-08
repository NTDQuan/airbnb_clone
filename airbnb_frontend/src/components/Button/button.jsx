import React from 'react'
import PropTypes from 'prop-types';

const Button = ({ label, onClick, disabled, outline, small, icon : Icon }) => {
  return (
    <button 
      disabled={disabled} 
      onClick={onClick} 
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        w-full
        ${outline ? 'bg-white' : 'bg-rose-500'}
        ${outline ? 'border-black' : 'border-rose-500'}
        ${outline ? 'text-black' : 'text-white'}
        ${small ? 'py-1' : 'py-3'}
        ${small ? 'text-sm' : 'text-md'}
        ${small ? 'font-light' : 'font-semibold'}
        ${small ? 'border-[1px]' : 'border-2'}
      `}
      
    >
        { label }
        { Icon && 
          <Icon className="absolute left-4 top-3" size={24}/>
        }
    </button>
  )
}

Button.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    icon: PropTypes.elementType,
}

export default Button
