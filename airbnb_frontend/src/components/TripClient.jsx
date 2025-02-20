import React, { useCallback, useState, useEffect } from 'react'
import Container from '../pages/Container/Container'
import Heading from './Heading/Heading'
import ListingCard from './ListingCard/ListingCard';
import homestayService from '../service/ListingService';
import userService from '../service/UserService';

import Table from './Table/ReservationTable';

const TABLE_HEAD = ["Status", "Date and location", "Host", "Details"]

const TripClient = ({ reservations }) => {
  const [deletingId, setDeletingId] = useState('');
  const [reservationsWithHomestay, setReservationsWithHomestay] = useState([]);

  useEffect(() => {
    const fetchHomestayDetails = async () => {
      const updatedReservations = await Promise.all(
        reservations.map(async (reservation) => {
          try {
            const homestayInfo = await homestayService.getHomestayInfo(reservation.homestayId);
            console.log(`homestayInfo: `, homestayInfo)
            const user = await userService.getUserInfo(homestayInfo.ownerId);
            console.log(`user: `, user)

            return {
              status: reservation.status,
              dateAndLocation: (
                <div className="space-y-1">
                  <a 
                    href={`/rooms/${reservation.homestayId}`} 
                    className="text-blue-600 hover:underline font-semibold"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {homestayInfo?.name || "Unknown Homestay"}
                  </a>
                  <div className="text-gray-600">
                    {homestayInfo?.city}, {homestayInfo?.country}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {homestayInfo?.address}
                  </div>
                </div>
              ),
              host: user?.name || "Unknown Host",
              details: reservation.totalPrice || "N/A"
            };
          } catch (error) {
            return {
              status: reservation.status,
              dateAndLocation: <div className="text-red-500">Error Fetching Data</div>,
              host: "N/A",
              details: "N/A",
            };
          }
        })
      );
      setReservationsWithHomestay(updatedReservations);
    };

    if (reservations.length > 0) {
      fetchHomestayDetails();
    }
  }, [reservations]);

  const onCancel = useCallback((id) => {
    setDeletingId(id);

  })

  return (
    <Container>
        <Heading
            title = "Trips"
            subtitle="Where you've been and where you're going"
        />
        <div>
          <Table tableRows={reservationsWithHomestay}/>
        </div>
    </Container>
  )
}

export default TripClient
