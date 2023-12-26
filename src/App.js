import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import SearchAppBar from './components/Appbar';
import Hotel from './pages/Hotel';
import Footer from './components/Footer';
import Login from './pages/Login'




function App() {
  return (
    <BrowserRouter>
    <SearchAppBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Hotel' element={<Hotel />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
