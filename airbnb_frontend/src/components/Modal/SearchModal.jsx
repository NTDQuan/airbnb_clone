import React, { useState, useMemo, lazy, useCallback, startTransition, Suspense } from 'react'
import Modal from './Modal'
import { useSearchParams, useNavigate } from 'react-router-dom';
import qs from 'query-string';
import { parseISO, setDate } from "date-fns"

import useSearchModal from '../../hooks/useSearchModal'
import { CountrySelectValue } from '../CountrySelect/CountrySelect'
import CountrySelect from '../CountrySelect/CountrySelect'
import Heading from '../Heading/Heading'
import Map from '../Map/Map'
import Counter from '../Input/Counter';
import Calendar from '../Input/Calendar';

const STEPS = {
  LOCATION: 0,
  DATE: 1,
  INFO: 2,
}

const SearchModal = () => {
  const searchModal = useSearchModal();
  const params = useSearchParams();
  const navigate = useNavigate();

  const [location, setLocation] = useState(null);
  const [step, setStep] = useState(STEPS.LOCATION);
  const [guestCount, setGuestCount] = useState(1);
  const [roomCount, setRoomCount] = useState(1);
  const [dateRange, setDateRange] = useState({ startDate: new Date(), endDate: new Date(), key: 'selection' });

  //const Map = useMemo(() => lazy(() => import('../Map/Map')), [location]);

  const onBack = useCallback(() => {
    setStep((value) => value - 1);
  }, [])

  const onNext = useCallback(() => {
    setStep((value) => value + 1);
  }, [])

  const onSubmit = useCallback(async () => {
    if (step != STEPS.INFO) {
      return onNext();
    }

    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery = {
      ...currentQuery,
      locationValue: location?.value,
      guestCount,
      startDate: dateRange.startDate,
      endDate: dateRange.endDate
    };

    if (dateRange.startDate) {
      updatedQuery.startDate = parseISO(dateRange.startDate.toISOString().split('T')[0]);
    }

    if (dateRange.endDate) {
      updatedQuery.endDate = parseISO(dateRange.endDate.toISOString().split('T')[0]);
    }

    console.log("Updated Query:", updatedQuery);

    const url = qs.stringifyUrl({
      url: '/',
      query: updatedQuery
    }, { skipNull: true });

    setStep(STEPS.LOCATION);
    searchModal.onClose();

    navigate(url);
  }, [
    step,
    searchModal,
    navigate,
    guestCount,
    dateRange,
    onNext,
    params
  ]);

  const actionLabel = useMemo(() => {
    if (step == STEPS.INFO) {
      return 'Search'
    }

    return 'Next'
  }, [step])

  const secondaryActionLabel = useMemo(() => {
    if (step == STEPS.LOCATION) {
      return undefined;
    }

    return 'Back'
  }, [step])

  let bodyContent = (
    <div className='flex flex-col gap-8'>
      <Heading
        title="Where do you wanna go ?"
        subtitle="Find the perfect location"
      />
      <CountrySelect
        value={location}
        onChange={(value) =>
          setLocation(value)
        }
      />
      <hr/>
      <Map center={location?.latlng}/>
    </div>
  )

  if (step == STEPS.DATE) {
    bodyContent = (
      <div className='flex flex-col gap-8'>
        <Heading
          title="When do you plan to go ? "
          subtitle="Make sure everyone is free!"
        />
        <Calendar
          value={dateRange}
          onChange={(value) => setDateRange(value.selection)}
        />
      </div>
    )
  }

  if (step == STEPS.INFO) {
    bodyContent = (
      <div className='flex flex-col gap-8'>
        <Heading
          title="More infomation"
          subtitle="Find your perfect place!"
        />
        <Counter
          title="Guests"
          subtitle="How many guests are coming?"
          value={guestCount}
          onChange={(value) => setGuestCount(value)}
        />
        <Counter
          title="Rooms"
          subtitle="How many rooms do you need?"
          value={roomCount}
          onChange={(value) => setRoomCount(value)}
        />
      </div>
    )
  }

  return (
    <Modal 
        isOpen={searchModal.isOpen} 
        onClose={searchModal.onClose}
        onSubmit={onSubmit}
        title="Filter"
        actionLabel={actionLabel}
        secondaryActionLabel={secondaryActionLabel}
        secondaryAction={step === STEPS.LOCATION ? undefined : onBack}
        body={bodyContent}
    />
      
  )
}

export default SearchModal
