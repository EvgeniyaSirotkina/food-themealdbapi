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
import Category from './pages/Category';
import Recipe from './pages/Recipe';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <main className='container content'>
          <Routes>
            <Route exact path='/food-themealdbapi' element={<Home />} />
            <Route path='/food-themealdbapi/about' element={<About />} />
            <Route path='/food-themealdbapi/contacts' element={<Contact />} />
            <Route path='/food-themealdbapi/category/:name' element={<Category />} />
            <Route path='/food-themealdbapi/meal/:id' element={<Recipe />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}
