import React, { useState } from 'react';
import './Results.css';

const Results = () => {
  const [activeBatch, setActiveBatch] = useState('2025-26');

  // ─── Existing 2025-26 data (unchanged) ───
  const class10Results = [
    { name: "Pallavi Sharma", percentage: "93.67%", rank: "1st", photo: "/pallavi-sharma.jpg" },
    { name: "Harshit Acharya", percentage: "83.50%", rank: "2nd", photo: "/harshit-acharya.jpg" },
    { name: "Chestha Sharma", percentage: "78.17%", rank: "3rd", photo: "/chestha-sharma.jpg" },
    { name: "Gayatri Purbiya", percentage: "73.50%", photo: "/gayatri-purbiya.jpg" },
    { name: "Khushi Acharya", percentage: "72.83%", photo: "/khushi-acharya.jpg" },
    { name: "Taniksha Bhati", percentage: "72.67%", photo: "/taniksha-bhati.jpg" },
    { name: "Khushboo Sharma", percentage: "70.83%", photo: "/khushboo-sharma.jpg" },
  ];

  const class12Results = [
    { name: "Sahista Mansuri", percentage: "90.00%", rank: "1st", photo: "/sahishta-mansuri.jpg" },
    { name: "Akanksha Joshi", percentage: "85.40%", rank: "2nd", photo: "/akanksha-joshi.jpg" },
  ];

  // ─── New 2024-25 batch data (from poster) ───
  const batch2425_class10 = [
    { name: "Shivani Sharma", percentage: "93.33%", rank: "1st" },
    { name: "Priyanka Sharma", percentage: "91.17%", rank: "2nd" },
    { name: "Chhavi Pancholi", percentage: "87.50%", rank: "3rd" },
    { name: "Bhavyansh Porwal", percentage: "83.20%" },
  ];

  const batch2425_class11 = [
    { name: "Anjali Regar", percentage: "82.80%", rank: "1st" },
    { name: "Aakanksha Joshi", percentage: "82.60%", rank: "2nd" },
    { name: "Anjali Gadri", percentage: "81.90%", rank: "3rd" },
    { name: "Shubham Acharya", percentage: "74.90%" },
    { name: "Annu Sharma", percentage: "72.00%" },
  ];

  const batch2425_class12 = [
    { name: "Khushboo Sharma", percentage: "86.20%", rank: "1st" },
    { name: "Sneha Sanadhya", percentage: "82.80%", rank: "2nd" },
    { name: "Bablu Singh Bhati", percentage: "80.20%", rank: "3rd" },
    { name: "Aditi Parashar", percentage: "77.00%" },
    { name: "Kishan Prajapat", percentage: "76.60%" },
    { name: "Suman Khatik", percentage: "74.60%" },
    { name: "Pooja Kanwar", percentage: "74.20%" },
    { name: "Dhanraj Gurjar", percentage: "72.80%" },
    { name: "Suman Garg", percentage: "70.80%" },
  ];

  const getInitials = (name) => {
    return name.replace(/\s*\(.*?\)\s*/g, '').split(' ').map(n => n[0]).join('').substring(0, 2);
  };

  const avatarColors = [
    'linear-gradient(135deg, #667eea, #764ba2)',
    'linear-gradient(135deg, #f093fb, #f5576c)',
    'linear-gradient(135deg, #4facfe, #00f2fe)',
    'linear-gradient(135deg, #43e97b, #38f9d7)',
    'linear-gradient(135deg, #fa709a, #fee140)',
    'linear-gradient(135deg, #a18cd1, #fbc2eb)',
    'linear-gradient(135deg, #fccb90, #d57eeb)',
    'linear-gradient(135deg, #e0c3fc, #8ec5fc)',
    'linear-gradient(135deg, #f5576c, #ff6a00)',
  ];

  const renderStudentCard = (student, index, theme = 'blue', isSmall = false) => {
    const hasPhoto = !!student.photo;

    if (isSmall) {
      return (
        <div className="student-card small-card" key={index}>
          {hasPhoto ? (
            <img src={student.photo} alt={student.name} className="student-photo-small" />
          ) : (
            <div
              className="student-avatar-small-inline"
              style={{ background: avatarColors[index % avatarColors.length], color: 'white' }}
            >
              {getInitials(student.name)}
            </div>
          )}
          <div className="student-info">
            <h5 className="student-name-small">{student.name}</h5>
            <span className="percentage-small">{student.percentage}</span>
          </div>
        </div>
      );
    }

    const themeClass = theme === 'gold' ? 'gold-theme' : theme === 'green' ? 'green-theme' : 'blue-theme';
    const photoClass = theme === 'gold' ? 'gold-photo' : theme === 'green' ? 'green-photo' : 'blue-photo';
    const badgeClass = theme === 'gold' ? 'gold-badge' : theme === 'green' ? 'green-badge' : 'blue-badge';

    return (
      <div className={`student-card ${themeClass}`} key={index}>
        <div className="avatar-container">
          {hasPhoto ? (
            <img src={student.photo} alt={student.name} className={`student-photo ${photoClass}`} />
          ) : (
            <div
              className="student-avatar-inline"
              style={{ background: avatarColors[index % avatarColors.length], color: 'white', fontSize: '2.2rem' }}
            >
              {getInitials(student.name)}
            </div>
          )}
          {student.rank && <div className={`rank-badge ${badgeClass}`}>{student.rank}</div>}
        </div>
        <h4 className="student-name">{student.name}</h4>
        {theme === 'gold' ? (
          <div className="percentage-ribbon">{student.percentage}</div>
        ) : (
          <div className="percentage-value">{student.percentage}</div>
        )}
      </div>
    );
  };

  const renderCategory = (title, titleClass, results, theme, splitAt = 3) => (
    <div className="result-category">
      <h3 className="category-title">
        <span className={titleClass}>{title}</span>
      </h3>
      {/* Top rankers */}
      <div className="students-grid top-rankers">
        {results.slice(0, splitAt).map((s, i) => renderStudentCard(s, i, theme))}
      </div>
      {/* Others */}
      {results.length > splitAt && (
        <div className="students-grid others">
          {results.slice(splitAt).map((s, i) => renderStudentCard(s, i + splitAt, theme, true))}
        </div>
      )}
    </div>
  );

  return (
    <section className="results-section section-padding" id="results">
      <div className="container">
        <div className="text-center mb-12">
          <span className="section-tag">Testimonials of Success</span>
          <h2 className="section-title">Our Shining Stars</h2>
          <p className="section-subtitle">
            Celebrating the exceptional achievements of our students across sessions.
            "Your Success is Our Goal"
          </p>
        </div>

        {/* Batch Toggle Tabs */}
        <div className="batch-tabs">
          <button
            className={`batch-tab ${activeBatch === '2025-26' ? 'active' : ''}`}
            onClick={() => setActiveBatch('2025-26')}
          >
            <span className="batch-tab-icon">🏆</span>
            Session 2025–26
          </button>
          <button
            className={`batch-tab ${activeBatch === '2024-25' ? 'active' : ''}`}
            onClick={() => setActiveBatch('2024-25')}
          >
            <span className="batch-tab-icon">🎓</span>
            Session 2024–25
          </button>
        </div>

        {/* ─── Session 2025-26 (existing data) ─── */}
        {activeBatch === '2025-26' && (
          <div className="results-container animate-batch">
            {/* Class 12th */}
            <div className="result-category">
              <h3 className="category-title">
                <span className="gold-text">Class 12th Science</span><br />
                RBSE Result 2026
              </h3>
              <div className="students-grid top-rankers">
                {class12Results.map((student, index) => (
                  <div className="student-card gold-theme" key={index}>
                    <div className="avatar-container">
                      {student.photo ? (
                        <img
                          src={student.photo}
                          alt={student.name}
                          className="student-photo gold-photo"
                          style={student.rotate ? { transform: `rotate(${student.rotate}deg) scale(1.3)` } : undefined}
                        />
                      ) : (
                        <div className="student-avatar-inline gold-avatar">
                          {getInitials(student.name)}
                        </div>
                      )}
                      {student.rank && <div className="rank-badge gold-badge">{student.rank}</div>}
                    </div>
                    <h4 className="student-name">{student.name}</h4>
                    <div className="percentage-ribbon">{student.percentage}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Class 10th */}
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
                      {student.photo ? (
                        <img src={student.photo} alt={student.name} className="student-photo blue-photo" />
                      ) : (
                        <div className="student-avatar-inline blue-avatar">
                          {getInitials(student.name)}
                        </div>
                      )}
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
                    {student.photo ? (
                      <img src={student.photo} alt={student.name} className="student-photo-small" />
                    ) : (
                      <div className="student-avatar-small-inline">
                        {getInitials(student.name)}
                      </div>
                    )}
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
        )}

        {/* ─── Session 2024-25 (new poster data) ─── */}
        {activeBatch === '2024-25' && (
          <div className="results-container animate-batch">

            {/* 10th Class */}
            {renderCategory('Class 10th', 'blue-text', batch2425_class10, 'blue')}

            {/* 11th Class */}
            {renderCategory('Class 11th', 'green-text', batch2425_class11, 'green')}

            {/* 12th Class */}
            {renderCategory('Class 12th', 'gold-text', batch2425_class12, 'gold')}

            <div className="congrats-message">
              Heartfelt Congratulations to All Students on Their Outstanding Exam Results 🎉
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Results;
