import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useLoaderData } from 'react-router-dom';
import Container from '../Container/Container'
import ClientHomestayInfoHeading from '../../components/ClientHomestayInfo/ClientHomestayInfoHeading'
import ClientHomestayInfo from '../../components/ClientHomestayInfo/ClientHomestayInfo'
import useLoginModal from '../../hooks/useLoginModal'
import { differenceInDays, eachDayOfInterval } from "date-fns"
import { useNavigate } from 'react-router-dom'
import useUserData from '../../hooks/useUserData'
import ListingReservation from '../../components/ClientHomestayInfo/ListingReservation'
import homestayService from '../../service/ListingService'

import { category } from '../../assets/data/CategoryData';

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection',
}

const HomestayInfo = ({ reservation = [] }) => {
  const homestayData = useLoaderData();
  const loginModal = useLoginModal();
  const navigation = useNavigate();
  const { user: currentUser } = useUserData();

  const [isLoading, setIsLoading] = useState(false)
  const [totalPrice, setTotalPrice] = useState();
  const [dateRange, setDateRange] = useState(initialDateRange)
  const [isSelfBooked, setIsSelfBooked] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [bookedDates, setBookedDates] = useState([]);

  console.log(homestayData);
  console.log(currentUser);

  const totalGuests = adults + children;

  useEffect(() => {
    if (!currentUser || !homestayData?.id) return;
  
    const fetchSelfBookingStatus = async () => {
      try {
        const result = await homestayService.checkSelfBooked(homestayData.id, currentUser.id);
        console.log(result)
        if (result.code == 200) {
          setIsSelfBooked(true);
        } else {
          setIsSelfBooked(false);
        }
      } catch (error) {
        console.error("Error checking self booking:", error);
      }
    };
  
    fetchSelfBookingStatus();
  }, [currentUser, homestayData]);
    
  useEffect(() => {
    if (!homestayData?.id) return;

    const fetchBookedDates = async () => {
      try {
        const result = await homestayService.getBookedDate(homestayData.id);
        console.log(result)
        setBookedDates(result);
      } catch (error) {
        console.error("Error fetching booked dates:", error);
      }
    };

    fetchBookedDates();
    
  }, [homestayData]);

  const disabledDates = useMemo(() => {
    let dates = [];
  
    reservation.forEach((reservation) => {
      const range = eachDayOfInterval({
        start: new Date(reservation.startDate),
        end: new Date(reservation.endDate)
      });
      dates = [...dates, ...range];
    });
  
    if (bookedDates.length > 0) {
      const bookedRanges = bookedDates.map(date => new Date(date));
      dates = [...dates, ...bookedRanges];
    }
  
    return dates;
  }, [reservation, bookedDates]);
    

  const onCreateReservation = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    setIsLoading(true);

    try {
      const reservationData = {
        requestId: uuidv4(),
        userId: currentUser.id,
        homestayId: homestayData.id,
        checkinDate: dateRange.startDate.toISOString().split('T')[0],
        checkoutDate: dateRange.endDate.toISOString().split('T')[0],
        guest: adults + children,
        adultGuests: adults,
        childGuests: children
      };
      console.log(reservationData)

      homestayService.bookHomestay(reservationData)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error('Failed to create reservation:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    } catch (error) {
      console.error('Failed to create reservation:', error);
    }
  }, [
    totalPrice,
    dateRange,
    navigation,
    currentUser,
    loginModal,
    homestayData,
    adults, 
    children
  ])

  return (
    <Container>
      <div className='max-w-screen-lg mx-auto'>
        <div className='flex flex-col gap-6'>
          <ClientHomestayInfoHeading
            name = {homestayData.name}
            country={homestayData.country}
            city={homestayData.city}
            image={homestayData.image}
            id={homestayData.id}
            currentUser={currentUser}
          />
          <div className='
            grid
            grid-cols-1
            md:grid-cols-7
            md:gap-10
            mt-6
          '>
            <ClientHomestayInfo
              user={currentUser}
              description={homestayData.description}
              guestCount={homestayData.maxGuests}
              roomCount={homestayData.bedRoomNum}
              bathroomCount={homestayData.bathRoomNum}
              category={homestayData.type}
            />
            <div className='
              order-first
              mb-10
              md:order-last
              md:col-span-3
            '>
              <ListingReservation
                price={homestayData.defaultPrice}
                totalPrice={10000}
                onChangeDate={(value) => setDateRange(value)}
                dateRange={dateRange}
                onSubmit={onCreateReservation}
                disabled={isLoading || isSelfBooked == true}
                disabledDates={disabledDates}
                adults={adults} 
                children={children} 
                setAdults={setAdults} 
                setChildren={setChildren} 
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default HomestayInfo
