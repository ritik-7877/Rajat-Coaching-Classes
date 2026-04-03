import { useEffect } from 'react';

const CourseModal = ({ course, gradient, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  const handleWhatsApp = () => {
    const msg = `Hi! I'm interested in the *${course.name}* course at Rajat Coaching Classes. Please share more details.`;
    window.open(`https://wa.me/919024856848?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div
      className="modal-overlay"
      id="course-modal-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="modal-content" id={`modal-${course.id}`}>
        {/* Gradient top bar */}
        <div style={{ height: '5px', background: gradient, borderRadius: '20px 20px 0 0' }} />

        {/* Header */}
        <div className="modal-header">
          <button className="modal-close" id="modal-close-btn" onClick={onClose}>✕</button>

          <span
            className="modal-badge"
            style={{ background: gradient }}
          >
            {course.badge}
          </span>

          <h2 className="modal-title">{course.name}</h2>
          <p className="modal-desc">{course.description}</p>
        </div>

        {/* Meta Info */}
        <div className="modal-body">
          <div className="modal-meta-grid">
            <div className="modal-meta-item">
              <div className="modal-meta-icon">⏱️</div>
              <div className="modal-meta-label">Duration</div>
              <div className="modal-meta-value">{course.duration}</div>
            </div>
            <div className="modal-meta-item">
              <div className="modal-meta-icon">📘</div>
              <div className="modal-meta-label">Topics</div>
              <div className="modal-meta-value">{course.syllabus.length} Modules</div>
            </div>
            <div className="modal-meta-item">
              <div className="modal-meta-icon">💰</div>
              <div className="modal-meta-label">Fee</div>
              <div className="modal-meta-value" style={{ color: 'var(--primary)' }}>
                {course.price ? `₹${course.price.toLocaleString()}` : 'On Inquiry'}
              </div>
            </div>
          </div>

          {/* Syllabus */}
          <div className="modal-syllabus-title">
            📋 Syllabus Overview
          </div>
          <div className="modal-syllabus-grid">
            {course.syllabus.map((item, i) => (
              <div key={i} className="syllabus-item">{item}</div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <div className="modal-price-display">
            <span className="price-label">Course Fee</span>
            <span className="price-value">
              {course.price ? `₹${course.price.toLocaleString()}` : 'On Inquiry'}
            </span>
            <span className="price-note">{course.duration}</span>
          </div>

          <button
            className="btn-enroll"
            id={`enroll-${course.id}`}
            onClick={handleWhatsApp}
          >
            🚀 Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;
