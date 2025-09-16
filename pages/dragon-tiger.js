import { useState, useEffect } from "react";
import { safeLocalStorageGet, safeLocalStorageSet } from "../utils/storage";

export default function DragonTiger() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    setBalance(parseInt(safeLocalStorageGet("balance", "0"), 10));
  }, []);

  const playGame = () => {
    const newBalance = balance + 10; // dummy win
    setBalance(newBalance);
    safeLocalStorageSet("balance", newBalance.toString());
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>🐉 Dragon Tiger</h1>
      <p>Balance: {balance}</p>
      <button onClick={playGame}>Play Round</button>
    </div>
  );
}
