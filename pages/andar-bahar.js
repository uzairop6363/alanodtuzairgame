import { useState } from 'react';
import { playSound } from '../hooks/useSound';

export default function AndarBahar() {
  const [msg, setMsg] = useState('');
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
    const result = Math.random() > 0.5 ? 'andar' : 'bahar';
    let newBalance = balance - bet;
    let message = `Result: ${result.toUpperCase()} - You lost!`;

    if (choice === result) {
      newBalance += bet * 2;
      message = `Result: ${result.toUpperCase()} - You WON!`;
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
      <h2>🃏 Andar Bahar</h2>
      <p>Balance: {balance}</p>
      <div style={{ display:'flex', gap:12, margin:18 }}>
        <button className="btn" onClick={() => play('andar')}>Andar</button>
        <button className="btn" onClick={() => play('bahar')}>Bahar</button>
      </div>
      <p>{msg}</p>
    </div>
  );
}
