import './App.css';
import LandingPage from './components/LandingPage';
import { Box } from '@material-ui/core';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <div className='h-screen w-screen overflow-x-hidden overflow-y-scroll'>
      <LandingPage/>
      <AboutPage/>
    </div>
  );
}

export default App;
