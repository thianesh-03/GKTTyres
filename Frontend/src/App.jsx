import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Cards from './Components/Cards';
import Services from './Components/Services';

function App() {
  
  return (
    <>
      <Header/>
      <Navbar/>
      <Carousel/>
      <Cards/>
      <Services/>
    </>
  )
}

export default App