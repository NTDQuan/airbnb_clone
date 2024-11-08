import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import EmptyState from '../../components/EmptyState/EmptyState';
import Container from '../../components/Container/Container';
import homestayService from '../../service/ListingService';
import ListingCard from '../../components/ListingCard/ListingCard';

const cx = classNames.bind(styles);


const Home = () => {
  const [homestayList, setHomestayList] = useState([])

  useEffect(() => {
    try {
      const getHomestayList = async () => {
        const response = await homestayService.getAllHomestayCard();
        setHomestayList(response);
        console.log(response)
      }
      getHomestayList();
    } catch (error) {
      console.log(error)
    }
  }, [])

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
            <ListingCard key={homestay.id} homestay={homestay}/>
          )
        })}
      </div>
    </Container>
  )
}

export default Home
