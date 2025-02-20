import React, { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import homestayService from '../service/ListingService'

import useLoginModal from './useLoginModal.jsx'
import { useNavigate } from 'react-router-dom'

const useFavourite = ({ currentUser, listingId }) => {
  const loginModal = useLoginModal();
  const navigate = useNavigate();
  const [hasFavourited, setHasFavourited] = useState(false);

  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const list = await homestayService.getFavourite();
        if (Array.isArray(list)) {
          setHasFavourited(list.some((item) => item.id === listingId));
        }
      } catch (error) {
        console.error("Error fetching favourite list:", error);
      }
    };

    fetchFavourites();
  }, [listingId]);

  const toggleFavourite = useCallback(async(e) => {
    e.stopPropagation();

    if (!currentUser) {
        return loginModal.onOpen();
    }

    try {
        let request;

        if (hasFavourited) {
            request = () => homestayService.removeFavourite(listingId);
        } else {
            request = () => homestayService.addToFavourite(listingId);
        }

        await request();
        navigate(0);
        toast.success('Success');
    } catch (error) {
        toast.error('Something went wrong');
    }
  }, [
    currentUser,
    hasFavourited,
    listingId, 
    loginModal,
    navigate
  ])

  return { hasFavourited, toggleFavourite };
}

export default useFavourite
