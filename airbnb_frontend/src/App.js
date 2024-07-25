import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './pages/Layout/DefaultLayout/DefaultLayout';
import AuthProvider from 'react-auth-kit'
import createStore from 'react-auth-kit/createStore'

function App() {
    const store = createStore({
        authName:'_auth',
        authType:'cookie',
        cookieDomain: window.location.hostname,
        cookieSecure: window.location.protocol === 'https:',
    });
    
    return (
        <AuthProvider store={store}>
            <Router>
            <div className="App">
                    <Routes>
                        <Route path="/" element={<DefaultLayout/>}/>
                    </Routes>
            </div>
        </Router>
        </AuthProvider>

    );
}

export default App;
