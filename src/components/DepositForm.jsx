import { useState } from "react";

function DepositForm({ goal, onUpdateGoal }) {
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const updatedGoal = {
      ...goal,
      savedAmount: Number(goal.savedAmount) + Number(amount),
    };
    onUpdateGoal(updatedGoal);
    setAmount("");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-2 space-y-2">
      <input
        type="number"
        placeholder="Deposit amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 rounded bg-gray-700 text-white"
      />
      <button
        type="submit"
        className="bg-yellow-500 text-black font-bold py-1 px-3 rounded"
      >
        Deposit
      </button>
    </form>
  );
}

export default DepositForm;
