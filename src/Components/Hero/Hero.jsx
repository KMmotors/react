import React from 'react'



const Hero = () => {
  return (
    <div className='bg-none h-full text-white relative z-50'>
        <div className="h-full flex justify-center items-center p-4">
            <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className='space-y-4 lg:pr-36'>
                  
                    <h1 data-aos="fade-up" className='text-5xl font-bold uppercase font-mono'>From Text to Truth</h1>
                    <p data-aos="fade-up" data-aos-delay="300" className='font-bold'>
                      
                       Analyze customer reviews with speed and high accuracy
                    </p>
                    <button data-aos="fade-up" data-aos-delay="500"  className=' animate-border-glow text-white cursor-pointer px-4 py-2 rounded-md duration-200'>Learn More</button>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero