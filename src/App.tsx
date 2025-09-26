import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SfButton } from '@storefront-ui/react'
import { createRoot } from 'react-dom/client'
import TopNav from './NavbarTop.jsx'
import About from './About.jsx'
import Home from './Home.jsx'
import Footer from "./Footer.jsx";
import BookLesson from "./BookLesson.jsx"

import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <TopNav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/pricing" element="#pricing" />
          <Route path="/about" element={<About />} />
          <Route path="/book-lesson" element={<BookLesson />} />
        </Routes>

        <Footer />
      </Router>
    </>
  )
}

export default App