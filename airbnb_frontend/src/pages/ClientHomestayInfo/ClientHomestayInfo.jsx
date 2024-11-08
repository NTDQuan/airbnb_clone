import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Container from '../Container/Container'
import ClientHomestayInfoHeading from '../../components/ClientHomestayInfo/ClientHomestayInfoHeading'
import ClientHomestayInfo from '../../components/ClientHomestayInfo/ClientHomestayInfo'
import useLoginModal from '../../hooks/useLoginModal'
import { differenceInDays, eachDayOfInterval } from "date-fns"
import { useNavigate } from 'react-router-dom'
import useUserData from '../../hooks/useUserData'
import ListingReservation from '../../components/ClientHomestayInfo/ListingReservation'

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection',
}

const HomestayInfo = ({ reservation = [] }) => {
  const loginModal = useLoginModal();
  const navigation = useNavigate();
  const { currentUser } = useUserData();
  
  const disabledDates = useMemo(() => {
    let dates = [];

    reservation.forEach((reservation) => {
      const range = eachDayOfInterval({
        start: new Date(reservation.startDate),
        end: new Date(reservation.endDate)
      });

      dates = [ ...dates, ...range];
    });

    return dates;
  }, [reservation])

  const [isLoading, setIsLoading] = useState(false)
  const [totalPrice, setTotalPrice] = useState();
  const [dateRange, setDateRange] = useState(initialDateRange)

  const onCreateReservation = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    setIsLoading(true);

    //TODO: set logic
  }, [
    totalPrice,
    dateRange,
    navigation,
    currentUser,
    loginModal
  ])



  return (
    <Container>
      <div className='max-w-screen-lg mx-auto'>
        <div className='flex flex-col gap-6'>
          <ClientHomestayInfoHeading
            
          />
          <div className='
            grid
            grid-cols-1
            md:grid-cols-7
            md:gap-10
            mt-6
          '>
            <ClientHomestayInfo/>
            <div className='
              order-first
              mb-10
              md:order-last
              md:col-span-3
            '>
              <ListingReservation
                price={1000}
                totalPrice={10000}
                onChangeDate={(value) => setDateRange(value)}
                dateRange={dateRange}
                onSubmit={onCreateReservation}
                disabled={isLoading}
                disabledDates={disabledDates}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default HomestayInfo
