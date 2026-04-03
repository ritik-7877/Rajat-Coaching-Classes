const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'All Courses', href: '#courses' },
    { label: 'Features', href: '#features' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const courseLinks = [
    'Computer Courses',
    'School Tuition (1–8)',
    'Foundation 9th & 10th',
    '11th & 12th Science',
    '11th & 12th Arts',
    '11th & 12th Commerce',
  ];

  const socialLinks = [
    { icon: '📘', label: 'Facebook', href: '#' },
    { icon: '📸', label: 'Instagram', href: '#' },
    { icon: '🐦', label: 'Twitter', href: '#' },
    { icon: '▶️', label: 'YouTube', href: '#' },
    { icon: '💬', label: 'WhatsApp', href: 'https://wa.me/919024856848' },
  ];

  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="logo-area">
              <img src="/logo-nobg2.png" alt="Rajat Coaching Classes" />
              <div>
                <div className="footer-brand-name">Rajat Coaching Classes</div>
                <div className="footer-tagline-text">Learn. Grow. Succeed.</div>
              </div>
            </div>
            <p className="footer-about">
              Rajat Coaching Classes is your trusted partner for academic excellence. 
              Quality coaching from Class 1 to 12, Computer Skills, and professional courses — all under one roof.
            </p>
            <div className="social-links">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="social-link"
                  id={`social-${s.label.toLowerCase()}`}
                  title={s.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="footer-col-title">Our Courses</h4>
            <ul className="footer-links">
              {courseLinks.map(c => (
                <li key={c}>
                  <a href="#courses" onClick={(e) => { e.preventDefault(); handleNavClick('#courses'); }}>
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-col-title">Contact Us</h4>

            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div className="contact-text">
                <strong>Address</strong>
                Vidhyaniketan vidhyalay parisar,<br />
                Maheshwari mohalla, Gangrar,<br />
                Chittorgarh (Rajasthan), Pin: 312901
                <img src="/qr.png" alt="QR Code Address" style={{ display: 'block', marginTop: '12px', width: '120px', borderRadius: '8px' }} />
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div className="contact-text">
                <strong>Phone</strong>
                <a href="tel:+919024856848" style={{ color: '#94a3b8' }}>+91 9024856848</a>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <div className="contact-text">
                <strong>Email</strong>
                <a href="mailto:rajatcoachingclasses@gmail.com" style={{ color: '#94a3b8' }}>rajatcoachingclasses@gmail.com</a>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">⏰</span>
              <div className="contact-text">
                <strong>Timing</strong>
                Mon – Sat: 7:00 AM – 9:00 PM
              </div>
            </div>

            <a
              href="https://wa.me/919024856848?text=Hi! I want to know more about your courses."
              target="_blank"
              rel="noreferrer"
              id="footer-whatsapp-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '16px',
                padding: '11px 22px',
                background: '#25d366',
                color: 'white',
                borderRadius: '10px',
                fontWeight: 600,
                fontSize: '14px',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
              }}
              onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} <span>Rajat Coaching Classes</span>. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
