import Header from './components/header/Header'
import Login from './components/login/Login'
import Footer from './components/footer/Footer'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Genres from './components/Genres';
import Popular from './components/Popular';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
        <Header />
      <Routes>
        <Route exact  path="/" element={<h1>This is home</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
        <Footer />
    </BrowserRouter>
  );

}

export default App;
