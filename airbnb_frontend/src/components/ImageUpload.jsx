import React, { useCallback, useState } from 'react'
import { CldUploadWidget } from "@cloudinary/react";

const ImageUpload = ({ onChange }) => {
  const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME

  const [value, setValue] = useState('');

  console.log("Cloud Name: ", cloudName);

  const handleUpload = useCallback((result) => {
    setValue(result.info.secure_url);
    onChange({ image: result.info.secure_url});
  }, [onChange])

  const openWidget = () => {
    const widget = window.cloudinary.createUploadWidget({
      cloudName: cloudName,
      uploadPreset: "airbnb_clone",
      multiple: false,
      sources: ["local", "url"],
    }, (error, result) => {
      if (!error && result && result.event === "success") {
        handleUpload(result);
      }
    });
    widget.open();
  }

  return (
    <div 
        onClick={openWidget}
        className='
            relative
            cursor-pointer
            hover:opacity-70
            transition
            border-dashed
            border-2
            p-20
            border-neutral-300
            flex
            flex-col
            justity-center
            items-center
            gap-4
            text-neutral-600
        '
    >
        {value ? (
            <div className='absolute inset-0 w-full h-full'>
                <img
                    src={value}
                    alt='Uploaded'
                    className='w-full h-full object-cover'
                />  
            </div>
        ) : (
            <div className='font-semibold text-lg'>
                Click to upload
            </div>
        )}
    </div>
  )
}

export default ImageUpload
