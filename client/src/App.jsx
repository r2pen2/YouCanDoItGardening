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
import { AuthenticationManager, WLPermissionsConfig } from './libraries/Web-Legos/api/auth.ts';
import { createContext } from 'react';
import { useState } from 'react';

export const AuthenticationManagerContext = createContext(null);
export const CurrentSignInContext = createContext(null);

function App() {

  const permissions = new WLPermissionsConfig({
    beforesAndAfters: "befores-and-afters",
    galleryVideo: "gallery-video",
    galleryPictures: "gallery-pictures",
    serviceItems: "service-items",
    mediaAppearances: "media-appearances",
    teachingItems: "teaching-items",
    testimonials: "testimonials",
    externalResources: "external-resources",
  })
  const authenticationManager = new AuthenticationManager(
    {
      apiKey: "AIzaSyBfHhueJ3kD6zYfSDGBCzer9qcjSa-5Q8g",
      authDomain: "you-can-do-it-gardening.firebaseapp.com",
      projectId: "you-can-do-it-gardening",
      storageBucket: "you-can-do-it-gardening.appspot.com",
      messagingSenderId: "1018875853470",
      appId: "1:1018875853470:web:e1a861226e1c3e4a75198f",
      measurementId: "G-0DJWTZTY6G"
    },
    permissions
  );
  authenticationManager.initialize();

  const [currentSignIn, setCurrentSignIn] = useState(null);

  return (
    <AuthenticationManagerContext.Provider value={{authenticationManager}}>
    <CurrentSignInContext.Provider value={{currentSignIn, setCurrentSignIn}}>
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
            <Footer authenticationManager={authenticationManager}/>
          </div>
        </Router>
      </div>
    </CurrentSignInContext.Provider>
    </AuthenticationManagerContext.Provider>
  );
}

export default App;
