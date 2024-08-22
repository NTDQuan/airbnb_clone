import React, { useMemo } from 'react'
import { useForm } from "react-hook-form"
import classNames from 'classnames/bind'
import styles from './Location.module.scss'
import Container from '../../Container/Container'
import Heading from '../../../components/Heading/Heading'
import Input from '../../../components/Input/Input'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import CreateHomestayFooter from '../../../components/Footer/CreateHomestayFooter/CreateHomestayFooter'

const cx = classNames.bind(styles)

const selectorStyles = {
  control: (provided) => ({
    ...provided,
    width: '100%',
    fontWeight: 300,
    backgroundColor: 'white',
    border: '2px solid #d1d5db',
    borderRadius: '0.375rem',
    outline: 'none',
    boxShadow: 'none', // Remove the default box shadow
    '&:hover': {
      border: '2px solid #d1d5db', // Ensures the border stays the same on hover
    },
  }),
}

const Location = () => {
  const options = useMemo(() => countryList().getData(), [])


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      street: '',
      city: '',
      province: '',
      country: ''
    }
  });


  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <Container>
          <div className={cx('contain')}>
            <div className={cx('title')}>
              <Heading title='Where is your place located?' subtitle='Your address is only shared with guests after they’ve made a reservation.' big={true}/>
            </div>
            <div className={cx('input-container')}>
              <Select
                id="country"
                options={options} 
                register={register}
                errors={errors}
                styles={selectorStyles}
              />
              <Input 
                id="street" 
                label="Street address" 
                register={register}
                errors={errors}
              />
              <Input 
                id="city" 
                label="City/district/town" 
                register={register}
                errors={errors}
              />
              <Input 
                id="province" 
                label="Municipality/province" 
                register={register}
                errors={errors}
              />
            </div>
            <div className={cx('map-container')}>
              <div className={cx('map-contain')}>

              </div>
            </div>
            <div className='form'>

            </div>
          </div>
        </Container>
        <CreateHomestayFooter title='Get started' available={true}/>
      </div>
    </div>
  )
}

export default Location
