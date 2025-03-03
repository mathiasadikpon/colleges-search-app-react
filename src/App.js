import React from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className="App">
<Header/>
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/search" element={<SearchPage />} />

</Routes>
<Footer/>
    </div>
  );
}

export default App;
