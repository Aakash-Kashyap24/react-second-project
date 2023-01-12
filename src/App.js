import React from 'react';
import { Button } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import {
//   ChakraProvider,
//   Box,
//   Text,
//   Link,
//   VStack,
//   Code,
//   Grid,
//   theme,
// } from '@chakra-ui/react';

import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup'
import Videos from './components/Videos'

import { ColorModeSwitcher } from './ColorModeSwitcher';
import Home from './components/Home';
import Footer from './components/Footer';
import Upload from './components/Upload';


function App() {
  return <Router>

    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/videos" element={<Videos />} />

      <Route path="/upload" element={<Upload />} />

    </Routes>

    <Footer />
  </Router>
}

export default App;
