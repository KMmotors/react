import React, { useEffect } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import bgVideo from "../src/assets/Background.mp4";
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';
import Result from './Components/Result/Result';
import About from './Components/About/About';
import Community from './Components/Community/Community';
import StarsCanvas from './Components/Animation-objects/Starbg';

const LandingPage = () => (
  <>
  
    <div className="h-[700px] relative">
       <img className='absolute top-0 right-0 opacity-100 z-[120]' src="/gradient.png" alt="Gradient-img"/>
     <div className=' h-0 w-[40rem] fixed top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10'>

     </div>
     
      <video
  autoPlay
  loop
  muted
 className="fixed right-0 top-0 h-[700px] w-full object-cover -z-10 pointer-events-none"

>
  
  <source src={bgVideo} type="video/mp4" />
  
</video>

 

      <Hero />
           <Navbar />
      <Services />
      <Footer />
    
    </div>
    
  </>
);

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: 'ease-in-out' });
  }, []);

  return (
    <>

  <div className='relative z-[-1]'>
     <StarsCanvas className="pointer-events-none"/>
</div>

      {/* ✅ Global Navbar */}


      {/* ✅ Routes handle page switching */}
      <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/try" element={<Result />} />
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<Community/>}/>
      </Routes>
      </HashRouter>
    </>
  );
};

export default App;
