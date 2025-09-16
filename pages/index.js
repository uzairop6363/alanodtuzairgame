import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { playSound } from '../hooks/useSound';

export default function Home() {
  const r = useRouter();
  const [name, setName] = useState('');

  useEffect(() => {
    const n = localStorage.getItem('milano_username');
    if (n) setName(n);
  }, []);

  function goLobby() {
    playSound('click.mp3');
    if (!name) {
      const username = prompt('Choose a username (local demo):');
      if (!username) return;
      localStorage.setItem('milano_username', username);
      localStorage.setItem('milano_balance', JSON.stringify(1000));
      setName(username);
      alert('Account created locally. Balance: 1,000 credits (demo).');
    }
    r.push('/lobby');
  }

  return (
    <div className="page center fade-in">
      <h1 className="brand glow">🎰 Milano DT</h1>
      <p className="lead">Demo frontend with sounds, music, animations</p>

      <div style={{ marginTop: 18 }}>
        <button className="btn primary" onClick={goLobby}>
          Enter Lobby
        </button>
      </div>

      {name && <p style={{ marginTop: 14 }}>Signed in as <strong>{name}</strong></p>}
    </div>
  );
}
