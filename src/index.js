import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

// export const MetaMaskContext = React.createContext(null);
// export const MetaMaskProvider = ({ children }) => {

// }

const ReNavigate = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === '/') {
      navigate("/staking")
    }
  }, [location])

}

root.render(
  <React.StrictMode>
    <Router>
      <ReNavigate />
      <Routes>
        <Route path='/nftstaking' element={<App />} />
        <Route path='/staking' element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
// https://yongdatascince.github.io/site/