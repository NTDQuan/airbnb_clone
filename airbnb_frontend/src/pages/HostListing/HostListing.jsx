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
    <section className="flex flex-col">
      <header className='
        flex 
        flex-row
        justify-between
        my-10
      '>
        <div className="flex justify-center">
            <h1 className='text-3xl font-bold'>Your listings</h1>
        </div>
        <div className="flex flex-row gap-[1rem]">
            <UtilityButton icon={IoIosSearch}  />
            <UtilityButton icon={GoPlus} onClick={() => { navigate('/become-a-host') }}/>
        </div>
      </header>
      <div className="w-full">
        <table className='
          w-full
          border
          border-transparent
          border-separate
          border-spacing-4
          text-left
        '>
            <thead>
                <tr>
                    <th className="p-3 w-1/2 min-w-[335px]">Listing</th>
                    <th className="p-3 w-[27%]">Location</th>
                    <th className="p-3 w-[19%]">Status</th>
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
