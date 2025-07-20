import React from "react";

function Overview({ goals }) {
  const totalSaved = goals.reduce((sum, goal) => sum + goal.savedAmount, 0);
  const activeGoals = goals.filter((goal) => goal.savedAmount < goal.targetAmount).length;

  return (
    <section className="p-4 sm:p-6 lg:p-8 text-white bg-[#0f172a] min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold">Dashboard</h1>
        </div>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Total Saved */}
          <div className="bg-[#1e293b] p-4 rounded-lg shadow-md">
            <h3 className="text-lg sm:text-xl font-semibold text-white">Total Saved</h3>
            <p className="text-gray-400 font-medium">KES {totalSaved.toLocaleString()}</p>
          </div>

          {/* Active Goals */}
          <div className="bg-[#1e293b] p-4 rounded-lg shadow-md">
            <h3 className="text-lg sm:text-xl font-semibold text-white">Active Goals</h3>
            <p className="text-gray-400 font-medium">{activeGoals}</p>
          </div>

          {/* Total Goals */}
          <div className="bg-[#1e293b] p-4 rounded-lg shadow-md">
            <h3 className="text-lg sm:text-xl font-semibold text-white">Total Goals</h3>
            <p className="text-gray-400 font-medium">{goals.length}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
