import { useState } from 'react';
import { playSound } from '../hooks/useSound';

export default function SpinRoulette() {
  const [msg, setMsg] = useState('');
  const [balance, setBalance] = useState(
    parseInt(localStorage.getItem('milano_balance') || '1000')
  );

  function play(choice) {
    const bet = 100;
    if (balance < bet) return alert('Not enough balance!');
    playSound('spin.mp3');

    const result = Math.floor(Math.random() * 10); // 0-9 wheel
    let newBalance = balance - bet;
    let message = `Result: ${result} - You lost!`;

    if (choice === result) {
      newBalance += bet * 8;
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
      <h2>🎡 Spin Roulette</h2>
      <p>Balance: {balance}</p>
      <div style={{ display:'flex', gap:12, flexWrap:'wrap', margin:18 }}>
        {[...Array(10).keys()].map(n => (
          <button key={n} className="btn" onClick={() => play(n)}>{n}</button>
        ))}
      </div>
      <p>{msg}</p>
    </div>
  );
}
