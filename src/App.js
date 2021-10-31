import './App.css';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import ProjectPage from './components/ProjectPage';
import Footer from './components/Footer';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title = "Jarvis's Portfolio";  
  }, []);

  return (
    <div className='h-screen w-screen overflow-x-hidden overflow-y-scroll'>
      <div id="overlay" className='hidden w-screen h-full fixed bg-gray-200 z-2 bg-opacity-50 overflow-auto'></div>
      <LandingPage/>
      <AboutPage/>
      <ProjectPage/>
      <Footer/>
    </div>
  );
}

export default App;
