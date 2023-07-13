import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Links from './components/Links';
import Home from './components/Home';
import Videos from './components/Videos';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/links" Component={Links} />
      <Route path="/videos" Component={Videos} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
};



export default App;