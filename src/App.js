import React from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import CollegeDetailPage from './pages/CollegeDetailPage';
import CollegeErrorPage from './pages/CollegeErrorPage';

function App() {
  return (
    <div className="App  text-dark"  >
<Header/>
<Routes >
  <Route path="/" element={<HomePage />} />
  <Route path="/search" element={<SearchPage />} />
  <Route path="college/:collegeId" element={<CollegeDetailPage />} />
  <Route path="*" element={<CollegeErrorPage  />} />

</Routes>
<Footer/>
    </div>
  );
}

export default App;
