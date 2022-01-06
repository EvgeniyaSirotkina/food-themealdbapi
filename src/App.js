import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
      <Header />
      <main className='container content'>
        <Router>
          <Routes>
              <Route exact path='/food-themealdbapi' element={<Home />} />
              <Route path='/food-themealdbapi/about' element={<About />} />
              <Route path='/food-themealdbapi/contact' element={<Contact />} />
              <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </>
  );
}