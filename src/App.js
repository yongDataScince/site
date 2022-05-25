import './App.css';
import { Header } from './components/Header/Header';
import { Body } from './components/Body/Body';
import { Footer } from './components/Footer/Footer';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function App() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== "/staking" && location.pathname !== "/staking") {
      navigate("/staking")
    }
  }, [location])
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
