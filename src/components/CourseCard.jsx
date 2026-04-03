const CourseCard = ({ course, gradient, color, onViewDetails }) => {
  return (
    <div
      className="course-card"
      id={`course-card-${course.id}`}
      onClick={() => onViewDetails(course)}
    >
      <div className="course-card-header" style={{ background: gradient }} />
      <div className="course-card-body">
        <span
          className="course-card-badge"
          style={{ background: gradient }}
        >
          {course.badge}
        </span>

        <h3 className="course-card-name">{course.name}</h3>
        <p className="course-card-desc">{course.description}</p>

        <div className="course-card-footer">
          <div className="course-price">
            {course.price ? (
              <>
                <span className="currency">₹</span>
                <span className="amount">{course.price.toLocaleString()}</span>
                <span className="per">/{course.duration === 'Per Year' ? 'yr' : 'course'}</span>
              </>
            ) : (
              <span className="inquire" style={{ color }}>Inquire Now</span>
            )}
          </div>
          <button
            className="btn-view-details"
            id={`view-${course.id}`}
            onClick={(e) => { e.stopPropagation(); onViewDetails(course); }}
          >
            View Details →
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
