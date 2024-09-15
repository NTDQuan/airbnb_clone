import React, { useMemo, useEffect } from 'react'
import { useForm, SubmitHandler, Controller, useWatch } from "react-hook-form"
import classNames from 'classnames/bind'
import styles from './Location.module.scss'
import Container from '../../Container/Container'
import Heading from '../../../components/Heading/Heading'
import Input from '../../../components/Input/Input'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { useOutletContext } from 'react-router-dom';

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
    boxShadow: 'none',
    '&:hover': {
      border: '2px solid #d1d5db',
    },
  }),
}

const Location = () => {
  const options = useMemo(() => countryList().getData(), []);
  const { handleChildData } = useOutletContext();

  const {
    register,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      street: '',
      city: '',
      province: '',
      country: ''
    }
  }); 

  const formData = useWatch({
    control
  })

  useEffect(() => {
    // Call handleChildData only if formData has actual data
    if (formData.street || formData.city || formData.province || formData.country) {
      handleChildData(formData);
    }
  }, [formData, handleChildData]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <Container>
          <div className={cx('contain')}>
            <div className={cx('title')}>
              <Heading title='Where is your place located?' subtitle='Your address is only shared with guests after they’ve made a reservation.' big={true} />
            </div>
            <form className={cx('input-container')}>
              <Controller
                name="country"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={options}
                    styles={selectorStyles}
                  />
                )}
              />
              {errors.country && <p className={cx('error')}>Country is required</p>}
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
              <button type="submit" style={{ display: 'none' }}></button>
            </form>
            <div className={cx('map-container')}>
              <div className={cx('map-contain')}></div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Location
