import { useState } from 'react';
import { playSound } from '../hooks/useSound';

export default function DragonTiger() {
  const [message, setMessage] = useState('');
  const [balance, setBalance] = useState(
    parseInt(localStorage.getItem('milano_balance') || '1000')
  );

  function play(choice) {
    const bet = 100;
    if (balance < bet) {
      alert('Not enough balance!');
      return;
    }

    playSound('spin.mp3');
    const outcomes = ['dragon', 'tiger', 'tie'];
    const result = outcomes[Math.floor(Math.random() * outcomes.length)];

    let newBalance = balance - bet;
    let msg = `Result: ${result.toUpperCase()} - You lost!`;

    if (choice === result) {
      let win = bet * (result === 'tie' ? 8 : 2);
      newBalance += win;
      msg = `Result: ${result.toUpperCase()} - You WON ${win}!`;
      playSound('win.mp3');
    } else {
      playSound('lose.mp3');
    }

    setBalance(newBalance);
    setMessage(msg);
    localStorage.setItem('milano_balance', newBalance);
  }

  return (
    <div className="page center">
      <h2>🐉 Dragon vs Tiger 🐯</h2>
      <p>Balance: {balance}</p>
      <div style={{ display: 'flex', gap: 12, margin: 18 }}>
        <button className="btn" onClick={() => play('dragon')}>Dragon</button>
        <button className="btn" onClick={() => play('tiger')}>Tiger</button>
        <button className="btn" onClick={() => play('tie')}>Tie</button>
      </div>
      <p>{message}</p>
    </div>
  );
  }
