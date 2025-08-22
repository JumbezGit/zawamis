import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Reset from './Auth/Reset';

function App() {
  return (
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/register" element={<Register />} />
       <Route path="/reset" element={<Reset />} />
     </Routes>
   </BrowserRouter>
  );
}

export default App;
