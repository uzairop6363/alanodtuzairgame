import { useState } from 'react';
import { playSound } from '../hooks/useSound';

const animals = ['🦁', '🐯', '🐵', '🐼', '🐘', '🐍'];

export default function ZooRoulette() {
  const [msg, setMsg] = useState('');
  const [balance, setBalance] = useState(
    parseInt(localStorage.getItem('milano_balance') || '1000')
  );

  function play(choice) {
    const bet = 100;
    if (balance < bet) return alert('Not enough balance!');
    playSound('spin.mp3');

    const result = animals[Math.floor(Math.random() * animals.length)];
    let newBalance = balance - bet;
    let message = `Result: ${result} - You lost!`;

    if (choice === result) {
      newBalance += bet * 5;
      message = `Result: ${result} - You WON!`;
      playSound('win.mp3');
    } else {
      playSound('lose.mp3');
    }

    setBalance(newBalance);
    setMsg(message);
    localStorage.setItem('milano_balance', newBalance);
  }

  return (
    <div className="page center">
      <h2>🦁 Zoo Roulette</h2>
      <p>Balance: {balance}</p>
      <div style={{ display:'flex', gap:12, flexWrap:'wrap', margin:18 }}>
        {animals.map(a => (
          <button key={a} className="btn" onClick={() => play(a)}>{a}</button>
        ))}
      </div>
      <p>{msg}</p>
    </div>
  );
}
