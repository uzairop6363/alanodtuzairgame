import { useState, useEffect } from "react";
import { safeLocalStorageGet, safeLocalStorageSet } from "../utils/storage";

export default function AndarBahar() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    setBalance(parseInt(safeLocalStorageGet("balance", "0"), 10));
  }, []);

  const play = () => {
    const newBalance = balance - 5 + Math.floor(Math.random() * 20);
    setBalance(newBalance);
    safeLocalStorageSet("balance", newBalance.toString());
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>🃏 Andar Bahar</h1>
      <p>Balance: {balance}</p>
      <button onClick={play}>Play</button>
    </div>
  );
}
