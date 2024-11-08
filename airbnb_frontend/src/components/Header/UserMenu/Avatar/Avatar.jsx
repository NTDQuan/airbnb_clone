import React from 'react'
import images from '../../../../assets/image/image'

const Avatar = () => {
  return (
    <img
        src={images.user_icon}
        alt='logo'
        className="rounded-full"
        height="30"
        width="30"
    />
  )
}

export default Avatar
