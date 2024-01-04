import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import AboutUspage from "./pages/AboutUs";
import Offerpage from "./pages/Offer";
import ContactsPage from "./pages/Contacts";
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUspage />} />
        <Route path="/offer" element={<Offerpage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  ) 
}

export default App;
