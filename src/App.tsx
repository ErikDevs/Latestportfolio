
import { useContext } from 'react'
import './App.css'
import Header from './components/header/header'
import Hero from './components/Hero/hero'
import { StateContext } from './components/StateProvider/StateProvider';
import BackgroundAnimation from './components/BackgroundAnimation/AnimatedBackground';
import Projects from './components/work/Work';
import Technology from './components/technologies/technologies';
import About from './components/about/aboutme';
import Footer from './components/footer/footer';

function App() {

  const {theme}: any = useContext(StateContext);

  const themeStyles = {
    backgroundColor: theme ? "#0a192f" : "#fff",
    color: theme ? "#ccd8f8" : "#0f1624",
}



  return (
   <div className='app' style={themeStyles}>
     <Header />
     <Hero />
     <Projects />
     <Technology />
     <About />
     <Footer />


   </div>
  )
}

export default App
