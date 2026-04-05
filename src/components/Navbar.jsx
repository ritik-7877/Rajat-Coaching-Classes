import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Results', href: '#results' },
    { label: 'Courses', href: '#courses' },
    { label: 'Features', href: '#features' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          {/* Logo */}
          <a className="navbar-logo" href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}>
            <img src="/logo-nobg2.png" alt="Rajat Coaching Classes Logo" />
            <div className="navbar-logo-text">
              <span className="brand-name">Rajat Coaching</span>
              <span className="brand-tagline">Classes – Learn. Grow. Succeed.</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="navbar-nav">
            {navLinks.map(link => (
              <a
                key={link.label}
                className="nav-link"
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              >
                {link.label}
              </a>
            ))}
          </div>


          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            id="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <a
            key={link.label}
            className="nav-link"
            href={link.href}
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
          >
            {link.label}
          </a>
        ))}

      </div>
    </>
  );
};

export default Navbar;
