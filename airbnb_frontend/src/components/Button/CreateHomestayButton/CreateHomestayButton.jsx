import React from 'react'
import classNames from 'classnames/bind'
import styles from './CreateHomestayButton.module.scss'

const cx = classNames.bind(styles)

const CreateHomestayButton = ({ title, onClick, disabled, black }) => {
  const buttonClasses = `relative inline-block cursor-pointer font-semibold text-white 
                         text-base leading-5 px-7 py-3.5 rounded-lg md:px-8
                         ${black ? 'bg-black' : 'bg-gradient-to-r from-[#E61E4D] via-[#E31C5F] to-[#D70466]'} 
                         ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  return (
    <button onClick={onClick} className={buttonClasses} disabled={disabled}>
      <span className="relative z-10">{title}</span>
    </button>
  );
};

export default CreateHomestayButton
