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
       <Route path="/Nav" element={<Nav />} />
       <Route path="/Header" element={<Header />} />
       <Route path="/" element={<Register />} />
       <Route path="/reset" element={<Reset />} />
     </Routes>
   </BrowserRouter>
  );
}

export default App;
