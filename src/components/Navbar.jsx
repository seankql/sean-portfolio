import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: 'About', id: 'about-me' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Certificates', id: 'certificates' },
];

const Navbar = () => {
  const [active, setActive] = useState('about-me');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      let current = 'about-me';
      navLinks.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) current = id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#about-me" className="navbar-logo">SL</a>
        <ul className="navbar-links">
          {navLinks.map(({ label, id }) => (
            <li key={id}>
              <a href={`#${id}`} className={active === id ? 'active' : ''}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
