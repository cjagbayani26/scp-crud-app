import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import AddUpdate from './pages/AddUpdate';
import View from './pages/View';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <ToastContainer position="top-center"/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/add" element={<AddUpdate/>}/>
        <Route path="/update/:id" element={<AddUpdate/>}/>
        <Route path="/view/:id" element={<View/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
