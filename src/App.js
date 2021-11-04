import './App.css';
import Fade from 'react-reveal/Fade';
import Aboutme from './PortfolioContainer/AboutMe/Aboutme';
import Resume from './PortfolioContainer/Resume/Resume';
import Testimonial from './PortfolioContainer/Testimonial/Testimonial';
import Contactme from './PortfolioContainer/ContactMe/Contactme';
import Home from './PortfolioContainer/Home/Home';

function App() {
  return (
    <Fade className="App">
      <Home />
      <Aboutme />
      <Resume />
      <Testimonial />
      <Contactme />
    </Fade>
  );
}

export default App;
