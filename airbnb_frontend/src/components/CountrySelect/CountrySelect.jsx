import React from 'react'
import classNames from 'classnames/bind'
import styles from './CountrySelect.module.scss'
import useCountries from '../../hooks/useCountry'
import Select from 'react-select'

const cx = classNames.bind(styles)

const CountrySelect = ({ value, onChange }) => {
  const { getAll } = useCountries();

  return (
    <div>
      <Select
        placeholder="Anywhere"
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value)}
        formatOptionLabel={(option) => (
            <div className={cx('wrapper')}>
                <div>
                    {option.label},
                    <span className={cx('region-container')}>
                        {option.region}
                    </span>
                </div>
            </div>
        )}
        classNames={{
            control: () => cx('control'),
            input: () => cx('input'),
            option: () => cx('option'),
        }}
        theme={(theme) => ({
            ...theme,
            borderRadius: 3.75,
            colors: {
              ...theme.colors,
              primary: 'black',
              primary25: '#ffe4e6',
            },
        })}
      />
    </div>
  )
}

export default CountrySelect
