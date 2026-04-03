import React from 'react';
import './Results.css';

const Results = () => {
  const class10Results = [
    { name: "Pallavi Sharma", percentage: "93.67%", rank: "1st" },
    { name: "Harshit Acharya", percentage: "83.50%", rank: "2nd" },
    { name: "Chestha Sharma", percentage: "78.17%", rank: "3rd" },
    { name: "Gayatri Purbiya", percentage: "73.50%" },
    { name: "Khushi Acharya", percentage: "72.83%" },
    { name: "Taniksha Bhati", percentage: "72.67%" },
    { name: "Khushboo Sharma", percentage: "70.83%" },
  ];

  const class12Results = [
    { name: "Sahista Mansuri", percentage: "90.00%", rank: "1st" },
    { name: "Akanksha Joshi", percentage: "85.40%", rank: "2nd" },
  ];

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  return (
    <section className="results-section section-padding" id="results">
      <div className="container">
        <div className="text-center mb-12">
          <span className="section-tag">Testimonials of Success</span>
          <h2 className="section-title">Our Shining Stars</h2>
          <p className="section-subtitle">
            Celebrating the exceptional achievements of our students in the RBSE Board Exams 2026.
            "Your Success is Our Goal"
          </p>
        </div>

        <div className="results-container">
          {/* Class 12th Results */}
          <div className="result-category">
            <h3 className="category-title">
              <span className="gold-text">Class 12th Science</span><br />
              RBSE Result 2026
            </h3>
            <div className="students-grid top-rankers">
              {class12Results.map((student, index) => (
                <div className="student-card gold-theme" key={index}>
                  <div className="avatar-container">
                    <div className="student-avatar-inline gold-avatar">
                      {getInitials(student.name)}
                    </div>
                    {student.rank && <div className="rank-badge gold-badge">{student.rank}</div>}
                  </div>
                  <h4 className="student-name">{student.name}</h4>
                  <div className="percentage-ribbon">{student.percentage}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Class 10th Results */}
          <div className="result-category">
            <h3 className="category-title">
              <span className="blue-text">Class 10th</span><br />
              RBSE Result 2026
            </h3>
            
            {/* Top 3 */}
            <div className="students-grid top-rankers">
              {class10Results.slice(0, 3).map((student, index) => (
                <div className="student-card blue-theme" key={index}>
                  <div className="avatar-container">
                    <div className="student-avatar-inline blue-avatar">
                      {getInitials(student.name)}
                    </div>
                    {student.rank && <div className="rank-badge blue-badge">{student.rank}</div>}
                  </div>
                  <h4 className="student-name">{student.name}</h4>
                  <div className="percentage-value">{student.percentage}</div>
                </div>
              ))}
            </div>

            {/* Others */}
            <div className="students-grid others">
              {class10Results.slice(3).map((student, index) => (
                <div className="student-card small-card" key={index}>
                  <div className="student-avatar-small-inline">
                    {getInitials(student.name)}
                  </div>
                  <div className="student-info">
                    <h5 className="student-name-small">{student.name}</h5>
                    <span className="percentage-small">{student.percentage}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="congrats-message">
              Heartfelt Congratulations to All Students on Their Outstanding Exam Results
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
