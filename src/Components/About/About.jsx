import React from 'react'
import Header from './Header'
import Hero1 from './Hero1'



const About = () => {
  return (
    <div>
       
    
        <img className='absolute top-0 right-0 opacity-60 -z-1' src="/gradient.png" alt="Gradient-img"/>
     <div className=' h-0 w-[40rem] fixed top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10'>

     </div>
     <div className='container mx-auto px-12 h-screen flex flex-col'>
      <Header/>
      <Hero1/>
    
     </div>
    </div>
  )
}

export default About