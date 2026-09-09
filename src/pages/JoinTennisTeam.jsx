import React, { useState } from "react";
const JoinTennisTeam = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    admissionNumber: "",
    course: "",
    year: "",
    phone: "",
    email: "",
    category: "",
    skillLevel: "",
    experience: "",
    previousTeam: "",
    trainingDays: "",
    trainingTime: "",
    motivation: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Tennis Team Application:", formData);

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="tennis-page">
      <div className="tennis-container">

        {/* Header */}
        <div className="tennis-header">
          <div className="tennis-icon">🎾</div>

          <div>
            <h1>Join KYU Tennis Team</h1>
            <p>
              Ready to represent Kirinyaga University on the court?
              Submit your application below.
            </p>
          </div>
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="success-message">
            ✅ Application submitted successfully!
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="tennis-form">

          {/* Personal Information */}
          <section className="form-section">
            <h2>Personal Information</h2>

            <div className="form-grid">

              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Admission Number</label>
                <input
                  type="text"
                  name="admissionNumber"
                  placeholder="e.g. S123/0000/2026"
                  value={formData.admissionNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Course</label>
                <input
                  type="text"
                  name="course"
                  placeholder="e.g. BSc Information Technology"
                  value={formData.course}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Year of Study</label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select year</option>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                </select>
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>
          </section>

          {/* Tennis Information */}
          <section className="form-section">
            <h2>Tennis Information</h2>

            <div className="form-grid">

              <div className="form-group">
                <label>Playing Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select category</option>
                  <option value="Singles">Singles</option>
                  <option value="Doubles">Doubles</option>
                  <option value="Both">Both</option>
                </select>
              </div>

              <div className="form-group">
                <label>Skill Level</label>
                <select
                  name="skillLevel"
                  value={formData.skillLevel}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select skill level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

              <div className="form-group">
                <label>Playing Experience</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select experience</option>
                  <option value="No experience">No experience</option>
                  <option value="Less than 1 year">Less than 1 year</option>
                  <option value="1 - 3 years">1 - 3 years</option>
                  <option value="3+ years">3+ years</option>
                </select>
              </div>

              <div className="form-group">
                <label>Previous Team / Club</label>
                <input
                  type="text"
                  name="previousTeam"
                  placeholder="Optional"
                  value={formData.previousTeam}
                  onChange={handleChange}
                />
              </div>

            </div>
          </section>

          {/* Availability */}
          <section className="form-section">
            <h2>Training Availability</h2>

            <div className="form-grid">

              <div className="form-group">
                <label>Preferred Training Days</label>
                <input
                  type="text"
                  name="trainingDays"
                  placeholder="e.g. Tuesday, Thursday"
                  value={formData.trainingDays}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Preferred Training Time</label>
                <select
                  name="trainingTime"
                  value={formData.trainingTime}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select time</option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </select>
              </div>

            </div>
          </section>

          {/* Motivation */}
          <section className="form-section">
            <h2>Why Do You Want to Join?</h2>

            <div className="form-group">
              <textarea
                name="motivation"
                rows="5"
                placeholder="Tell us why you would like to join the KYU Tennis Team..."
                value={formData.motivation}
                onChange={handleChange}
                required
              />
            </div>
          </section>

          {/* Agreement */}
          <div className="agreement">
            <input type="checkbox" id="agreement" required />
            <label htmlFor="agreement">
              I confirm that the information provided is accurate.
            </label>
          </div>

          {/* Submit */}
          <button type="submit" className="submit-tennis">
            🎾 Submit Application
          </button>

        </form>
      </div>
    </div>
  );
};

export default JoinTennisTeam;