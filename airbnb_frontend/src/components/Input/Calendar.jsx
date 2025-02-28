import React from 'react'
import { DateRange, Range, RangeKeyDict } from 'react-date-range'
import { enUS } from 'date-fns/locale';

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const Calendar = ({ value, onChange, disabledDates }) => {
  return (
    <DateRange
      rangeColors={['#262626']}
      ranges={[value]}
      date={new Date()}
      onChange={onChange}
      direction='vertical'
      showDateDisplay={false}
      minDate={new Date()}
      disabledDates={disabledDates}
      locale={enUS}
    />
  )
}

export default Calendar
