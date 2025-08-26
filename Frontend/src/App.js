import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Reset from './Auth/Reset';
import Header from './Admin/Header';
import Nav from './Admin/Nav';
import { useEffect, useState } from 'react';

function App() {
  const [user, setLoginUser] = useState({});
  useEffect (() => {
    fetchData();
  }, []);
  const fetchData = async () => {
   try {
     const response = await fetch("http://127.0.0.1:8000/api/users/");
     const data = await response.json();
     setLoginUser(data);
   } catch (error) {
     console.error('Error fetching user data:', error);
   }
  };
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
