'use client'

import NavLink from "../components/nav-link/nav-link";
import Image from 'next/image';
import { IoMenu, IoClose } from "react-icons/io5";
import { useState, useEffect } from 'react';

interface HeaderProps {
  name?: string;
}

const Header: React.FC<HeaderProps> = ({name = ""}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector('.nav-container');
      if (nav && !nav.contains(event.target as Node) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className={`w-full flex items-center justify-between py-3 md:py-4 px-4 md:px-6 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-background'
      }`}>
        <div className="flex items-center">
          <Image 
            className="nav-logo" 
            src={"/svg/logo.svg"} 
            alt={"logo"} 
            width={30} 
            height={20}
            priority
          />
          <span className="name text-white font-semibold ml-1.5 text-sm md:text-base truncate">{name}</span>
        </div>
        
        <div className="nav-container relative">
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="nav-icon md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <IoClose size={28} className="text-white" />
            ) : (
              <IoMenu size={28} className="text-white" />
            )}
          </button>
          
          {/* Desktop navigation */}
          <ul className="nav-list hidden md:flex items-center space-x-6">
            <NavLink text="home" href="#home" />
            <NavLink text="projects" href="#projects" />
            <NavLink text="skills" href="#skills" />
            <NavLink text="about-me" href="#about-me" />
            <NavLink text="contacts" href="#contacts" />
          </ul>
          
          {/* Mobile navigation overlay */}
          <div className={`md:hidden fixed inset-0 bg-background/95 backdrop-blur-lg transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="flex flex-col h-full">
              {/* Close button at the top */}
              <div className="flex justify-end p-4">
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                  aria-label="Close menu"
                >
                  <IoClose size={28} className="text-white" />
                </button>
              </div>
              
              {/* Navigation links */}
              <div className="flex-1 flex items-center justify-center px-6">
                <ul className="flex flex-col items-center space-y-8">
                  <NavLink text="home" href="#home" onClick={() => setIsMenuOpen(false)} />
                  <NavLink text="projects" href="#projects" onClick={() => setIsMenuOpen(false)} />
                  <NavLink text="skills" href="#skills" onClick={() => setIsMenuOpen(false)} />
                  <NavLink text="about-me" href="#about-me" onClick={() => setIsMenuOpen(false)} />
                  <NavLink text="contacts" href="#contacts" onClick={() => setIsMenuOpen(false)} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;