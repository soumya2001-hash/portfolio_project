import React from 'react';
import logo from '../assets/logo_6_1.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img src={logo} alt="logo" className='rounded-xl' height={50} width={50}/>
        </div>
        <div className='m-8 flex items-center justify-center gap-5 text-2xl'>
          <a href="https://www.linkedin.com/in/soumya-hegde-3b4275345/"><FaLinkedin /></a>
          <a href="https://github.com/soumya2001-hash"><FaGithub /></a>
          <a href="https://x.com/Soumya12202001"><FaSquareXTwitter /></a>

        </div>
    </nav>
  )
}

export default Navbar