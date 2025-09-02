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
import Layout from './Admin/Layout';
import { useEffect, useState } from 'react';
import Customers from './Admin/Customers';
import Stations from './Admin/Stations';
import Deptors from './Admin/Deptors';
import Well from './Admin/Well';
import Security from './Admin/Security';

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
     <Routes>layout
       <Route path="/" element={<Login />} />
       {/* <Route path="/layout" element={<Layout />} /> */}
       <Route path="/Nav" element={<Nav />} />
       <Route path="/header" element={<Header />} />
       <Route path="/register" element={<Register />} />
       <Route path="/reset" element={<Reset />} />
        <Route path="/dashboard" element={<Layout><Dashboard/></Layout>} />
        <Route path="/customers" element={<Layout><Customers/></Layout>} />
        <Route path="/stations" element={<Layout><Stations/></Layout>} />
        <Route path="/deptors" element={<Layout><Deptors/></Layout>} />
        <Route path="/well" element={<Layout><Well/></Layout>} />
        <Route path="/security" element={<Layout><Security/></Layout>} />
        <Route path="/payments" element={<Layout><Payments/></Layout>} />

     </Routes>
   </BrowserRouter>
  );
}

export default App;
