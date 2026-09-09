import "./App.css";
import React, { useState } from "react";
import JoinTennisTeam from "./pages/JoinTennisTeam";
function App() {
  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="logo">
          🎾 KYU TENNIS Hub
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#teams">Teams</a>
          <a href="#players">Players</a>
          <a href="#fixtures">Fixtures</a>
          <a href="#rankings">Rankings</a>
        </div>
      </nav>


      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <span className="hero-tag">🎾 KIRINYAGA UNIVERSITY SPORTS</span>

            <h1>
              KYU Tennis
              <span>Hub</span>
            </h1>

            <p className="hero-subtitle">
              Where passion meets the court.
            </p>

            <p className="hero-description">
              Follow Kirinyaga University's men's and women's tennis teams,
              discover our players, check fixtures, explore rankings and
              celebrate every victory.
            </p>

            <div className="hero-buttons">
              <a href="#players" className="hero-btn primary-btn">
                Meet Our Players
              </a>

              <a href="#fixtures" className="hero-btn secondary-btn">
                View Fixtures
              </a>
            </div>
          </div>

          <div className="hero-tennis">
            <div className="tennis-ball">🎾</div>
          </div>
        </div>
      </section>


      {/* ================= STATS ================= */}
      <section className="stats">

        <div className="stat">
          <strong>6</strong>
          <span>Players</span>
        </div>

        <div className="stat">
          <strong>2</strong>
          <span>Teams</span>
        </div>

        <div className="stat">
          <strong>4</strong>
          <span>Tournaments</span>
        </div>

        <div className="stat">
          <strong>25+</strong>
          <span>Matches</span>
        </div>

      </section>


      {/* ================= TEAMS ================= */}
      <section id="teams" className="section">

        <div className="section-heading">
          <span>OUR TEAMS</span>
          <h2>Compete. Perform. Win.</h2>
          <p>
            Meet the athletes representing
            Kirinyaga University.
          </p>
        </div>


        <div className="team-container">

          {/* MEN */}
          <div className="team-card">

            <div className="team-number">
              01
            </div>

            <div className="team-icon">
              👨‍🎾
            </div>

            <h2>Men's Tennis</h2>

            <p>
              Follow our men's tennis team,
              fixtures, results and player
              performances.
            </p>

            <div className="team-info">
              <span>👥 3 Players</span>
              <span>🏆 2 Titles</span>
            </div>

            <a href="#men-players">
              View Team →
            </a>

          </div>


          {/* WOMEN */}
          <div className="team-card">

            <div className="team-number">
              02
            </div>

            <div className="team-icon">
              👩‍🎾
            </div>

            <h2>Women's Tennis</h2>

            <p>
              Discover our women's team and
              follow their journey on the court.
            </p>

            <div className="team-info">
              <span>👥 3 Players</span>
              <span>🏆 2 Titles</span>
            </div>

            <a href="#women-players">
              View Team →
            </a>

          </div>

        </div>

      </section>


      {/* ================= UPCOMING MATCH ================= */}
      <section className="match-section">

        <div className="section-heading">
          <span>NEXT MATCH</span>
          <h2>Upcoming Fixture</h2>
        </div>


        <div className="match-card">

          <div className="match-date">
            <span>OCT</span>
            <strong>15</strong>
            <span>2026</span>
          </div>


          <div className="match-info">

            <small>
              UNIVERSITY TENNIS CHAMPIONSHIP
            </small>

            <h2>
              Kirinyaga University
              <span> VS </span>
              Kenyatta University
            </h2>

            <p>
              📍 KYU Tennis Courts
            </p>

            <p>
              🕙 10:00 AM
            </p>

          </div>


          <div className="match-status">
            UPCOMING
          </div>

        </div>

      </section>

      <section className="players-section" id="players">
        <div className="section-header">
          <span className="section-tag">OUR ATHLETES</span>
          <h2>Meet The Players</h2>
          <p>The athletes representing Kirinyaga University on the court.</p>
        </div>

        <div className="player-filter">
          <button className="filter-btn active">All Players</button>
          <button className="filter-btn">Men's Team</button>
          <button className="filter-btn">Women's Team</button>
        </div>

        <div className="players-grid">

          {/* Men's Players */}

          <div className="player-card">
            <div className="player-number">01</div>

            <div className="player-avatar">
              🎾
            </div>

            <div className="player-info">
              <span className="player-team men">MEN'S TEAM</span>
              <h3>Alex Mwangi</h3>
              <p>Year 3 • Singles Player</p>
            </div>

            <div className="player-stats">
              <div>
                <strong>12</strong>
                <span>Wins</span>
              </div>

              <div>
                <strong>3</strong>
                <span>Losses</span>
              </div>

              <div>
                <strong>850</strong>
                <span>Points</span>
              </div>
            </div>

            <div className="win-rate">
              <div className="win-rate-header">
                <span>Win Rate</span>
                <strong>80%</strong>
              </div>

              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "80%" }}></div>
              </div>
            </div>
          </div>


          <div className="player-card">
            <div className="player-number">02</div>

            <div className="player-avatar">
              🎾
            </div>

            <div className="player-info">
              <span className="player-team men">MEN'S TEAM</span>
              <h3>Brian Kamau</h3>
              <p>Year 2 • Singles Player</p>
            </div>

            <div className="player-stats">
              <div>
                <strong>9</strong>
                <span>Wins</span>
              </div>

              <div>
                <strong>4</strong>
                <span>Losses</span>
              </div>

              <div>
                <strong>720</strong>
                <span>Points</span>
              </div>
            </div>

            <div className="win-rate">
              <div className="win-rate-header">
                <span>Win Rate</span>
                <strong>69%</strong>
              </div>

              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "69%" }}></div>
              </div>
            </div>
          </div>


          <div className="player-card">
            <div className="player-number">03</div>

            <div className="player-avatar">
              🎾
            </div>

            <div className="player-info">
              <span className="player-team men">MEN'S TEAM</span>
              <h3>Kevin Maina</h3>
              <p>Year 4 • Singles Player</p>
            </div>

            <div className="player-stats">
              <div>
                <strong>8</strong>
                <span>Wins</span>
              </div>

              <div>
                <strong>5</strong>
                <span>Losses</span>
              </div>

              <div>
                <strong>650</strong>
                <span>Points</span>
              </div>
            </div>

            <div className="win-rate">
              <div className="win-rate-header">
                <span>Win Rate</span>
                <strong>62%</strong>
              </div>

              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "62%" }}></div>
              </div>
            </div>
          </div>


          {/* Women's Players */}

          <div className="player-card">
            <div className="player-number">01</div>

            <div className="player-avatar">
              🎾
            </div>

            <div className="player-info">
              <span className="player-team women">WOMEN'S TEAM</span>
              <h3>Jane Wanjiku</h3>
              <p>Year 3 • Singles Player</p>
            </div>

            <div className="player-stats">
              <div>
                <strong>13</strong>
                <span>Wins</span>
              </div>

              <div>
                <strong>2</strong>
                <span>Losses</span>
              </div>

              <div>
                <strong>900</strong>
                <span>Points</span>
              </div>
            </div>

            <div className="win-rate">
              <div className="win-rate-header">
                <span>Win Rate</span>
                <strong>87%</strong>
              </div>

              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "87%" }}></div>
              </div>
            </div>
          </div>


          <div className="player-card">
            <div className="player-number">02</div>

            <div className="player-avatar">
              🎾
            </div>

            <div className="player-info">
              <span className="player-team women">WOMEN'S TEAM</span>
              <h3>Mercy Njeri</h3>
              <p>Year 2 • Singles Player</p>
            </div>

            <div className="player-stats">
              <div>
                <strong>10</strong>
                <span>Wins</span>
              </div>

              <div>
                <strong>3</strong>
                <span>Losses</span>
              </div>

              <div>
                <strong>760</strong>
                <span>Points</span>
              </div>
            </div>

            <div className="win-rate">
              <div className="win-rate-header">
                <span>Win Rate</span>
                <strong>77%</strong>
              </div>

              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "77%" }}></div>
              </div>
            </div>
          </div>


          <div className="player-card">
            <div className="player-number">03</div>

            <div className="player-avatar">
              🎾
            </div>

            <div className="player-info">
              <span className="player-team women">WOMEN'S TEAM</span>
              <h3>Faith Wangari</h3>
              <p>Year 4 • Singles Player</p>
            </div>

            <div className="player-stats">
              <div>
                <strong>8</strong>
                <span>Wins</span>
              </div>

              <div>
                <strong>5</strong>
                <span>Losses</span>
              </div>

              <div>
                <strong>640</strong>
                <span>Points</span>
              </div>
            </div>

            <div className="win-rate">
              <div className="win-rate-header">
                <span>Win Rate</span>
                <strong>62%</strong>
              </div>

              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "62%" }}></div>
              </div>
            </div>
          </div>

        </div>
      </section>
         {/* ==================== TRAINING SCHEDULE ==================== */}
      <section className="training-section" id="training">
        <div className="training-container">

          <div className="training-header">
            <span className="training-label">🎾 KYU TENNIS TEAM</span>
            <h2>Training Schedule</h2>
            <p>
              Stay updated with our weekly training sessions and improve your game.
            </p>
          </div>

          <div className="training-grid">

            <div className="training-card">
              <div className="training-day">MONDAY</div>
              <div className="training-icon">🎾</div>
              <h3>Fitness & Conditioning</h3>
              <p className="training-time">4:00 PM – 6:00 PM</p>
              <p className="training-location">📍 University Tennis Court</p>
              <span className="training-level">All Players</span>
            </div>

            <div className="training-card">
              <div className="training-day">WEDNESDAY</div>
              <div className="training-icon">🏃</div>
              <h3>Technical Training</h3>
              <p className="training-time">4:00 PM – 6:00 PM</p>
              <p className="training-location">📍 University Tennis Court</p>
              <span className="training-level">All Players</span>
            </div>

            <div className="training-card">
              <div className="training-day">FRIDAY</div>
              <div className="training-icon">🔥</div>
              <h3>Match Practice</h3>
              <p className="training-time">3:30 PM – 6:00 PM</p>
              <p className="training-location">📍 University Tennis Court</p>
              <span className="training-level">Intermediate & Advanced</span>
            </div>

            <div className="training-card">
              <div className="training-day">SATURDAY</div>
              <div className="training-icon">🏆</div>
              <h3>Team Practice</h3>
              <p className="training-time">9:00 AM – 12:00 PM</p>
              <p className="training-location">📍 University Tennis Court</p>
              <span className="training-level">Team Members</span>
            </div>

          </div>

          <div className="training-note">
            <strong>📌 Training Reminder:</strong>
            <span>
              Please arrive at least 15 minutes before training begins and carry
              your tennis racket, sports shoes and water.
            </span>
          </div>

        </div>
      </section>
   {/* ==================== ANNOUNCEMENTS ==================== */}
      <section className="announcements-section" id="announcements">
        <div className="announcements-container">

          <div className="announcements-header">
            <span className="announcements-label">📢 KYU TENNIS TEAM</span>
            <h2>Announcements</h2>
            <p>
              Keep up with the latest news, updates and important team information.
            </p>
          </div>

          <div className="announcements-list">

            <div className="announcement-card">
              <div className="announcement-icon">🎾</div>

              <div className="announcement-content">
                <span className="announcement-date">09 SEPT 2026</span>
                <h3>Weekly Training Sessions</h3>
                <p>
                  All team members are reminded to attend the scheduled training
                  sessions this week. Consistent attendance is important for
                  individual and team development.
                </p>
              </div>

              <span className="announcement-tag important">Important</span>
            </div>


            <div className="announcement-card">
              <div className="announcement-icon">🏆</div>

              <div className="announcement-content">
                <span className="announcement-date">08 SEPT 2026</span>
                <h3>Upcoming Tennis Matches</h3>
                <p>
                  Players selected for the upcoming matches should report for
                  additional preparation and match practice.
                </p>
              </div>

              <span className="announcement-tag match">Matches</span>
            </div>


            <div className="announcement-card">
              <div className="announcement-icon">📋</div>

              <div className="announcement-content">
                <span className="announcement-date">07 SEPT 2026</span>
                <h3>New Members Welcome</h3>
                <p>
                  Interested students can register to join the KYU Tennis Team
                  using the registration form below.
                </p>
              </div>

              <span className="announcement-tag new">New</span>
            </div>

          </div>

          <div className="announcement-footer">
            <p>💡 Check this section regularly for new team updates.</p>
          </div>

        </div>
      </section>
      {/* ================= DAILY ATTENDANCE TRACKER ================= */}
      <section className="attendance-section" id="attendance">
        <div className="attendance-container">

          {/* Section Header */}
          <div className="attendance-header">
            <div>
              <span className="attendance-label">KYU TENNIS TEAM</span>
              <h2>Daily Attendance</h2>
              <p>
                Track team members' attendance during daily tennis training
                sessions.
              </p>
            </div>

            <div className="attendance-date">
              <span>Today's Date</span>
              <strong>
                {new Date().toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </strong>
            </div>
          </div>

          {/* Attendance Summary Cards */}
          <div className="attendance-cards">

            <div className="attendance-card">
              <div className="attendance-card-icon">👥</div>
              <div>
                <span>Total Members</span>
                <h3>45</h3>
              </div>
            </div>

            <div className="attendance-card">
              <div className="attendance-card-icon">✅</div>
              <div>
                <span>Present</span>
                <h3>38</h3>
              </div>
            </div>

            <div className="attendance-card">
              <div className="attendance-card-icon">❌</div>
              <div>
                <span>Absent</span>
                <h3>5</h3>
              </div>
            </div>

            <div className="attendance-card">
              <div className="attendance-card-icon">⏰</div>
              <div>
                <span>Late</span>
                <h3>2</h3>
              </div>
            </div>

          </div>

          {/* Attendance Records */}
          <div className="attendance-records">

            <div className="attendance-records-header">
              <div>
                <h3>Today's Attendance</h3>
                <p>Current attendance records for today's training.</p>
              </div>

              <button className="mark-attendance-btn">
                + Mark Attendance
              </button>
            </div>

            {/* Attendance Table */}
            <div className="attendance-table-wrapper">
              <table className="attendance-table">
                <thead>
                  <tr>
                    <th>Member</th>
                    <th>Admission No.</th>
                    <th>Time In</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>
                      <div className="member-name">
                        <div className="member-avatar">JK</div>
                        <span>John Kamau</span>
                      </div>
                    </td>
                    <td>S123/001/2026</td>
                    <td>8:05 AM</td>
                    <td>
                      <span className="attendance-status present">
                        Present
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="member-name">
                        <div className="member-avatar">MW</div>
                        <span>Mary Wanjiku</span>
                      </div>
                    </td>
                    <td>S123/002/2026</td>
                    <td>8:12 AM</td>
                    <td>
                      <span className="attendance-status present">
                        Present
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="member-name">
                        <div className="member-avatar">BO</div>
                        <span>Brian Otieno</span>
                      </div>
                    </td>
                    <td>S123/003/2026</td>
                    <td>—</td>
                    <td>
                      <span className="attendance-status absent">
                        Absent
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="member-name">
                        <div className="member-avatar">AN</div>
                        <span>Ann Njeri</span>
                      </div>
                    </td>
                    <td>S123/004/2026</td>
                    <td>8:27 AM</td>
                    <td>
                      <span className="attendance-status late">
                        Late
                      </span>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>

          </div>

        </div>
      </section>
      {/* ==================== JOIN TENNIS TEAM ==================== */}
      <section className="join-tennis-section" id="join-tennis">
        {/* Your existing Join Tennis Team form goes here */}
      </section>
      {/* ================= JOIN TENNIS TEAM FORM ================= */}

      <section className="join-tennis-section" id="join-tennis">
        {/* Your Join Tennis Team form goes here */}
      </section>

      {/* ================= FIXTURES ================= */}
      <section id="fixtures" className="section">

        <div className="section-heading">
          <span>MATCH SCHEDULE</span>
          <h2>Fixtures & Results</h2>
        </div>


        <div className="fixtures">

          <Fixture
            day="15"
            month="OCT"
            opponent="Kenyatta University"
            team="Men's Tennis"
            time="10:00 AM"
          />

          <Fixture
            day="20"
            month="OCT"
            opponent="Mount Kenya University"
            team="Women's Tennis"
            time="2:00 PM"
          />

          <Fixture
            day="27"
            month="OCT"
            opponent="University of Nairobi"
            team="Men's Tennis"
            time="11:00 AM"
          />

        </div>

      </section>


      {/* ================= RANKINGS ================= */}
      <section id="rankings" className="section">

        <div className="section-heading">
          <span>LEADERBOARD</span>
          <h2>Player Rankings</h2>
        </div>


        <div className="ranking-table">

          <div className="ranking-header">
            <span>#</span>
            <span>Player</span>
            <span>Team</span>
            <span>Points</span>
          </div>


          <Ranking
            position="1"
            player="Jane Wanjiku"
            team="Women"
            points="900"
          />

          <Ranking
            position="2"
            player="Alex Mwangi"
            team="Men"
            points="850"
          />

          <Ranking
            position="3"
            player="Mercy Njeri"
            team="Women"
            points="760"
          />

          <Ranking
            position="4"
            player="Brian Kamau"
            team="Men"
            points="720"
          />

          <Ranking
            position="5"
            player="Kevin Maina"
            team="Men"
            points="650"
          />

        </div>

      </section>
      {/* Join KYU Tennis Team */}
      <section className="join-tennis-section" id="join-tennis">
        <div className="join-tennis-container">

          <div className="join-tennis-heading">
            <span className="tennis-ball">🎾</span>

            <div>
              <h2>Join KYU Tennis Team</h2>
              <p>
                Ready to represent Kirinyaga University on the court?
                Join our tennis team and be part of the game.
              </p>
            </div>
          </div>

          <form className="join-tennis-form">

            <div className="tennis-form-grid">

              <div className="tennis-field">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="tennis-field">
                <label>Admission Number</label>
                <input
                  type="text"
                  placeholder="Enter admission number"
                  required
                />
              </div>

              <div className="tennis-field">
                <label>Course</label>
                <input
                  type="text"
                  placeholder="e.g. BSc Information Technology"
                  required
                />
              </div>

              <div className="tennis-field">
                <label>Year of Study</label>
                <select required>
                  <option value="">Select year</option>
                  <option>1st Year</option>
                  <option>2nd Year</option>
                  <option>3rd Year</option>
                  <option>4th Year</option>
                </select>
              </div>

              <div className="tennis-field">
                <label>Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  required
                />
              </div>

              <div className="tennis-field">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  required
                />
              </div>

              <div className="tennis-field">
                <label>Playing Category</label>
                <select required>
                  <option value="">Select category</option>
                  <option>Singles</option>
                  <option>Doubles</option>
                  <option>Both</option>
                </select>
              </div>

              <div className="tennis-field">
                <label>Skill Level</label>
                <select required>
                  <option value="">Select skill level</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>

            </div>

            <div className="tennis-field tennis-message">
              <label>Why do you want to join the team?</label>
              <textarea
                rows="4"
                placeholder="Tell us a little about yourself and your interest in tennis..."
                required
              ></textarea>
            </div>

            <label className="tennis-checkbox">
              <input type="checkbox" required />
              <span>I confirm that the information provided is accurate.</span>
            </label>

            <button type="submit" className="tennis-submit-btn">
              🎾 Join Tennis Team
            </button>

          </form>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="footer-content">

          <div>
            <h2>🎾 KYU Tennis Hub</h2>

            <p>
              Connecting Kirinyaga University
              tennis players, fans and supporters.
            </p>
          </div>


          <div>
            <h3>Explore</h3>

            <a href="#home">Home</a>
            <a href="#teams">Teams</a>
            <a href="#players">Players</a>
            <a href="#fixtures">Fixtures</a>
          </div>


          <div>
            <h3>Kirinyaga University</h3>

            <p>Kenya 🇰🇪</p>
            <p>University Tennis</p>
          </div>

        </div>


        <div className="footer-bottom">
          © 2026 KYU Tennis Hub
        </div>

      </footer>

    </div>
  );
}


/* ===============================
   PLAYER COMPONENT
================================ */

function Player({
  name,
  year,
  wins,
  losses,
  points
}) {

  const total = Number(wins) + Number(losses);

  const winRate = Math.round(
    (Number(wins) / total) * 100
  );

  return (
    <div className="player-card">

      <div className="player-avatar">
        🎾
      </div>

      <h3>{name}</h3>

      <p>{year}</p>

      <div className="player-stats">

        <div>
          <strong>{wins}</strong>
          <span>Wins</span>
        </div>

        <div>
          <strong>{losses}</strong>
          <span>Losses</span>
        </div>

        <div>
          <strong>{winRate}%</strong>
          <span>Win Rate</span>
        </div>

      </div>

      <div className="points">
        🏆 {points} Points
      </div>

    </div>
  );
}


/* ===============================
   FIXTURE COMPONENT
================================ */

function Fixture({
  day,
  month,
  opponent,
  team,
  time
}) {

  return (
    <div className="fixture">

      <div className="fixture-date">
        <strong>{day}</strong>
        <span>{month}</span>
      </div>

      <div className="fixture-details">

        <h3>
          KYU vs {opponent}
        </h3>

        <p>
          {team} • {time}
        </p>

      </div>

      <span className="upcoming">
        UPCOMING
      </span>

    </div>
  );
}


/* ===============================
   RANKING COMPONENT
================================ */

function Ranking({
  position,
  player,
  team,
  points
}) {

  return (
    <div className="ranking-row">

      <span>
        {position}
      </span>

      <span>
        {player}
      </span>

      <span>
        {team}
      </span>

      <strong>
        {points}
      </strong>

    </div>
  );
}
export default App;
