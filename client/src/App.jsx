import './App.css';
import { Navbar } from './components/Navbar';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./routes/HomePage";
import About from './routes/About';
import Services from './routes/Services';
import Resources from './routes/Resources';
import FindMe from './routes/FindMe';
import Footer from './components/Footer';
import Gallery from './routes/Gallery';

export const serverURL = '/';

function App() {

  return (
    <div className="App d-flex flex-column align-items-center w-100">
    <Router>
      <div className="app-content">
        <Navbar />
          <Routes>
            <Route path="*" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/find-me" element={<FindMe />} />
          </Routes>
        <Footer />
      </div>
    </Router>
    </div>
  );
}

export default App;
