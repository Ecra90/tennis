import React, { useEffect, useState } from "react";
import "./App.css";

const API_URL = "http://127.0.0.1:5000/api";

function App() {
  const [announcements, setAnnouncements] = useState([]);
  const [loadingAnnouncements, setLoadingAnnouncements] = useState(true);

  const [trainingSessions, setTrainingSessions] = useState([]);
  const [loadingTraining, setLoadingTraining] = useState(true);

  const [players, setPlayers] = useState([]);
  const [loadingPlayers, setLoadingPlayers] = useState(true);

  const [attendance, setAttendance] = useState({});
  const [attendanceMessage, setAttendanceMessage] = useState("");

  const [attendanceHistory, setAttendanceHistory] = useState([]);
  const [historyDate, setHistoryDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [loadingHistory, setLoadingHistory] = useState(false);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await fetch(`${API_URL}/announcements`);

        if (!response.ok) {
          throw new Error("Failed to load announcements");
        }

        const data = await response.json();
        setAnnouncements(data);
      } catch (error) {
        console.error("Error fetching announcements:", error);
      } finally {
        setLoadingAnnouncements(false);
      }
    };

    fetchAnnouncements();
  }, []);

  useEffect(() => {
    const fetchTraining = async () => {
      try {
        const response = await fetch(`${API_URL}/training`);

        if (!response.ok) {
          throw new Error("Failed to load training schedule");
        }

        const data = await response.json();
        setTrainingSessions(data);
      } catch (error) {
        console.error("Training error:", error);
      } finally {
        setLoadingTraining(false);
      }
    };

    fetchTraining();
  }, []);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch(`${API_URL}/players`);

        if (!response.ok) {
          throw new Error("Failed to load players");
        }

        const data = await response.json();
        setPlayers(data);
      } catch (error) {
        console.error("Players error:", error);
      } finally {
        setLoadingPlayers(false);
      }
    };

    fetchPlayers();
  }, []);

  const loadAttendanceHistory = async (date) => {
    setLoadingHistory(true);

    try {
      const response = await fetch(
        `${API_URL}/attendance?date=${date}`
      );

      if (!response.ok) {
        throw new Error("Failed to load attendance history");
      }

      const data = await response.json();
      setAttendanceHistory(data);
    } catch (error) {
      console.error("Attendance history error:", error);
      setAttendanceHistory([]);
    } finally {
      setLoadingHistory(false);
    }
  };

  useEffect(() => {
    loadAttendanceHistory(historyDate);
  }, [historyDate]);

  const markAttendance = async (playerId, status) => {
    const today = new Date().toISOString().split("T")[0];

    try {
      const response = await fetch(
        `${API_URL}/attendance`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            player_id: playerId,
            status,
            date: today
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Failed to record attendance"
        );
      }

      setAttendance((previous) => ({
        ...previous,
        [playerId]: status
      }));

      setHistoryDate(today);

      await loadAttendanceHistory(today);

      setAttendanceMessage(
        `${status} attendance recorded successfully! 🎾`
      );

      setTimeout(() => {
        setAttendanceMessage("");
      }, 3000);
    } catch (error) {
      console.error("Attendance error:", error);

      setAttendanceMessage(
        "Unable to record attendance. Please try again."
      );
    }
  };

  const handleTennisRegistration = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const applicationData = {
      name: formData.get("fullName"),
      admission_number: formData.get("admissionNumber"),
      course: formData.get("course"),
      year: formData.get("year"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      category: formData.get("category"),
      skill_level: formData.get("skillLevel"),
      message: formData.get("message")
    };

    try {
      const response = await fetch(
        `${API_URL}/mpesa/stkpush`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(applicationData)
        }
      );

      const data = await response.json();

      if (!response.ok || data.success !== true) {
        throw new Error(
          data.message || "Unable to start M-Pesa payment"
        );
      }

      alert(
        "M-Pesa payment request sent. Check your phone and enter your M-Pesa PIN to pay KSh 500."
      );

      form.reset();
    } catch (error) {
      console.error("Payment error:", error);

      alert(
        error.message ||
        "Unable to connect to the payment server."
      );
    }
  };

  return (
    <div className="app">

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

      <section className="hero" id="home">
        <div className="hero-overlay">
          <div className="hero-content">
            <span className="hero-tag">
              🎾 KIRINYAGA UNIVERSITY SPORTS
            </span>

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
              <a
                href="#players"
                className="hero-btn primary-btn"
              >
                Meet Our Players
              </a>

              <a
                href="#fixtures"
                className="hero-btn secondary-btn"
              >
                View Fixtures
              </a>
            </div>
          </div>

          <div className="hero-tennis">
            <div className="tennis-ball">🎾</div>
          </div>
        </div>
      </section>

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

      <section id="teams" className="section">
        <div className="section-heading">
          <span>OUR TEAMS</span>
          <h2>Compete. Perform. Win.</h2>
          <p>
            Meet the athletes representing Kirinyaga University.
          </p>
        </div>

        <div className="team-container">

          <div className="team-card">
            <div className="team-number">01</div>

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

          <div className="team-card">
            <div className="team-number">02</div>

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

            <p>📍 KYU Tennis Courts</p>
            <p>🕙 10:00 AM</p>
          </div>

          <div className="match-status">
            UPCOMING
          </div>
        </div>
      </section>

      <section
        className="players-section"
        id="players"
      >
        <div className="section-header">
          <span className="section-tag">
            OUR ATHLETES
          </span>

          <h2>Meet The Players</h2>

          <p>
            The athletes representing Kirinyaga University
            on the court.
          </p>
        </div>

        <div className="player-filter">
          <button className="filter-btn active">
            All Players
          </button>

          <button className="filter-btn">
            Men's Team
          </button>

          <button className="filter-btn">
            Women's Team
          </button>
        </div>

        <div className="players-grid">

          <div className="player-card">
            <div className="player-number">01</div>

            <div className="player-avatar">
              🎾
            </div>

            <div className="player-info">
              <span className="player-team men">
                MEN'S TEAM
              </span>

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
                <div
                  className="progress-fill"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="player-card">
            <div className="player-number">02</div>

            <div className="player-avatar">
              🎾
            </div>

            <div className="player-info">
              <span className="player-team men">
                MEN'S TEAM
              </span>

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
                <div
                  className="progress-fill"
                  style={{ width: "69%" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="player-card">
            <div className="player-number">03</div>

            <div className="player-avatar">
              🎾
            </div>

            <div className="player-info">
              <span className="player-team men">
                MEN'S TEAM
              </span>

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
                <div
                  className="progress-fill"
                  style={{ width: "62%" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="player-card">
            <div className="player-number">01</div>

            <div className="player-avatar">
              🎾
            </div>

            <div className="player-info">
              <span className="player-team women">
                WOMEN'S TEAM
              </span>

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
                <div
                  className="progress-fill"
                  style={{ width: "87%" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="player-card">
            <div className="player-number">02</div>

            <div className="player-avatar">
              🎾
            </div>

            <div className="player-info">
              <span className="player-team women">
                WOMEN'S TEAM
              </span>

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
                <div
                  className="progress-fill"
                  style={{ width: "77%" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="player-card">
            <div className="player-number">03</div>

            <div className="player-avatar">
              🎾
            </div>

            <div className="player-info">
              <span className="player-team women">
                WOMEN'S TEAM
              </span>

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
                <div
                  className="progress-fill"
                  style={{ width: "62%" }}
                ></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section
        className="training-section"
        id="training"
      >
        <div className="section-header">
          <span className="section-tag">
            TRAINING
          </span>

          <h2>Training Schedule</h2>

          <p>
            Stay consistent, sharpen your skills, and prepare
            for every match with our weekly training sessions.
          </p>
        </div>

        {loadingTraining ? (
          <div className="training-loading">
            <p>Loading training schedule...</p>
          </div>
        ) : trainingSessions.length === 0 ? (
          <div className="no-training">
            <div className="training-icon">
              🎾
            </div>

            <h3>
              No training sessions scheduled
            </h3>

            <p>
              The training schedule will be updated soon.
            </p>
          </div>
        ) : (
          <div className="training-grid">
            {trainingSessions.map((session) => (
              <div
                className="training-card"
                key={session.id}
              >
                <div className="training-card-icon">
                  🎾
                </div>

                <div className="training-card-content">
                  <h3>{session.day}</h3>

                  <div className="training-time">
                    🕒 {session.time}
                  </div>

                  <p>{session.activity}</p>

                  {session.location && (
                    <div className="training-location">
                      📍 {session.location}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section
        className="announcements-section"
        id="announcements"
      >
        <div className="section-header">
          <span className="section-tag">
            LATEST UPDATES
          </span>

          <h2>Announcements</h2>

          <p>
            Stay updated with the latest news, events, and activities
            from the Kirinyaga University Tennis Club.
          </p>
        </div>

        {loadingAnnouncements ? (
          <div className="announcements-loading">
            <p>Loading announcements...</p>
          </div>
        ) : announcements.length === 0 ? (
          <div className="no-announcements">
            <div className="announcement-icon">
              📢
            </div>

            <h3>No announcements yet</h3>

            <p>
              Check back soon for the latest updates from the
              Kirinyaga University Tennis Club.
            </p>
          </div>
        ) : (
          <div className="announcements-grid">
            {announcements.map((announcement) => (
              <div
                className="announcement-card"
                key={announcement.id}
              >
                <div className="announcement-card-top">
                  <span className="announcement-icon">
                    📢
                  </span>

                  <span className="announcement-date">
                    {announcement.date}
                  </span>
                </div>

                <h3>
                  {announcement.title}
                </h3>

                <p>
                  {announcement.message}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      <section
        className="attendance-section"
        id="attendance"
      >
        <div className="section-header">
          <span className="section-tag">
            TEAM MANAGEMENT
          </span>

          <h2>Daily Attendance</h2>

          <p>
            Keep track of player attendance during training
            sessions and team activities.
          </p>
        </div>

        {attendanceMessage && (
          <div className="attendance-message">
            {attendanceMessage}
          </div>
        )}

        {loadingPlayers ? (
          <div className="attendance-loading">
            <p>Loading players...</p>
          </div>
        ) : players.length === 0 ? (
          <div className="no-players">
            <div className="attendance-icon">
              🎾
            </div>

            <h3>
              No players registered
            </h3>

            <p>
              Players will appear here once they have
              been added to the tennis team.
            </p>
          </div>
        ) : (
          <div className="attendance-container">

            <div className="attendance-header">
              <div>
                <h3>
                  Today's Attendance
                </h3>

                <p>
                  {new Date().toLocaleDateString(
                    "en-KE",
                    {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric"
                    }
                  )}
                </p>
              </div>

              <div className="attendance-count">
                <strong>
                  {Object.keys(attendance).length}
                </strong>

                <span>
                  / {players.length} marked
                </span>
              </div>
            </div>

            <div className="attendance-list">
              {players.map((player) => (
                <div
                  className="attendance-row"
                  key={player.id}
                >
                  <div className="player-info">
                    <div className="player-avatar">
                      {player.name
                        .charAt(0)
                        .toUpperCase()}
                    </div>

                    <div>
                      <h4>{player.name}</h4>

                      <p>
                        {player.course || "Student"}
                        {player.position &&
                          ` • ${player.position}`}
                      </p>
                    </div>
                  </div>

                  <div className="attendance-actions">
                    <button
                      className={
                        attendance[player.id] === "Present"
                          ? "attendance-btn present active"
                          : "attendance-btn present"
                      }
                      onClick={() =>
                        markAttendance(
                          player.id,
                          "Present"
                        )
                      }
                    >
                      ✓ Present
                    </button>

                    <button
                      className={
                        attendance[player.id] === "Absent"
                          ? "attendance-btn absent active"
                          : "attendance-btn absent"
                      }
                      onClick={() =>
                        markAttendance(
                          player.id,
                          "Absent"
                        )
                      }
                    >
                      ✕ Absent
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <section
        className="attendance-history-section"
        id="attendance-history"
      >
        <div className="section-header">
          <span className="section-tag">
            TEAM RECORDS
          </span>

          <h2>Attendance History</h2>

          <p>
            View attendance records for previous training
            sessions and team activities.
          </p>
        </div>

        <div className="attendance-history-container">
          <div className="history-controls">
            <div className="history-date-control">
              <label htmlFor="attendance-date">
                Select Date
              </label>

              <input
                id="attendance-date"
                type="date"
                value={historyDate}
                onChange={(e) =>
                  setHistoryDate(e.target.value)
                }
              />
            </div>

            <button
              className="view-history-btn"
              onClick={() =>
                loadAttendanceHistory(historyDate)
              }
            >
              View Attendance
            </button>
          </div>

          {loadingHistory ? (
            <div className="history-loading">
              <p>
                Loading attendance records...
              </p>
            </div>
          ) : attendanceHistory.length === 0 ? (
            <div className="no-history">
              <div className="history-icon">
                📋
              </div>

              <h3>
                No attendance records
              </h3>

              <p>
                There are no attendance records for{" "}
                {new Date(
                  historyDate + "T00:00:00"
                ).toLocaleDateString(
                  "en-KE",
                  {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                  }
                )}.
              </p>
            </div>
          ) : (
            <>
              <div className="attendance-summary">

                <div className="summary-card">
                  <span className="summary-icon">
                    👥
                  </span>

                  <div>
                    <strong>
                      {attendanceHistory.length}
                    </strong>

                    <span>
                      Marked
                    </span>
                  </div>
                </div>

                <div className="summary-card present-summary">
                  <span className="summary-icon">
                    ✓
                  </span>

                  <div>
                    <strong>
                      {
                        attendanceHistory.filter(
                          (record) =>
                            record.status === "Present"
                        ).length
                      }
                    </strong>

                    <span>
                      Present
                    </span>
                  </div>
                </div>

                <div className="summary-card absent-summary">
                  <span className="summary-icon">
                    ✕
                  </span>

                  <div>
                    <strong>
                      {
                        attendanceHistory.filter(
                          (record) =>
                            record.status === "Absent"
                        ).length
                      }
                    </strong>

                    <span>
                      Absent
                    </span>
                  </div>
                </div>

              </div>

              <div className="history-list">
                {attendanceHistory.map((record) => (
                  <div
                    className="history-row"
                    key={record.id}
                  >
                    <div className="history-player">
                      <div className="history-avatar">
                        {record.name
                          .charAt(0)
                          .toUpperCase()}
                      </div>

                      <div>
                        <h4>
                          {record.name}
                        </h4>

                        <p>
                          {record.course ||
                            "Student"}
                        </p>
                      </div>
                    </div>

                    <span
                      className={
                        record.status === "Present"
                          ? "history-status present"
                          : "history-status absent"
                      }
                    >
                      {record.status === "Present"
                        ? "✓ Present"
                        : "✕ Absent"}
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

  

      <section
        id="fixtures"
        className="section"
      >
        <div className="section-heading">
          <span>MATCH SCHEDULE</span>

          <h2>
            Fixtures & Results
          </h2>
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

      <section
        id="rankings"
        className="section"
      >
        <div className="section-heading">
          <span>LEADERBOARD</span>

          <h2>
            Player Rankings
          </h2>
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
  <section
        className="join-tennis-section"
        id="join-tennis"
      >
        <div className="join-tennis-container">

          <div className="join-tennis-heading">
            <span className="tennis-ball">
              🎾
            </span>

            <div>
              <h2>
                Join KYU Tennis Team
              </h2>

              <p>
                Ready to represent Kirinyaga University
                on the court? Join our tennis team and
                become part of the game.
              </p>

              <div className="joining-fee">
                💰 Joining Fee:
                <strong>KSh 500</strong>
              </div>
            </div>
          </div>

          <form
            className="join-tennis-form"
            onSubmit={handleTennisRegistration}
          >
            <div className="tennis-form-grid">

              <div className="tennis-field">
                <label htmlFor="fullName">
                  Full Name
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="tennis-field">
                <label htmlFor="admissionNumber">
                  Admission Number
                </label>

                <input
                  id="admissionNumber"
                  name="admissionNumber"
                  type="text"
                  placeholder="Enter admission number"
                  required
                />
              </div>

              <div className="tennis-field">
                <label htmlFor="course">
                  Course
                </label>

                <input
                  id="course"
                  name="course"
                  type="text"
                  placeholder="e.g. BSc Information Technology"
                  required
                />
              </div>

              <div className="tennis-field">
                <label htmlFor="year">
                  Year of Study
                </label>

                <select
                  id="year"
                  name="year"
                  required
                >
                  <option value="">
                    Select year
                  </option>

                  <option value="1st Year">
                    1st Year
                  </option>

                  <option value="2nd Year">
                    2nd Year
                  </option>

                  <option value="3rd Year">
                    3rd Year
                  </option>

                  <option value="4th Year">
                    4th Year
                  </option>
                </select>
              </div>

              <div className="tennis-field">
                <label htmlFor="phone">
                  M-Pesa Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="e.g. 0712345678"
                  pattern="^(07|01)[0-9]{8}$"
                  title="Enter a valid Kenyan phone number e.g. 0712345678"
                  required
                />

                <small>
                  The KSh 500 payment prompt will be
                  sent to this number.
                </small>
              </div>

              <div className="tennis-field">
                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email address"
                  required
                />
              </div>

              <div className="tennis-field">
                <label htmlFor="category">
                  Playing Category
                </label>

                <select
                  id="category"
                  name="category"
                  required
                >
                  <option value="">
                    Select category
                  </option>

                  <option value="Singles">
                    Singles
                  </option>

                  <option value="Doubles">
                    Doubles
                  </option>

                  <option value="Both">
                    Both
                  </option>
                </select>
              </div>

              <div className="tennis-field">
                <label htmlFor="skillLevel">
                  Skill Level
                </label>

                <select
                  id="skillLevel"
                  name="skillLevel"
                  required
                >
                  <option value="">
                    Select skill level
                  </option>

                  <option value="Beginner">
                    Beginner
                  </option>

                  <option value="Intermediate">
                    Intermediate
                  </option>

                  <option value="Advanced">
                    Advanced
                  </option>
                </select>
              </div>

            </div>

            <div className="tennis-field tennis-message">
              <label htmlFor="message">
                Why do you want to join the team?
              </label>

              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Tell us a little about yourself and your interest in tennis..."
                required
              ></textarea>
            </div>

            <label className="tennis-checkbox">
              <input
                type="checkbox"
                required
              />

              <span>
                I confirm that the information provided
                is accurate and I agree to pay the KSh 500
                joining fee.
              </span>
            </label>

            <div className="payment-summary">
              <div>
                <span>
                  🎾 Tennis Team Joining Fee
                </span>

                <strong>
                  KSh 500
                </strong>
              </div>

              <p>
                An M-Pesa payment prompt will be sent
                to your phone after you submit the form.
              </p>
            </div>

            <button
              type="submit"
              className="tennis-submit-btn"
            >
              📱 Join & Pay KSh 500
            </button>
          </form>
        </div>
      </section>
      <footer className="footer">

        <div className="footer-content">

          <div>
            <h2>
              🎾 KYU Tennis Hub
            </h2>

            <p>
              Connecting Kirinyaga University
              tennis players, fans and supporters.
            </p>
          </div>

          <div>
            <h3>
              Explore
            </h3>

            <a href="#home">
              Home
            </a>

            <a href="#teams">
              Teams
            </a>

            <a href="#players">
              Players
            </a>

            <a href="#fixtures">
              Fixtures
            </a>
          </div>

          <div>
            <h3>
              Kirinyaga University
            </h3>

            <p>
              Kenya 🇰🇪
            </p>

            <p>
              University Tennis
            </p>
          </div>

        </div>

        <div className="footer-bottom">
          © 2026 KYU Tennis Hub
        </div>

      </footer>

    </div>
  );
}

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
        <strong>
          {day}
        </strong>

        <span>
          {month}
        </span>
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