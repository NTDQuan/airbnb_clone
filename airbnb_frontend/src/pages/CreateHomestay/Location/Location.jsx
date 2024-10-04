import React, { useMemo, useEffect } from 'react'
import { useForm, SubmitHandler, Controller, useWatch } from "react-hook-form"
import classNames from 'classnames/bind'
import styles from './Location.module.scss'
import Container from '../../Container/Container'
import Heading from '../../../components/Heading/Heading'
import Input from '../../../components/Input/Input'
import { useOutletContext } from 'react-router-dom';
import useCountries from '../../../hooks/useCountry';
import CountrySelect from '../../../components/CountrySelect/CountrySelect'
import Map from '../../../components/Map/Map'

const cx = classNames.bind(styles)

const Location = () => {
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
                render={({ field: { onChange, value } }) => (
                  <CountrySelect
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
              {errors.country && <p className={cx('error')}>Country is required</p>}
              <Input
                className={cx('input')}
                id="street"
                label="Street address"
                register={register}
                errors={errors}
              />
              <Input
                className={cx('input')}
                id="city"
                label="City/district/town"
                register={register}
                errors={errors}
              />
              <Input
                className={cx('input')}
                id="province"
                label="Municipality/province"
                register={register}
                errors={errors}
              />
              <Map/>
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
