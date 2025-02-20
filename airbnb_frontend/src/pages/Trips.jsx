import React, { useEffect, useState } from 'react'

import getCurrentUser from '../hooks/useUserData'
import Container from './Container/Container';
import Heading from '../components/Heading/Heading';
import EmptyState from '../components/EmptyState/EmptyState';
import homestayService from '../service/ListingService';
import TripClient from '../components/TripClient';
import useUserData from '../hooks/useUserData';

const Trips = () => {
  const { user: currentUser } = useUserData();
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reservationsData = await homestayService.getReservations();
        setReservations(reservationsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (reservations.length === 0) {
    return (
        <EmptyState
            title = "No trip found"
            subtitle = "Look like you haven't reserved any trips"
        />
    )
  }

  return (
    <Container>
        <TripClient reservations={reservations}/>
    </Container>
  )
}

export default Trips
