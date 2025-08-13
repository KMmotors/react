import React from 'react'
import video from "../../assets/workflow.mp4"


const Banner = () => {
  return (
    <div className='bg-black text-white pb-12 relative z-50 '>
    <div className='container'>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        
        <div className='space-y-3 xl:pr-36 p-4 border-r-2   rounded-2xl animate-border-glow  '>

      
        <h1 data-aos="fade-up" data-aos-delay="300" className='uppercase text-3xl font-mono text-center'>OUR MISSION</h1>
        <p data-aos="fade-up" data-aos-delay="500">ToneCraft Plugin delivers concise summaries of CLIENT-SUBMITTED product reviews
        </p>
        <button data-aos="fade-up" data-aos-delay="600" className='primary-button animate-border-glow cursor-pointer'>Learn More</button>
        
        </div>
        </div>

    </div>
    </div>
  )
}

export default Banner