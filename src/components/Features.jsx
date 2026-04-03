const features = [
  {
    icon: '👨‍🏫',
    title: 'Experienced Teachers',
    desc: 'Learn from highly qualified and passionate educators with years of teaching experience across all subjects and grades.',
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
  },
  {
    icon: '💰',
    title: 'Affordable Fees',
    desc: 'Quality education shouldn\'t break the bank. Our courses are priced to be accessible for every student and family.',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981, #84cc16)',
  },
  {
    icon: '📝',
    title: 'Regular Test Series',
    desc: 'Structured weekly and monthly tests to track your progress, identify weak areas, and prepare you for board exams.',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
  },
  {
    icon: '🙋',
    title: 'Doubt Support',
    desc: 'Never get stuck. Our teachers are available for doubt clearance sessions after every class, including WhatsApp support.',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
  },
  {
    icon: '📱',
    title: 'Digital Learning',
    desc: 'Access study materials, notes, and assignments digitally. Learn anytime, anywhere with our organized resources.',
    color: '#0891b2',
    gradient: 'linear-gradient(135deg, #0891b2, #6366f1)',
  },
  {
    icon: '🏆',
    title: 'Proven Results',
    desc: 'Our students consistently achieve top scores in board exams and competitive tests. We\'re proud of every success story.',
    color: '#db2777',
    gradient: 'linear-gradient(135deg, #db2777, #f59e0b)',
  },
];

const Features = () => {
  return (
    <section className="features-section section-padding" id="features">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">
            What Makes <span className="highlight">Rajat Coaching</span> Special?
          </h2>
          <p className="section-subtitle">
            We combine expert knowledge, personal attention, and modern teaching methods to help every student succeed.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="feature-card"
              id={`feature-card-${i}`}
              style={{ '--feature-color': feature.color }}
            >
              {/* Top accent bar */}
              <div
                style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0,
                  height: '3px',
                  background: feature.gradient,
                  borderRadius: '20px 20px 0 0'
                }}
              />

              <div
                className="feature-icon"
                style={{ background: `${feature.color}15` }}
              >
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
