// components/Overview.jsx
import React from "react";

function Overview({ goals }) {
  const totalTarget = goals.reduce((sum, goal) => sum + Number(goal.targetAmount || 0), 0);
  const totalSaved = goals.reduce((sum, goal) => sum + Number(goal.savedAmount || 0), 0);

  return (
    <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-md w-full mb-6">
      <h2 className="text-xl font-semibold mb-2">💡 Overview</h2>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="bg-gray-700 p-4 rounded-xl">
          <p className="text-gray-400">Total Target</p>
          <p className="text-green-400 text-lg font-bold">Ksh {totalTarget.toLocaleString()}</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-xl">
          <p className="text-gray-400">Total Saved</p>
          <p className="text-blue-400 text-lg font-bold">Ksh {totalSaved.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
