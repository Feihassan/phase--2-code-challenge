// src/components/GoalList.jsx
import React from "react";
import ProgressBar from "./ProgressBar";

function GoalList({ goals, onDeleteGoal, onEditGoal }) {
  return (
    <div className="w-full md:max-w-3xl mx-auto mt-6 space-y-4">
      {goals.length === 0 ? (
        <p className="text-center text-gray-400">No goals yet. Add one!</p>
      ) : (
        goals.map((goal) => {
          const progress =
            goal.deposits && goal.deposits.length > 0
              ? goal.deposits.reduce((sum, deposit) => sum + deposit.amount, 0)
              : 0;

          return (
            <div
              key={goal.id}
              className="bg-gray-800 text-white p-4 rounded-lg shadow-md"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{goal.name}</h3>
                <div className="space-x-2">
                  <button
                    onClick={() => onEditGoal(goal)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDeleteGoal(goal.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <p className="text-sm mt-1">
                Target: Ksh{" "}
                {goal.targetAmount
                  ? goal.targetAmount.toLocaleString()
                  : "0"}
              </p>
              <p className="text-sm text-gray-400">Deadline: {goal.deadline}</p>
              <ProgressBar
                percentage={
                  goal.targetAmount
                    ? (progress / goal.targetAmount) * 100
                    : 0
                }
              />
              <p className="text-sm mt-1 text-green-400">
                Saved: Ksh {progress.toLocaleString()}
              </p>
            </div>
          );
        })
      )}
    </div>
  );
}

export default GoalList;
