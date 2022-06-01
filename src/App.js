import React, { useContext } from 'react';
import { ThemeContext } from './context/themeContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './layouts/Navbar1';
// import Landing from './pages/Landing1';
import Navbar from './layouts/Navbar';
import Landing from './pages/Landing';
import NotFound from './pages/NotFound';
import RegulatoryServices from './pages/RegulatoryServices';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    // <div className="h-screen overflow-y-auto dark:bg-gray-900">
    <div className="h-screen relative bg-white overflow-hidden overflow-y-auto">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/rs" element={<RegulatoryServices />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
