import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Cards from './Components/Cards';
import Services from './Components/Services';
import Brands from './Components/Brands';
import Testimonials from './Components/Testimonials';

function App() {
  
  return (
    <>
      <Header/>
      <Navbar/>
      <Carousel/>
      <Cards/>
      <Services/>
      <Brands/>
      <Testimonials/>
    </>
  )
}

export default App