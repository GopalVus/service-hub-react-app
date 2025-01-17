import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import ServicesPage from "./components/services";
import IndustriesPage from "./components/industries-page/IndustiresPage";
import Navbar from "./components/navbar/Navbar";
import ContactUs from "./components/contact-us/ContactUs";
import Blog from "./components/blog/Blog";
// import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
