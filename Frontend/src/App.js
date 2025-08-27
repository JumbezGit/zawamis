import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Reset from './Auth/Reset';
import Header from './Admin/Header';
import Nav from './Admin/Nav';
import Dashboard from './Admin/Dashboard';
import Payments from './Admin/Payments';
import { useEffect, useState } from 'react';

function App() {
 const [users, setUsers] = useState({});

    useEffect (() => {
      fetchUsers();
    }, []);
    const fetchUsers = async () => {
     try {
       const response = await fetch('http://127.0.0.1:8000/api/users/');
       const data = await response.json();
       console.log(data)
     } catch (err) {
       console.log(err);
     }
    };
  return (
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/Nav" element={<Nav />} />
       <Route path="/header" element={<Header />} />
       <Route path="/register" element={<Register />} />
       <Route path="/reset" element={<Reset />} />
       <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/payments" element={<Payments />} />
     </Routes>
   </BrowserRouter>
  );
}

export default App;
