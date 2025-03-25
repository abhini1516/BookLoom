import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar';
import Banner from './pages/home/banner';  // ✅ Import the Navbar component
import Home from './pages/home/Home.jsx'
import './App.css'
import { useEffect, useState } from 'react';

function App() {
  return (
    <>
      <Navbar />
      <main className='min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font primary'>
      <Outlet />
      <Banner/>
      <Home/>
      </main>
      <footer>footer</footer>
    </>
  );
}

export default App;
