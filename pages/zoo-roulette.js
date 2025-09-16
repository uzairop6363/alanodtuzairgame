import { useState, useEffect } from "react";
import { safeLocalStorageGet, safeLocalStorageSet } from "../utils/storage";

export default function ZooRoulette() {
  const [balance, setBalance] = useState(0);
  const animals = ["🐅 Tiger", "🦁 Lion", "🐘 Elephant", "🐒 Monkey"];

  useEffect(() => {
    setBalance(parseInt(safeLocalStorageGet("balance", "0"), 10));
  }, []);

  const spin = () => {
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    const win = Math.random() > 0.5;
    const newBalance = win ? balance + 20 : balance - 10;
    setBalance(newBalance);
    safeLocalStorageSet("balance", newBalance.toString());
    alert("Result: " + randomAnimal);
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>🦓 Zoo Roulette</h1>
      <p>Balance: {balance}</p>
      <button onClick={spin}>Spin</button>
    </div>
  );
  }
