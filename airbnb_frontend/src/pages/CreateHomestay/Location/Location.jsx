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
    <Container>
      <div className="
        w-full 
       bg-white
        flex
        justify-center
        items-center
        [scrollbar-width:none]
        md:overflow-y-auto
        md:mt-[61px]
        md:border-t-0
        md:h-[calc(100vh-88px)]
        md:px-[80px]
      ">
        <div className="flex h-auto flex-auto flex-col w-full items-center">
          <div className="w-[650px] mb-6 mt-4">
            <Heading title='Where is your place located?' subtitle='Your address is only shared with guests after they’ve made a reservation.' big={true} />
          </div>
          <form className="relative w-[650px] flex flex-col gap-3">
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
          <div className="
            relative
            v-[60vh]
            top-0
            mx-6
            mb-0
            flex-1
            w-[650px]
          ">
            <div className="absolute border-0 w-full md:rounded-2xl"></div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Location
