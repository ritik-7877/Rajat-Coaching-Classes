const testimonials = [
  {
    text: "Rajat Sir explains every concept with such clarity! My school grades improved dramatically after joining. The doubt sessions are extremely helpful.",
    name: "Priya Sharma",
    classInfo: "Class 10 Student",
    stars: 5,
    color: '#3b82f6',
  },
  {
    text: "I joined the Tally Prime course and within 3 months I landed a job in an accounting firm. The practical training is top-notch!",
    name: "Amit Kumar",
    classInfo: "Tally Prime Student",
    stars: 5,
    color: '#10b981',
  },
  {
    text: "As a parent, I'm very happy with the way teachers pay individual attention to each child. My daughter's confidence in Maths has grown significantly.",
    name: "Sunita Meena",
    classInfo: "Parent – Class 7 Student",
    stars: 5,
    color: '#8b5cf6',
  },
  {
    text: "The RS-CIT course was very well structured. I passed my government exam with flying colors thanks to the regular practice sessions.",
    name: "Rajesh Verma",
    classInfo: "RS-CIT Student",
    stars: 5,
    color: '#f59e0b',
  },
  {
    text: "Biology coaching for 11th standard was phenomenal. Complex topics were made simple with diagrams and mnemonics. Highly recommended!",
    name: "Kavita Joshi",
    classInfo: "Class 11 Science Student",
    stars: 5,
    color: '#db2777',
  },
  {
    text: "Affordable fees and incredible quality of teaching. The Geography classes for Arts stream are very detailed and exam-focused.",
    name: "Mohit Choudhary",
    classInfo: "Class 12 Arts Student",
    stars: 5,
    color: '#0891b2',
  },
];

const StarsDisplay = ({ count }) => (
  <div className="testimonial-stars">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className="star">★</span>
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="testimonials-section section-padding" id="testimonials">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">Student Reviews</span>
          <h2 className="section-title">
            What Our <span className="highlight">Students Say</span>
          </h2>
          <p className="section-subtitle">
            Hear it from our students and parents — real experiences, real results.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card" id={`testimonial-${i}`}>
              <div className="testimonial-quote">"</div>
              <StarsDisplay count={t.stars} />
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div
                  className="author-avatar"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)` }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-class">{t.classInfo}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
