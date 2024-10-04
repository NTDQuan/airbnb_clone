import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import EmptyState from '../../components/EmptyState/EmptyState';
import Container from '../../components/Header/Container/Container';
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
    <div className={cx('wrapper')}>     
      <Container>
        <div className={cx('contain')}>
          {homestayList.map((homestayList) => {
            return (
              <ListingCard/>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

export default Home
