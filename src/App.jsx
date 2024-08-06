import React, { useState, useEffect } from 'react';
import './App.css'; // Importing CSS for styling

const App = () => {
  // State variables for managing team, money, total strength, and total agility
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);

  // List of available zombie fighters
  const zombieFighters = [
    { name: 'Survivor', price: 12, strength: 6, agility: 4, img: 'https://via.placeholder.com/150/92c952' },
    { name: 'Scavenger', price: 10, strength: 5, agility: 5, img: 'https://via.placeholder.com/150/771796' },
    { name: 'Shadow', price: 18, strength: 7, agility: 8, img: 'https://via.placeholder.com/150/24f355' },
    { name: 'Tracker', price: 14, strength: 7, agility: 6, img: 'https://via.placeholder.com/150/d32776' },
    { name: 'Sharpshooter', price: 20, strength: 6, agility: 8, img: 'https://via.placeholder.com/150/1ee8a4' },
    { name: 'Medic', price: 15, strength: 5, agility: 7, img: 'https://via.placeholder.com/150/66b7d2' },
    { name: 'Engineer', price: 16, strength: 6, agility: 5, img: 'https://via.placeholder.com/150/56acb2' },
    { name: 'Brawler', price: 11, strength: 8, agility: 3, img: 'https://via.placeholder.com/150/8985dc' },
    { name: 'Infiltrator', price: 17, strength: 5, agility: 9, img: 'https://via.placeholder.com/150/392537' },
    { name: 'Leader', price: 22, strength: 7, agility: 6, img: 'https://via.placeholder.com/150/602b9e' }
  ];

  // Function to add a fighter to the team
  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      // Add fighter to team and deduct price from money
      setTeam([...team, fighter]);
      setMoney(money - fighter.price);
    } else {
      console.log('Not enough money');
    }
  };

  // Function to remove a fighter from the team
  const handleRemoveFighter = (index) => {
    const fighter = team[index];
    // Remove fighter from team and add price back to money
    setTeam(team.filter((_, i) => i !== index));
    setMoney(money + fighter.price);
  };

  // Effect to recalculate total strength and agility whenever the team changes
  useEffect(() => {
    setTotalStrength(team.reduce((sum, fighter) => sum + fighter.strength, 0));
    setTotalAgility(team.reduce((sum, fighter) => sum + fighter.agility, 0));
  }, [team]);

  return (
    <div className="app-container">
      <h1>Zombie Fighters</h1>
      <div className="status">
        <h2>Money: ${money}</h2>
        <h2>Team Strength: {totalStrength}</h2>
        <h2>Team Agility: {totalAgility}</h2>
      </div>
      <div className="team-section">
        <h2>Team</h2>
        {team.length === 0 ? (
          <p>Pick some team members!</p>
        ) : (
          <ul className="team-list">
            {team.map((fighter, index) => (
              <li key={index} className="team-member">
                <img src={fighter.img} alt={fighter.name} />
                <h3>{fighter.name}</h3>
                <p>Price: ${fighter.price}</p>
                <p>Strength: {fighter.strength}</p>
                <p>Agility: {fighter.agility}</p>
                <button onClick={() => handleRemoveFighter(index)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="fighters-section">
        <h2>Fighters</h2>
        <ul className="fighters-list">
          {zombieFighters.map((fighter, index) => (
            <li key={index} className="fighter">
              <img src={fighter.img} alt={fighter.name} />
              <h3>{fighter.name}</h3>
              <p>Price: ${fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => handleAddFighter(fighter)}>Add</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;