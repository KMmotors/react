import React from 'react'
import Logo from "../../assets/Logo.png"
import { Link } from 'react-router-dom'





const Navbar = () => {
  return (
    <div data-aos="fade-down" className='fixed top-0 right-0 w-full   z-[50] bg-white/20 backdrop-blur-sm py-4 sm:py-4 font-mono pointer-events-auto'>
   
        <div className='container'>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-7 text-white font-bold text-2xl">
                    <img src={Logo} alt="" className='w-10 '/>
                    
                </div>
                <div className='text-white font-bold hidden md:block'>
                    
                    
                    <ul className='flex items-center gap-6 text-xl py-4 sm:py-0'>
                        
                       <li>
<Link to="/about" onClick={() => console.log('About clicked')}>About</Link>

  </li>
  <li>
    <Link to='/community'>Community</Link> {/* Make a /community route if needed */}
  </li>
  <li>
    <Link to='/download'>Download</Link> {/* Same here */}
  </li>
                    </ul>
                </div>
              
                <div>
                    <button className='text-white border-2 border-white px-3 py-1 rounded-md animate-border-glow'>
                        Login
                    </button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar