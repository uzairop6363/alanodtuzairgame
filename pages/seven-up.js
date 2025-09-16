import { useState } from 'react';
import { playSound } from '../hooks/useSound';

export default function SevenUp() {
  const [msg, setMsg] = useState('');
  const [balance, setBalance] = useState(
    parseInt(localStorage.getItem('milano_balance') || '1000')
  );

  function play(choice) {
    const bet = 100;
    if (balance < bet) return alert('Not enough balance!');
    playSound('spin.mp3');

    const dice1 = Math.ceil(Math.random() * 6);
    const dice2 = Math.ceil(Math.random() * 6);
    const total = dice1 + dice2;

    let newBalance = balance - bet;
    let message = `Dice: ${dice1}+${dice2}=${total} - You lost!`;

    if ((choice === 'up' && total > 7) || (choice === 'down' && total < 7) || (choice === 'seven' && total === 7)) {
      let win = bet * (choice === 'seven' ? 5 : 2);
      newBalance += win;
      message = `Dice: ${dice1}+${dice2}=${total} - You WON ${win}!`;
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
      <h2>7️⃣ Seven Up / Down</h2>
      <p>Balance: {balance}</p>
      <div style={{ display:'flex', gap:12, margin:18 }}>
        <button className="btn" onClick={() => play('up')}>Above 7</button>
        <button className="btn" onClick={() => play('down')}>Below 7</button>
        <button className="btn" onClick={() => play('seven')}>Exactly 7</button>
      </div>
      <p>{msg}</p>
    </div>
  );
  }
