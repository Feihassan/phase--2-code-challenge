// src/components/DepositForm.jsx
import React, { useState } from "react";

function DepositForm({ onDeposit }) {
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const parsed = parseFloat(amount);
    if (!isNaN(parsed) && parsed > 0) {
      onDeposit(parsed);
      setAmount("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-center mt-2">
      <input
        type="number"
        placeholder="Deposit"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="p-2 rounded bg-gray-700 text-white w-full md:w-32"
      />
      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded"
      >
        Add
      </button>
    </form>
  );
}

export default DepositForm;
