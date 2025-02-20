import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import EmptyState from '../../components/EmptyState/EmptyState';
import Container from '../../components/Container/Container';
import homestayService from '../../service/ListingService';
import ListingCard from '../../components/ListingCard/ListingCard';
import useCountries from '../../hooks/useCountry';
import { useOutletContext } from 'react-router-dom';

import { useSearchParams } from 'react-router-dom';

const cx = classNames.bind(styles);


const Home = () => {
  const [homestayList, setHomestayList] = useState([])
  const [loading, setLoading] = useState(true);
  const [params] = useSearchParams();
  const { currentUser } = useOutletContext();

  const { getByValues } = useCountries();

  console.log("searchParams:", params);
  console.log("category:", params.get("category"));

  const category = params.get('category');
  const locationValue = params.get('locationValue');
  const startDate = params.get('startDate');
  const endDate = params.get('endDate');
  const guestCount = params.get('guestCount');

  useEffect(() => {
    const getHomestayList = async () => {
      try {
        setLoading(true);

        const filter = {
          category: category || null,
          locationValue: getByValues(locationValue)?.label || null,
          startDate: startDate || null,
          endDate: endDate || null,
          guestCount: guestCount || null,
        };

        const response = await homestayService.searchFilteredHomestayCard(filter);
        setHomestayList(response || []);
        console.log(homestayList)
      } catch (error) {
        console.error('Error fetching homestay list:', error);
      } finally {
        setLoading(false);
      }
    }
    getHomestayList()
  }, [category, locationValue, startDate, endDate, guestCount])


  if (homestayList.length === 0) {
    return (
      <EmptyState showReset/>
    )
  }

  return (
    <Container>
      <div className='
        pt-24
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-8
      '>
        {homestayList.map((homestay) => {
          return (
            <ListingCard key={homestay.id} homestay={homestay} currentUser={currentUser}/>
          )
        })}
      </div>
    </Container>
  )
}

export default Home
