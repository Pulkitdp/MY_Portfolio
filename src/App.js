import './App.css';
import Profile from './PortfolioContainer/Home/Profile';
import Header from './PortfolioContainer/Home/Header';
import Footer from './PortfolioContainer/Home/Footer';
import Aboutme from './PortfolioContainer/AboutMe/Aboutme';
import Resume from './PortfolioContainer/Resume/Resume';
import Testimonial from './PortfolioContainer/Testimonial/Testimonial';
import Contactme from './PortfolioContainer/ContactMe/Contactme';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile/>
      <Footer />
      <Aboutme />
      <Resume />
      <Testimonial />
      <Contactme />
    </div>
  );
}

export default App;
