import './App.css';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import ProjectPage from './components/ProjectPage';

function App() {
  return (
    <div className='h-screen w-screen overflow-x-hidden overflow-y-scroll'>
      <LandingPage/>
      <AboutPage/>
      <ProjectPage/>
    </div>
  );
}

export default App;
