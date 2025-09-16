import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>🎰 Milano DT Lobby</h1>
      <p>Select a game:</p>
      <ul style={{ listStyle: "none", padding: 0, fontSize: "20px" }}>
        <li><Link href="/dragon-tiger">🐉 Dragon Tiger</Link></li>
        <li><Link href="/andar-bahar">🃏 Andar Bahar</Link></li>
        <li><Link href="/fruit-slots">🍒 Fruit Slots</Link></li>
        <li><Link href="/seven-up">🎲 7 Up Down</Link></li>
        <li><Link href="/spin-roulette">🎡 Spin Roulette</Link></li>
        <li><Link href="/zoo-roulette">🦓 Zoo Roulette</Link></li>
      </ul>
    </div>
  );
}
