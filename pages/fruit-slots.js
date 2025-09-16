import { useState, useEffect } from "react";
import { safeLocalStorageGet, safeLocalStorageSet } from "../utils/storage";

export default function FruitSlots() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    setBalance(parseInt(safeLocalStorageGet("balance", "0"), 10));
  }, []);

  const spin = () => {
    const newBalance = balance - 2 + Math.floor(Math.random() * 15);
    setBalance(newBalance);
    safeLocalStorageSet("balance", newBalance.toString());
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>🍒 Fruit Slots</h1>
      <p>Balance: {balance}</p>
      <button onClick={spin}>Spin</button>
    </div>
  );
}
