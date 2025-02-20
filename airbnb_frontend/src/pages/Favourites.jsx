import React, { useEffect, useState } from 'react'
import EmptyState from '../components/EmptyState/EmptyState'
import homestayService from '../service/ListingService';
import FavouriteClient from '../components/FavouriteClient';

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const favouritesData = await homestayService.getFavourite();
        setFavourites(favouritesData);
        console.log(favouritesData)
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (favourites.length === 0) {
    return (
        <EmptyState
            title="No favourites found"
            subtitle='Look like you have no favourite listings'
        />
    )
  }

  return (
    <FavouriteClient listings={favourites}/>
  )
}

export default Favourites
