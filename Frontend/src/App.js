import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Reset from './Auth/Reset';
import Header from './Admin/Header';
import Nav from './Admin/Nav';

function App() {
  return (
   <BrowserRouter>
     <Routes>
       <Route path="/Login" element={<Login />} />
       <Route path="/" element={<Nav />} />
       <Route path="/header" element={<Header />} />
       <Route path="/register" element={<Register />} />
       <Route path="/reset" element={<Reset />} />
     </Routes>
   </BrowserRouter>
  );
}

export default App;
