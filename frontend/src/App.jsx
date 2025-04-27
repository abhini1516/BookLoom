import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar';
import './App.css'
import { useEffect, useState } from 'react';
import Banner from './pages/home/Banner.jsx';
import Home from './pages/home/Home.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Navbar />
      <main className='min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font primary'>
      <Outlet />
      <Banner/>
      <Home/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
