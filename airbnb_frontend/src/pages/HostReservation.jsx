import React, { useEffect, useState } from 'react'
import Container from './Container/Container'
import HostReservationClient from '../components/HostReservationClient'
import EmptyState from '../components/EmptyState/EmptyState';
import homestayService from '../service/ListingService';

const HostReservation = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reservationsData = await homestayService.getHostingReservations();
        setReservations(reservationsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if(reservations.length === 0) {
    return (
      <EmptyState
        title = "No reservation found"
        subtitle = "You don't have any reservation yet"
      />
    )
  }

  return (
    <Container>
        <HostReservationClient reservations={reservations}/>
    </Container>
  )
}

export default HostReservation
