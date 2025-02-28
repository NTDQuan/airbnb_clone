import React, { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import axios from 'axios';

import homestayService from './service/ListingService'

import DefaultLayout from './pages/Layout/DefaultLayout/DefaultLayout';
import HostingLayout from './pages/Layout/HostingLayout/HostingLayout';
import HostingHome from './pages/HostingHome/HostingHome';
import useUserData from './hooks/useUserData';
import HostListing from './pages/HostListing/HostListing';
import { PrivateRoute } from './routes/PrivateRoute';
import BecomeAHost from './pages/BecomeAHost/BecomeAHost';
import BecomeAHostLayout from './pages/Layout/BecomeAHostLayout/BecomeAHostLayout';
import fetchUserInfo from './actions/fetchUserInfo';
import Overview from './pages/CreateHomestay/Overview/Overview';
import Structure from './pages/CreateHomestay/Structure/Structure';
import PrivacyType from './pages/CreateHomestay/PrivacyType/PrivacyType';
import Location from './pages/CreateHomestay/Location/Location';
import FloorPlan from './pages/CreateHomestay/FloorPlan/FloorPlan';
import Amenities from './pages/CreateHomestay/Amenities/Amenities';
import Photo from './pages/CreateHomestay/Photo/Photo';
import Title from './pages/CreateHomestay/Title/Title';
import Description from './pages/CreateHomestay/Description/Description';
import InstantBook from './pages/CreateHomestay/InstantBook/InstantBook';
import Price from './pages/CreateHomestay/Price/Price';
import Receipt from './pages/CreateHomestay/Receipt/Receipt';
import Home from './pages/Home/Home';
import ClientHomestayInfo from './pages/ClientHomestayInfo/ClientHomestayInfo';
import useAuthCheck from './hooks/useAuthCheck';
import Trips from './pages/Trips';
import HostReservation from './pages/HostReservation';
import Favourites from './pages/Favourites';

function App() {
    function AuthCheckWrapper({ children }) {
      useAuthCheck();
      return children;
    }

    const authUser = useUserData();
    const [currentUser, setCurrentUser] = useState(null);
  
    useEffect(() => {
      setCurrentUser(authUser.user);
    }, [authUser.user]);
  
    function handleSignout() {
      if (authUser.onSignout) {
        authUser.onSignout();
        setCurrentUser(authUser.user);
      } else {
        console.warn('onSignout function is not defined in authUser.');
      }
    }
  
    // Define routes with loaders where necessary
    const router = createBrowserRouter([
      {
        path: "/",
        element: <DefaultLayout currentUser={currentUser} />,
        children: [
          {index: true, element: <Home/>},
          {
            path: "/rooms/:id",
            element: <ClientHomestayInfo/>,
            loader: async ({ params }) => {
              return homestayService.getHomestayInfo(params.id);
            }
          },
          {
            path: "/trips",
            element: <Trips/>
          },
          {
            path: "/favourites",
            element: <Favourites/>
          }
        ]
      },
      {
        path: "/hosting",
        element: <PrivateRoute><HostingLayout currentUser={currentUser} /></PrivateRoute>,
        children: [
          { index: true, element: <HostReservation /> },
          { path: "listings", element: <HostListing /> }
        ]
      },,
      {
        path: "/become-a-host",
        element: <BecomeAHostLayout currentUser={currentUser} />,
        children: [
          { index: true, element: <BecomeAHost currentUser={currentUser} /> },
          { path: "overview", element: <Overview /> },
          {
            path: ":id",
            children: [
              { path: "structure", element: <Structure /> },
              { path: "privacy-type", element: <PrivacyType /> },
              { path: "location", element: <Location /> },
              { path: "floor-plan", element: <FloorPlan /> },
              { path: "amenities", element: <Amenities /> },
              { path: "photos", element: <Photo /> },
              { path: "title", element: <Title /> },
              { path: "description", element: <Description /> },
              { path: "instant-book", element: <InstantBook /> },
              { path: "price", element: <Price /> },
              {
                path: "receipt",
                element: <Receipt />,
                loader: async ({ params }) => {
                  return homestayService.getHomeStayCardById(params.id);
                }
              }
            ]
          },
        ]
      }
    ]);
  
    return  <RouterProvider router={router}>
                <AuthCheckWrapper>                
                </AuthCheckWrapper>
            </RouterProvider>;
  }

export default App;
