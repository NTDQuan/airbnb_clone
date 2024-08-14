import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';

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

function App() {
    const authUser = useUserData();
    const [currentUser, setCurrentUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function autoLogin() {
            try {
                const res = await axios({
                    method: 'get',
                    url: 'http://localhost:8080/api/auth/auto-login',
                    withCredentials: true,
                });
                console.log('auto-login run');
                if (res.status === 200) {
                    authUser.onLogin(await fetchUserInfo());
                    setCurrentUser(authUser.user);
                } else {
                    handleSignout()
                    navigate('/');
                }
            } catch (error) {
                console.error('Error during auto-login:', error);
                handleSignout() // Ensure sign out in case of error
                navigate('/');
            }
        }
        autoLogin();
    }, [navigate]);

    useEffect(() => {
        console.log('set user run');
        setCurrentUser(authUser.user);
    }, [authUser.user]);

    function handleSignout() {
        // Replace with actual signout logic if needed
        if (authUser.onSignout) {
            authUser.onSignout();
            setCurrentUser(authUser.user);
        } else {
            // Fallback logic if onSignout is not defined
            console.warn('onSignout function is not defined in authUser.');
        }
    }

    return (
            <div className="App">
                <Routes>
                    <Route path="/" element={<DefaultLayout currentUser={currentUser} />} />
                    <Route path='/hosting' element={<PrivateRoute><HostingLayout currentUser={currentUser} /></PrivateRoute>}>
                        <Route index element={<HostingHome />} />
                        <Route path="listings" element={<HostListing />} />
                    </Route>
                    <Route path='/become-a-host' element={<BecomeAHostLayout currentUser={currentUser} />}>
                        <Route index element={<BecomeAHost currentUser={currentUser} />} />
                        <Route 
                            path='overview'
                            element={<Overview/>}
                        />
                        <Route
                            path=":id"          
                        >
                            <Route path='structure' element={<Structure/>}/>
                        </Route>
                    </Route>
                </Routes>
            </div>
    );
}

export default App;
