import { useState, useEffect } from "react";
import { safeLocalStorageGet, safeLocalStorageSet } from "../utils/storage";

export default function SevenUp() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    setBalance(parseInt(safeLocalStorageGet("balance", "0"), 10));
  }, []);

  const roll = () => {
    const dice = Math.floor(Math.random() * 12) + 1;
    const newBalance = dice > 7 ? balance + 10 : balance - 5;
    setBalance(newBalance);
    safeLocalStorageSet("balance", newBalance.toString());
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>🎲 7 Up Down</h1>
      <p>Balance: {balance}</p>
      <button onClick={roll}>Roll Dice</button>
    </div>
  );
}
