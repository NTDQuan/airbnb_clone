import React, { useState, useEffect, useCallback } from 'react'
import classNames from 'classnames/bind'
import styles from './BecomeAHostLayout.module.scss'
import CreateHomestayHeader from '../../../components/Header/CreateHomestayHeader/CreateHomestayHeader';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import CreateHomestayFooter from '../../../components/Footer/CreateHomestayFooter/CreateHomestayFooter';
import homestayService from '../../../service/ListingService'

const cx = classNames.bind(styles);

const BecomeAHostLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [footerTitle, setFooterTitle] = useState('Next');
  const [footerOnClick, setFooterOnClick] = useState(() => () => {});
  const [childData, setChildData] = useState(null);
  const [homestayId, setHomestayId] = useState(null);

  const handleChildData = useCallback((data) => {
    setChildData(data);
  }, []);

  useEffect(() => {
    const path = location.pathname;
    const dynamicPathRegex = /\/become-a-host\/(\d+)\/(.+)/;
    const dynamicPathMatch = path.match(dynamicPathRegex);
    console.log("Render run")
    console.log(path)

    if (path === '/become-a-host/overview') {
      setFooterTitle('Get started');
      setFooterOnClick(() => async () => {
        try {
          console.log('Create homestay');
          const newHomestayId = await homestayService.addNewHomestay({});
          setHomestayId(newHomestayId);
          navigate(`/become-a-host/${newHomestayId}/structure`);
        } catch (error) {
          console.error('Error creating homestay', error);
        }
      });
    } else if (dynamicPathMatch) {
      const [, id, subPath] = dynamicPathMatch;

      switch (subPath) {
        case 'structure':
          console.log('structure')
          setFooterTitle('Next');
          setFooterOnClick(() => async () => {
            try {
              await homestayService.editHomestayDetail(id, { geometry: childData.category });
              console.log('Structure updated for ID:', id);
              navigate(`/become-a-host/${id}/location`);
            } catch (error) {
              console.error('Error updating structure', error);
            }
          });
          break;
        
        case 'location':
          console.log('location')
          setFooterTitle('Next');
          setFooterOnClick(() => async () => {
            console.log(childData)
            try {
              await homestayService.editHomestayDetail(id, {
                street: childData?.street,
                city: childData?.city,
                province: childData?.province,
                country: childData?.country.label,
              });
              console.log(childData)
              console.log('Location updated for ID:', id);
              navigate(`/become-a-host/${id}/floor-plan`);
            } catch (error) {
              console.error('Error updating location', error);
            }
          });
          break;

        case 'floor-plan':
          console.log('floor plan')
          setFooterTitle('Next');
          setFooterOnClick(() => async () => {
            console.log(childData)
            try {
              await homestayService.editHomestayDetail(id, {
                bathRoomNum: childData.bath_room_num,
                bedRoomNum: childData.bed_room_num,
                bedNum: childData.bed_num,
                maxGuests: childData.max_guests,
              });
              console.log(childData)
              console.log('Floor-plan updated for ID:', id);
              navigate(`/become-a-host/${id}/amenities`);
            } catch (error) {
              console.error('Error updating floor plan', error);
            }
          });
          break;

        case 'amenities':
          console.log('amenities')
          setFooterTitle('Next');
          setFooterOnClick(() => async () => {
            try {
              console.log('update')
              console.log({ amenities: childData.amenities })
              await homestayService.editHomestayDetail(id, {
                amenityIds: childData.amenities,
              });
              console.log(childData)
              console.log('Amenities updated for ID:', id);
              navigate(`/become-a-host/${id}/photos`);
            } catch (error) {
              console.error('Error updating amenities', error);
            }
          });
          break;

        case 'photos':
          console.log('photos')
          setFooterTitle('Next');
          setFooterOnClick(() => async () => {
            navigate(`/become-a-host/${id}/title`);
          })
          break;

        case 'title':
          console.log('title')
          setFooterTitle('Next');
          setFooterOnClick(() => async () => {
            try {
              console.log(childData)
              await homestayService.editHomestayDetail(id, {
                name: childData.title
              })
              navigate(`/become-a-host/${id}/description`);
            } catch (error) {
              console.error('Error updating title', error);
            }
          });
          break;

        case 'description':
          console.log('description')
          setFooterTitle('Next');
          setFooterOnClick(() => async () => {
            try {
              console.log(childData)
              await homestayService.editHomestayDetail(id, {
                description: childData.description
              })
              navigate(`/become-a-host/${id}/instant-book`);
            } catch (error) {
              console.error('Error updating description', error);
            }
          });
          break;

        case 'instant-book':
          console.log('instant book')
          setFooterTitle('Next');
          setFooterOnClick(() => async () => {
            try {
              console.log(childData)
              await homestayService.editHomestayDetail(id, {
                reservation: childData
              })
              navigate(`/become-a-host/${id}/price`);
            } catch (error) {
              console.error('Error updating instant book', error);
            }
          });
          break;

        case 'price':
          console.log('price')
          setFooterTitle('Next');
          setFooterOnClick(() => async () => {
            try {
              console.log(childData)
              await homestayService.editHomestayDetail(id, {
                defaultPrice: childData.price
              })
              console.log('Price updated for ID:', id);
              navigate(`/become-a-host/${id}/receipt`);
            } catch (error) {
              console.error('Error updating price', error);
            }
          });
          break;

        case 'receipt':
          console.log('receipt');
          setFooterTitle('Finish');
          setFooterOnClick(() => async () => {
            try {
              console.log(childData);
              await homestayService.finishCreateHomestay(id);
              console.log('Finished creating homestay for ID:', id);
              navigate('/');
            } catch (error) {
              console.error('Error finishing creating homestay', error);
            }
          });
          break;
        
        default:
          setFooterTitle('Next');
          setFooterOnClick(() => () => {
            console.log('Default continue clicked');
          });
          break;
      }
    } else {
      setFooterTitle('Next');
      setFooterOnClick(() => () => {
        console.log('Default continue clicked');
      });
    }
  }, [location.pathname, childData, navigate]);

  return (
    <div className={cx('wrapper')}>
      <CreateHomestayHeader/>
      <div className={cx('content')}>
        <Outlet context={{ handleChildData }}/>
      </div>
      <CreateHomestayFooter title={footerTitle} onClick={footerOnClick}/>
    </div>
  )
}

export default BecomeAHostLayout
