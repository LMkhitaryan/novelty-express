import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutUspage from "./pages/AboutUsPage";
import Offerpage from "./pages/OfferPage";
import ContactsPage from "./pages/ContactsPage";
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
