const Hero = ({ onExploreCourses }) => {
  const stats = [
    { number: '500+', label: 'Students Enrolled' },
    { number: '7+', label: 'Course Categories' },
    { number: '5★', label: 'Student Rating' },
  ];

  return (
    <section className="hero" id="home">
      <div className="hero-blob-1" />
      <div className="hero-blob-2" />
      <div className="hero-grid-bg" />

      <div className="hero-inner">
        {/* Left */}
        <div className="hero-left">
          <h1 className="hero-title">
            Welcome to<br />
            <span className="brand-highlight">Rajat Coaching</span><br />
            Classes
          </h1>

          <p className="hero-subtitle-line">
            Best Coaching for School, Science, Arts, Commerce & Computer Courses
          </p>

          <p className="hero-desc">
            Expert-led classes designed to help students of all grades excel in their academics. 
            From Class 1 to 12, Computer Skills to Board Exams — we've got you covered.
          </p>

          <div className="hero-cta">
            <button
              id="hero-explore-btn"
              className="btn btn-primary"
              onClick={onExploreCourses}
            >
              🎓 Explore Courses
            </button>
            <a
              href="#contact"
              id="hero-contact-btn"
              className="btn btn-outline"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              📞 Contact Us
            </a>
          </div>

          <div className="hero-stats">
            {stats.map((stat, i) => (
              <div key={stat.label} style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                {i > 0 && <div className="hero-stat-divider" />}
                <div className="hero-stat">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="hero-right">
          <div className="hero-image-wrapper">
            <div className="hero-image-bg" />

            {/* Floating Cards */}
            <div className="hero-card-floating card-students">
              <div className="floating-card-icon">🎓</div>
              <div className="floating-card-value">500+</div>
              <div className="floating-card-label">Happy Students</div>
            </div>

            <div className="hero-card-floating card-courses">
              <div className="floating-card-icon">📚</div>
              <div className="floating-card-value">25+</div>
              <div className="floating-card-label">Courses Available</div>
            </div>

            <div className="hero-card-floating card-rating">
              <div className="floating-card-icon">⭐</div>
              <div className="floating-card-value">5.0</div>
              <div className="floating-card-label">Average Rating</div>
            </div>

            <img
              src="/instructor-nobg.png"
              alt="Rajat Sir – Lead Instructor"
              className="hero-instructor-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
