import React from "react";
import "./App.css";

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
      <section id="home" className="hero">

        <div className="hero-content">

          <span className="hero-tag">
            KIRINYAGA UNIVERSITY
          </span>

          <h1>
            WHERE CAMPUS TENNIS COMES ALIVE.
            <br />
            <span>KYU TENNIS Hub</span>
          </h1>

          <p>
            The official digital home for Kirinyaga
            University's men's and women's tennis.
          </p>

          <div className="hero-buttons">
            <a href="#teams" className="primary-button">
              Explore Teams
            </a>

            <a href="#fixtures" className="secondary-button">
              Upcoming Matches
            </a>
          </div>

        </div>

        <div className="hero-ball">
          🎾
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


      {/* ================= PLAYERS ================= */}
      <section id="players" className="section">

        <div className="section-heading">
          <span>THE ATHLETES</span>
          <h2>Meet Our Players</h2>
          <p>
            The players carrying the KYU flag on
            the tennis court.
          </p>
        </div>


        {/* MEN */}
        <div id="men-players">

          <h3 className="players-title">
            👨‍🎾 Men's Team
          </h3>

          <div className="players-grid">

            <Player
              name="Alex Mwangi"
              year="Year 3"
              wins="12"
              losses="3"
              points="850"
            />

            <Player
              name="Brian Kamau"
              year="Year 2"
              wins="9"
              losses="4"
              points="720"
            />

            <Player
              name="Kevin Maina"
              year="Year 4"
              wins="8"
              losses="5"
              points="650"
            />

          </div>

        </div>


        {/* WOMEN */}
        <div id="women-players">

          <h3 className="players-title">
            👩‍🎾 Women's Team
          </h3>

          <div className="players-grid">

            <Player
              name="Jane Wanjiku"
              year="Year 3"
              wins="13"
              losses="2"
              points="900"
            />

            <Player
              name="Mercy Njeri"
              year="Year 2"
              wins="10"
              losses="3"
              points="760"
            />

            <Player
              name="Faith Wangari"
              year="Year 4"
              wins="8"
              losses="5"
              points="640"
            />

          </div>

        </div>

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
