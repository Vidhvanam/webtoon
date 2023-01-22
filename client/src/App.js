import Header from './components/header/Header'
import Login from './components/login/Login'
import Footer from './components/footer/Footer'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Genres from './components/Genres';
import Popular from './components/Popular';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import NotFound from './components/NotFound';
import Home from './components/Home'
import SeriesInfo from './components/SeriesInfo'
import Registration from './components/registration/Regitration';
import { createContext, useState } from 'react';
import {userContext} from './components/UserContext'
import EpisodeView from './components/EpisodeView'

function App() {
  const [user ,setUser] = useState()
  return (
   

    <userContext.Provider value={{user , setUser}}>
    <BrowserRouter>
        <Header />
      <Routes>
        <Route exact  path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/episode" element={<EpisodeView />} />
        <Route path="/series/:id" element={<SeriesInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
        <Footer />
    </BrowserRouter>
    </userContext.Provider>
  );

}

export default App;
