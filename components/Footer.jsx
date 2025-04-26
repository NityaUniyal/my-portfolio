import React from 'react';
import { assets } from '../assets/assets';
import Image from 'next/image';

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer className="bg-[#0e0e0e] text-white px-[10%] pt-16 pb-6 relative">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">

        {/* Column 1 - Description */}
        <div>
            <span>NITYA UNIYAL</span>
           <p className="text-gray-400 text-sm">
            Passionate Web Developer | Crafting modern & responsive websites with love 💻✨
          </p>
          
          <p>Explore all my projects on my Github profile <a href="https://github.com/NityaUniyal" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700"> github.com/NityaUniyal </a> 
</p>

        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li><a href="#home" className="hover:text-white duration-300">Home</a></li>
            <li><a href="#about" className="hover:text-white duration-300">About</a></li>
            <li><a href="#skills" className="hover:text-white duration-300">Skills</a></li>
            <li><a href="#projects" className="hover:text-white duration-300">Projects</a></li>
            <li><a href="#contact" className="hover:text-white duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Let's Connect</h3>
          <ul className="text-gray-400 space-y-2">
            <li>Email: <a href="mailto:nityauniyal@gmail.com" className="hover:text-white">nityauniyal220@gmail.com</a></li>
            <li>Phone: <a href="tel:+919855063095" className="hover:text-white">+91 9855063095</a></li>
            <li>Location: Chandigarh, India</li>
            
          </ul>
        </div>

      </div>

      {/* Divider Line */}
      <div className="border-t border-white-700 mt-12 pt-4 text-center text-sm text-white-500">
        © {new Date().getFullYear()} Nitya Uniyal. All rights reserved.
      </div>

      {/* Scroll to Top Button */}
      <button onClick={scrollToTop} className="absolute bottom-8 right-10 bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-300 transition duration-300">
        ↑
      </button>
    </footer>
  );
};

export default Footer;























/*import React from 'react'
import Image from 'next/image'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <span className='w-36 mx-auto mb-2'/> NITYA UNIYAL
            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={assets.mail_icon} alt='' className='w-6'/>
                nityauniyal220@gmail.com
            </div>
        </div>


<div>
    <p></p>
</div>

    </div>
  )
}

export default Footer */