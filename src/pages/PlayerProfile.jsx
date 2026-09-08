import { useParams, Link } from "react-router-dom";

const players = {
  "alex-mwangi": {
    name: "Alex Mwangi",
    team: "Men's Team",
    year: "Year 3",
    wins: 12,
    losses: 3,
    points: 850,
  },

  "brian-kamau": {
    name: "Brian Kamau",
    team: "Men's Team",
    year: "Year 2",
    wins: 9,
    losses: 4,
    points: 720,
  },

  "kevin-maina": {
    name: "Kevin Maina",
    team: "Men's Team",
    year: "Year 4",
    wins: 8,
    losses: 5,
    points: 650,
  },

  "jane-wanjiku": {
    name: "Jane Wanjiku",
    team: "Women's Team",
    year: "Year 3",
    wins: 13,
    losses: 2,
    points: 900,
  },

  "mercy-njeri": {
    name: "Mercy Njeri",
    team: "Women's Team",
    year: "Year 2",
    wins: 10,
    losses: 3,
    points: 760,
  },

  "faith-wangari": {
    name: "Faith Wangari",
    team: "Women's Team",
    year: "Year 4",
    wins: 8,
    losses: 5,
    points: 640,
  },
};

function PlayerProfile() {
  const { playerId } = useParams();

  const player = players[playerId];

  if (!player) {
    return (
      <div className="profile-page">
        <h1>Player Not Found</h1>
        <Link to="/">← Back Home</Link>
      </div>
    );
  }

  const totalMatches = player.wins + player.losses;
  const winRate = Math.round((player.wins / totalMatches) * 100);

  return (
    <div className="profile-page">

      <Link className="back-link" to="/">
        ← Back to KYU Tennis Hub
      </Link>

      <div className="profile-card">

        <div className="profile-avatar">
          🎾
        </div>

        <p className="profile-team">{player.team}</p>

        <h1>{player.name}</h1>

        <p className="profile-year">
          {player.year} • Tennis Player
        </p>

        <div className="profile-stats">

          <div>
            <strong>{totalMatches}</strong>
            <span>Matches</span>
          </div>

          <div>
            <strong>{player.wins}</strong>
            <span>Wins</span>
          </div>

          <div>
            <strong>{player.losses}</strong>
            <span>Losses</span>
          </div>

          <div>
            <strong>{winRate}%</strong>
            <span>Win Rate</span>
          </div>

          <div>
            <strong>{player.points}</strong>
            <span>Points</span>
          </div>

        </div>

      </div>

      <div className="match-history">

        <h2>Match History</h2>

        <div className="history-row">
          <span>KYU vs University A</span>
          <strong className="win">WIN</strong>
          <span>6 - 3</span>
        </div>

        <div className="history-row">
          <span>KYU vs University B</span>
          <strong className="win">WIN</strong>
          <span>6 - 4</span>
        </div>

        <div className="history-row">
          <span>KYU vs University C</span>
          <strong className="loss">LOSS</strong>
          <span>4 - 6</span>
        </div>

      </div>

    </div>
  );
}

export default PlayerProfile;