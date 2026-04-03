import { useState } from 'react';
import CourseCard from './CourseCard';
import CourseModal from './CourseModal';
import { courseCategories } from '../data/courses';

const CoursesSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedGradient, setSelectedGradient] = useState('');

  const allTab = { id: 'all', category: 'All Courses', icon: '🏠' };

  const filteredCategories = activeCategory === 'all'
    ? courseCategories
    : courseCategories.filter(cat => cat.id === activeCategory);

  const handleViewDetails = (course, gradient) => {
    setSelectedCourse(course);
    setSelectedGradient(gradient);
  };

  return (
    <section className="courses-section section-padding" id="courses">
      <div className="container">
        <div className="courses-header">
          <span className="section-tag">Our Courses</span>
          <h2 className="section-title">
            Explore Our <span className="highlight">Course Catalog</span>
          </h2>
          <p className="section-subtitle">
            From school tuition to professional computer courses — quality education at affordable fees.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="category-tabs">
          <button
            className={`category-tab ${activeCategory === 'all' ? 'active' : ''}`}
            id="tab-all"
            onClick={() => setActiveCategory('all')}
          >
            {allTab.icon} {allTab.category}
          </button>
          {courseCategories.map(cat => (
            <button
              key={cat.id}
              className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
              id={`tab-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.icon} {cat.category}
            </button>
          ))}
        </div>

        {/* Course Groups */}
        {filteredCategories.map(cat => (
          <div key={cat.id} className="course-category-group">
            <div className="category-label">
              <div className="category-label-icon" style={{ background: `${cat.color}15` }}>
                {cat.icon}
              </div>
              <h3 className="category-label-text">{cat.category}</h3>
            </div>

            <div className="course-grid">
              {cat.courses.map(course => (
                <CourseCard
                  key={course.id}
                  course={course}
                  gradient={cat.gradient}
                  color={cat.color}
                  onViewDetails={(c) => handleViewDetails(c, cat.gradient)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          gradient={selectedGradient}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </section>
  );
};

export default CoursesSection;
