import './App.css';
import React, { useState } from "react";

function App() {
  const [die1, setDie1] = useState(1);
  const [die2, setDie2] = useState(1);
  const [wins, setWins] = useState(0);
  const [plays, setPlays] = useState(0);
  const [message, setMessage] = useState("");

  const rollDice = () => {
    const newDie1 = Math.floor(Math.random() * 6) + 1;
    const newDie2 = Math.floor(Math.random() * 6) + 1;

    setDie1(newDie1);
    setDie2(newDie2);
    setPlays(plays + 1);

    const sum = newDie1 + newDie2;
    if (sum === 7 || sum === 11) {
      setWins(wins + 1);
      setMessage("Você ganhou!");
    } else {
      setMessage("Você perdeu!");
    }
  };

  const winPercentage = plays > 0 ? ((wins / plays) * 100).toFixed(2) : 0;

  const diceEmojis = ["", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

  return (
    <div style={styles.container}>
      <h1>Jogo dos Dados</h1>
      <div style={styles.diceContainer}>
        <div style={styles.die}>{diceEmojis[die1]}</div>
        <div style={styles.die}>{diceEmojis[die2]}</div>
      </div>

      <p>{message}</p>
      <button onClick={rollDice} style={styles.button}>Jogar</button>

      <div style={styles.score}>
        <p>Vitórias: {wins}</p>
        <p>Total de Jogadas: {plays}</p>
        <p>Percentual de Vitórias: {winPercentage}%</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#ADF0DD",
    height: "100vh", 
    padding: "20px",
    color: "#145750",
  },
  diceContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  die: {
    margin: "0 10px",
    fontSize: "10em", 
    color: "#145750",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1.2em",
    cursor: "pointer",
    marginBottom: "40px",
    backgroundColor: "#12A594", 
    color: "white", 
    border: "none", 
    borderRadius: "10px", 
  },
  score: {
    fontSize: "1.2em",
  },
};
export default App;
