import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import User from './components/User/UserList';
import Product from './components/Product/ProductList'
import Order from './components/Order/Order'
import Balance from './components/Balance/Balance'

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <div className="row">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<User />} />
            <Route path="/products" element={<Product/>}/>
            <Route path="/orders" element={<Order/>}/>
            <Route path="/balance" element={<Balance/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
