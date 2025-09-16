import { useState, useEffect } from "react";
import { safeLocalStorageGet, safeLocalStorageSet } from "../utils/storage";

export default function SpinRoulette() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    setBalance(parseInt(safeLocalStorageGet("balance", "0"), 10));
  }, []);

  const spin = () => {
    const number = Math.floor(Math.random() * 36);
    const newBalance = number % 2 === 0 ? balance + 15 : balance - 10;
    setBalance(newBalance);
    safeLocalStorageSet("balance", newBalance.toString());
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>🎡 Spin Roulette</h1>
      <p>Balance: {balance}</p>
      <button onClick={spin}>Spin</button>
    </div>
  );
}
