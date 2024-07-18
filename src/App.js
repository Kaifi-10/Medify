
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import DownloadApp from './Components/Sections/DownloadApp/DownloadApp';
import FAQs from './Components/Sections/FAQs/FAQs';
import Footer from './Components/Sections/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FAQs />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;
