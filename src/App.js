
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import DownloadApp from './Components/Sections/DownloadApp/DownloadApp';
import FAQs from './Components/Sections/FAQs/FAQs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FAQs />
      <DownloadApp />
    </div>
  );
}

export default App;
