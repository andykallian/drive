import './App.css';
import Driver from './components/driver/Driver';
import Find from './components/find/Find';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Luxury from './components/luxury/Luxury';
import Navbar from './components/navbar/Navbar';
import ScrollToTop from './components/scroll/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Find />
      <Driver />
      <Luxury />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
