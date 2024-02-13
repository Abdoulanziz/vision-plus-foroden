import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import Insights from './pages/Insights.js';
import Concepts from './pages/Concepts.js';
import Faqs from './pages/Faqs.js';
import Contact from './pages/Contact.js';

export const AppContext = createContext();

function App() {
  const [siteName, setSiteName] = useState("Vision Plus");

  return (
    <div className="App">
      <AppContext.Provider value={{siteName, setSiteName}}>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/insights' element={<Insights/>}/>
            <Route path='/concepts' element={<Concepts/>}/>
            <Route path='/faqs' element={<Faqs/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
          <Footer />
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;