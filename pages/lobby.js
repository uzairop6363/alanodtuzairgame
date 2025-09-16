import { useRouter } from 'next/router';
import { playSound } from '../hooks/useSound';

const GAMES = [
  { key: 'dragon-tiger', name: 'Dragon vs Tiger', emoji: '🐉🐯', desc: 'High card duel' },
  { key: 'andar-bahar', name: 'Andar Bahar', emoji: '🃏', desc: 'Classic card game' },
  { key: 'seven-up', name: '7 Up / 7 Down', emoji: '7️⃣', desc: 'Above or below 7' },
  { key: 'zoo-roulette', name: 'Zoo Roulette', emoji: '🦁', desc: 'Animal roulette' },
  { key: 'spin-roulette', name: 'Spin Roulette', emoji: '🎡', desc: 'Number wheel' },
  { key: 'fruit-slots', name: 'Fruit Slots', emoji: '🍒', desc: '3-reel slot' },
];

export default function Lobby() {
  const r = useRouter();

  function enterGame(path){
    playSound('click.mp3');
    r.push(`/${path}`);
  }

  return (
    <div className="page fade-in">
      <h2 style={{ textAlign:'center' }}>🎮 Game Lobby</h2>
      <div className="grid">
        {GAMES.map(g => (
          <div key={g.key} className="card hover-glow" onClick={() => enterGame(g.key)}>
            <div className="logo pulse">{g.emoji}</div>
            <div className="game-name">{g.name}</div>
            <div className="game-desc">{g.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
