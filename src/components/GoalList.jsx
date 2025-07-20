import React, { useState } from "react";

function GoalList({ goals, onEdit, onDelete, onDeposit, selectedCategory, sortBy }) {
  const [depositValues, setDepositValues] = useState({});

  const filteredGoals = goals
    .filter((goal) =>
      selectedCategory ? goal.category === selectedCategory : true
    )
    .sort((a, b) => {
      if (sortBy === "deadline") {
        return new Date(a.deadline) - new Date(b.deadline);
      } else if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });

  return (
    <div className="space-y-6">
      {filteredGoals.map((goal) => (
        <div
          key={goal.id}
          className="bg-slate-900 text-white p-4 rounded-2xl shadow-lg w-full"
        >
          <h2 className="text-xl font-bold text-green-400">{goal.name}</h2>
          <p><strong>Target:</strong> KES {goal.targetAmount.toLocaleString()}</p>
          <p><strong>Saved:</strong> KES {goal.savedAmount.toLocaleString()}</p>
          <p><strong>Category:</strong> {goal.category}</p>
          <p><strong>Deadline:</strong> {goal.deadline}</p>
          <p><strong>Created:</strong> {goal.createdAt}</p>

          
          <div className="mt-3 mb-4">
            <div className="h-2 w-full bg-gray-700 rounded-full">
              <div
                className="h-full bg-green-500 rounded-full"
                style={{
                  width: `${Math.min(
                    (goal.savedAmount / goal.targetAmount) * 100,
                    100
                  )}%`,
                }}
              ></div>
            </div>
          </div>

          
          <div className="flex flex-col sm:flex-row items-stretch gap-2">
            <input
              type="number"
              placeholder="Deposit amount"
              className="flex-1 px-3 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
              value={depositValues[goal.id] || ""}
              onChange={(e) =>
                setDepositValues({ ...depositValues, [goal.id]: e.target.value })
              }
            />
            <button
              onClick={() => {
                const amount = parseFloat(depositValues[goal.id]);
                if (!isNaN(amount) && amount > 0) {
                  onDeposit(goal.id, amount);
                  setDepositValues({ ...depositValues, [goal.id]: "" });
                }
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Deposit
            </button>
            <button
              onClick={() => onEdit(goal)}
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(goal.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GoalList;
