import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import Insights from './pages/Insights.js';
import Concepts from './pages/Concepts.js';
import Concept01 from './pages/Concept01.js';
import Concept02 from './pages/Concept02.js';
import Concept03 from './pages/Concept03.js';
import Concept04 from './pages/Concept04.js';
import Article01 from './pages/Article01.js';
import Article02 from './pages/Article02.js';
import Article03 from './pages/Article03.js';
import Faqs from './pages/Faqs.js';
import Contact from './pages/Contact.js';

export const AppContext = createContext();

function App() {
  const [siteName, setSiteName] = useState("Foroden");

  return (
    <div className="App">
      <AppContext.Provider value={{siteName, setSiteName}}>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/insights' element={<Insights/>}/>
            <Route path='/concepts' element={<Concepts/>}/>
            <Route path='/concepts/concept-01' element={<Concept01/>}/>
            <Route path='/concepts/concept-02' element={<Concept02/>}/>
            <Route path='/concepts/concept-03' element={<Concept03/>}/>
            <Route path='/concepts/concept-04' element={<Concept04/>}/>
            <Route path='/articles/article-01' element={<Article01/>}/>
            <Route path='/articles/article-02' element={<Article02/>}/>
            <Route path='/articles/article-03' element={<Article03/>}/>
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