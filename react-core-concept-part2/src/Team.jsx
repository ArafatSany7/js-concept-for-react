import { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState(11);

  const handleAdd = () => {
    const newTeam = team + 1;
    setTeam(newTeam);
  };

  const handleReduce = () => {
    if (team > 11) {
      const newTeam = team - 1;
      setTeam(newTeam);
    }
    if (team == 11) {
      alert("Player Cannot be less than eleven");
    }
  };

  const teamStyle = {
    border: "2px solid purple",
    margin: "15px",
    padding: "15px",
    borderRadius: "35px",
  };

  return (
    <div style={teamStyle}>
      <h3>Players : {team} </h3>
      <button onClick={handleAdd}>Add Players</button>
      <button onClick={handleReduce}>Reduce Player</button>
    </div>
  );
}
