import React, { useEffect, useState, useMemo } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom';
import { differenceInDays } from 'date-fns';

import { BiSearch } from 'react-icons/bi'
import useSearchModal from '../../../hooks/useSearchModal'
import useCountries from '../../../hooks/useCountry';

const SearchBar = () => {
  const searchModal = useSearchModal();
  const [params] = useSearchParams();
  const { getByValues } = useCountries();

  const locationValue = params.get('locationValue');
  const startDate = params.get('startDate');
  const endDate = params.get('endDate');
  const guestCount = params.get('guestCount');

  const locationLabel = useMemo(() => {
    if (locationValue) {
        return getByValues(locationValue).label;
    }

    return 'Anywhere'
  }, [getByValues, locationValue]);

  const durationLabel = useMemo(() => {
    if (startDate && endDate) {
        console.log(startDate, endDate);
        const start = new Date(startDate);
        const end = new Date(endDate)
        let diff = differenceInDays(end, start);

        if (diff === 0) {
            diff = 1;
        }

        return `${diff} Days`
    }

    return 'AnyWeek'
  }, [startDate, endDate]);

  const guestLabel = useMemo(() => {
    if (guestCount) {
        return `${guestCount} Guests`
    }

    return 'Add Guests'
  }, [guestCount]);

  return (
    <div 
        onClick={searchModal.onOpen}
        className="
            border-[1px]
            w-full
            md:w-auto
            py-2
            rounded-full
            shadow-sm
            hover:shadow-md
            transition
            cursor-pointer
        "
    >
        <div 
            className="
                flex
                flex-row
                items-center
                justify-between
            "
        >
            <div 
                className="
                    text-sm
                    font-semibold
                    px-6
                "
            >
                {locationLabel}
            </div>
            <div 
                className="
                    hidden
                    sm:block
                    text-sm
                    font-semibold
                    px-6
                    border-x-[1px]
                    flex-1
                    text-center
                "
            >
                {durationLabel}
            </div>
            <div 
                className="
                    text-sm
                    pl-6
                    pr-2
                    text-gray-600
                    flex
                    flex-grow
                    items-center
                    gap-3
                "
            >
                <div className="hidden sm:block">
                    {guestLabel}
                </div>
                <div 
                    className="
                        p-2
                        bg-rose-500
                        rounded-full
                        text-white
                    "
                >
                    <BiSearch size={18}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchBar
