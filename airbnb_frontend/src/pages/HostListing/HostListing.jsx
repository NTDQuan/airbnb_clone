import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './HostListing.module.scss'
import { IoIosSearch } from "react-icons/io";
import { GoPlus } from "react-icons/go";

import UtilityButton from '../../components/UtilityButton/UtilityButton'
import ListTableElement from '../../components/ListTableElement/ListTableElement';
import homestayService from '../../service/ListingService';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles)

const HostListing = () => {
  const [homestays, setHomestays] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHomestays = async() => {
      try {
        const data = await homestayService.getAllHomestays();
        setHomestays(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching homestays:', error)
      }  
    };

    fetchHomestays();
  }, []);  



  return (
    <section className={cx('wrapper')}>
      <header>
        <div className={cx('title')}>
            <h1>Nhà/phòng cho thuê của bạn</h1>
        </div>
        <div className={cx('utility-button')}>
            <UtilityButton icon={IoIosSearch}  />
            <UtilityButton icon={GoPlus} onClick={() => { navigate('/become-a-host') }}/>
        </div>
      </header>
      <div className={cx('list')}>
        <table>
            <thead>
                <tr>
                    <th className={cx('listing')}>Mục cho thuê</th>
                    <th className={cx('location')}>Vị trí</th>
                    <th className={cx('status')}>Trạng thái</th>
                </tr> 
            </thead>
            <tbody>
              {homestays.map((homestay) => (
                <ListTableElement
                  key={homestay.id}
                  list={homestay.name}
                  location={homestay.address}
                  status={"pending"}
                  //TODO: add status
                />
              ))}
            </tbody>
        </table>
      </div>
    </section>
  )
}

export default HostListing
