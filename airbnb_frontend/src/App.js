import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './pages/Layout/DefaultLayout/DefaultLayout';

function App() {
  return (
      <Router>
          <div className="App">
                <Routes>
                    <Route path="/" element={<DefaultLayout/>}/>
                </Routes>
          </div>
      </Router>
  );
}

export default App;
