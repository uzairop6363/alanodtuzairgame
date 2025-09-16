import { useState } from 'react';
import { playSound } from '../hooks/useSound';

const fruits = ['🍒', '🍋', '🍇', '🍉', '🍊'];

export default function FruitSlots() {
  const [slots, setSlots] = useState(['❔','❔','❔']);
  const [msg, setMsg] = useState('');
  const [balance, setBalance] = useState(
    parseInt(localStorage.getItem('milano_balance') || '1000')
  );

  function spin() {
    const bet = 100;
    if (balance < bet) return alert('Not enough balance!');
    playSound('spin.mp3');

    const s = [
      fruits[Math.floor(Math.random() * fruits.length)],
      fruits[Math.floor(Math.random() * fruits.length)],
      fruits[Math.floor(Math.random() * fruits.length)]
    ];
    setSlots(s);

    let newBalance = balance - bet;
    let message = `${s.join(' | ')} - You lost!`;

    if (s[0] === s[1] && s[1] === s[2]) {
      newBalance += bet * 10;
      message = `${s.join(' | ')} - JACKPOT! You WON!`;
      playSound('win.mp3');
    } else if (s[0] === s[1] || s[1] === s[2]) {
      newBalance += bet * 3;
      message = `${s.join(' | ')} - Small win!`;
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
      <h2>🍒 Fruit Slots</h2>
      <p>Balance: {balance}</p>
      <div style={{ fontSize:48, margin:16 }}>{slots.join(' ')}</div>
      <button className="btn" onClick={spin}>Spin (100)</button>
      <p>{msg}</p>
    </div>
  );
  }
