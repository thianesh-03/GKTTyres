import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./Components/Pages/Landing";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/products" element={<Products />} /> */}
        </Routes>
        <Contact />
      </Router>
    </>
  );
}

export default App;
