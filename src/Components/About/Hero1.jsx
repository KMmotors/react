import React, { useEffect } from 'react';
import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Hero1 = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="relative flex flex-col justify-center items-center min-h-screen px-4 sm:px-8 lg:px-16 py-16 bg-none text-white overflow-hidden">

      {/* Background Earth Spline */}
      <div className="fixed top-0 right-0 w-[100%] h-full -z-10 pointer-events-none">
        <Spline scene="https://prod.spline.design/1ikIA0uDnD9EDLty/scene.splinecode" />
      </div>

      {/* Foreground Content */}
      <div className="w-full max-w-4xl z-10 text-left" data-aos="fade-up">

        {/* READ MORE Tag */}
        <div
          className="w-[200px] sm:w-[250px] md:w-[300px] h-[40px] flex items-center justify-center mb-6 rounded-2xl bg-violet-600/20 backdrop-blur-md shadow-md"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className="text-white text-sm sm:text-base font-medium">
            <i className="bx bxs-star-half mr-2"></i>READ MORE
          </div>
        </div>

        {/* Heading */}
        <h1
          className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-6 bg-gradient-to-r from-violet-400 to-white bg-clip-text text-transparent leading-tight"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          Best User Experience
        </h1>

        {/* Paragraph */}
        <p
          className="text-white text-sm sm:text-base lg:text-lg max-w-[600px] leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="600"
        >
         ToneCraft — where flawless design meets seamless performance for an experience you’ll never forget
        </p>
        <h1
          className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-6 bg-gradient-to-r from-violet-400 to-white bg-clip-text text-transparent leading-tight"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          Why Tonecraft ?
        </h1>
         <p
          className="text-white text-sm sm:text-base lg:text-lg max-w-[600px] leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="600"
        >
         GET IMMENSE 3D UI ANALYSIS ON PRODUCT 
        </p>
     
      </div>
    </main>
  );
};

export default Hero1;
