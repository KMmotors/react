import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'; // AOS styles

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-none py-16 px-4 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12" data-aos="fade-up">
        OUR PLANS
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Card 1 */}
          <div
            className="w-full md:w-[300px] p-6 border border-gray-200 rounded-lg shadow-md bg-black/40 backdrop-blur-md dark:border-gray-700 hover:scale-105 transition-transform duration-300 ease-in-out"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h5 className="mb-4 text-xl font-medium text-white">Standard Plan</h5>
            <div className="flex items-baseline text-white">
              <span className="text-3xl font-semibold">$</span>
              <span className="text-5xl font-extrabold tracking-tight">0</span>
              <span className="ms-1 text-xl font-normal text-gray-400">/month</span>
            </div>
            <ul className="space-y-4 my-6">
              {["2 Searches Per Day", "20GB Cloud storage", "Integration help"].map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-blue-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="ms-3">{feature}</span>
                </li>
              ))}

              {["Product Verification", "API Access", "Complete documentation", "24×7 phone & email support"].map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-gray-500 line-through">
                  <svg className="w-4 h-4 text-gray-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="ms-3">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 w-full text-center">
              Choose plan
            </button>
          </div>

          {/* Card 2 */}
          <div
            className="w-full md:w-[300px] p-6 border border-gray-200 rounded-lg shadow-md bg-black/40 backdrop-blur-md dark:border-gray-700 hover:scale-105 transition-transform duration-300 ease-in-out"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <h5 className="mb-4 text-xl font-medium text-white">Pro Plan</h5>
            <div className="flex items-baseline text-white">
              <span className="text-3xl font-semibold">$</span>
              <span className="text-5xl font-extrabold tracking-tight">49</span>
              <span className="ms-1 text-xl font-normal text-gray-400">/month</span>
            </div>
            <ul className="space-y-4 my-6">
              {["Infinite Searches Per Day", "100GB Cloud storage", "Integration support", "Product Verification", "API Access"].map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-blue-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="ms-3">{feature}</span>
                </li>
              ))}
              {["Complete documentation", "24×7 phone & email support"].map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-gray-500 line-through">
                  <svg className="w-4 h-4 text-gray-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="ms-3">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 w-full text-center">
              Choose plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
