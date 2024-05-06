import logo from './logo.svg';
import './App.css';
import Signup from './views/Signup';
import Signin from './views/Signin';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './views/Home';
import BookDetail from './views/BookDetail';
import Viewcart from './views/Viewcart';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Toaster/>
      <Routes>  
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/bookdetail" element={<BookDetail/>} />
      <Route path="/viewcart" element={<Viewcart/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
