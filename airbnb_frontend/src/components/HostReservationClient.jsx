import React, { useState, useEffect } from 'react'
import Container from '../pages/Container/Container'
import Heading from './Heading/Heading'
import HostReservationsTable from './Table/HostReservationsTable'
import homestayService from '../service/ListingService'
import userService from '../service/UserService';

const HostReservationClient = ({ reservations }) => {
  const [reservationsWithHomestay, setReservationsWithHomestay] = useState([]);

  useEffect(() => {
    const fetchHomestayDetails = async () => {
      const updatedReservations = await Promise.all(
        reservations.map(async (reservation) => {
          try {
            const homestayInfo = await homestayService.getHomestayInfo(reservation.homestayId);
            const user = await userService.getUserInfo(reservation.userId);
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
              guest: user?.name || "Unknown Host",
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

  return (
    <Container>
        <Heading
            title="Your reservations"
        />
        <div>
          <HostReservationsTable tableRows={reservationsWithHomestay}/>
        </div>
    </Container>
  )
}

export default HostReservationClient
