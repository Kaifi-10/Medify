
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Navbar from './Components/Navbar/Navbar';
import DownloadApp from './Components/Sections/DownloadApp/DownloadApp';
import FAQs from './Components/Sections/FAQs/FAQs';
import Footer from './Components/Sections/Footer/Footer';
import HeroSection from './Components/Sections/HeroSection/HeroSection';
import SearchPage from './Components/SearchPage/SearchPage';
import BookingPage from './Components/BookingPage/BookingPage';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <HomePage /> */}
      {/* <Router> */}
      <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path='/bookings' element={<BookingPage />} />
        {/* Add other routes here */}
      </Routes>
    {/* </Router> */}

      <FAQs />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;
