import React, { useState, useEffect } from "react";
import GoalForm from "./components/GoalForm";
import GoalList from "./components/GoalList";
import Overview from "./components/Overview";
import GoalEditForm from "./components/GoalEditForm";

function App() {
  const [goals, setGoals] = useState([]);
  const [editingGoal, setEditingGoal] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("deadline");

  useEffect(() => {
    fetch("https://smart-goal-api1.onrender.com/goals")
      .then((res) => res.json())
      .then(setGoals)
      .catch((err) => console.error("Failed to fetch goals:", err));
  }, []);

  function handleAddGoal(newGoal) {
    fetch("https://smart-goal-api1.onrender.com/goals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGoal),
    })
      .then((res) => res.json())
      .then((data) => setGoals((prev) => [...prev, data]));
  }

  function handleUpdateGoal(updatedGoal) {
    fetch(`https://smart-goal-api1.onrender.com/goals${updatedGoal.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedGoal),
    })
      .then((res) => res.json())
      .then((data) => {
        setGoals((prev) =>
          prev.map((goal) => (goal.id === data.id ? data : goal))
        );
        setEditingGoal(null);
      });
  }

  function handleDeleteGoal(id) {
    fetch(`https://smart-goal-api1.onrender.com/goals${id}`, {
      method: "DELETE",
    }).then(() => {
      setGoals((prev) => prev.filter((goal) => goal.id !== id));
    });
  }

  function handleDeposit(goalId, amount) {
    const goal = goals.find((g) => g.id === goalId);
    const updatedGoal = {
      ...goal,
      savedAmount: Number(goal.savedAmount) + Number(amount),
    };

    handleUpdateGoal(updatedGoal);
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center">🎯 Smart Goal Planner</h1>

        <Overview goals={goals} />

        {editingGoal ? (
          <GoalEditForm goal={editingGoal} onUpdateGoal={handleUpdateGoal} />
        ) : (
          <GoalForm onAddGoal={handleAddGoal} />
        )}

        <div className="flex gap-4 flex-wrap justify-between items-center">
          <div>
            <label className="mr-2">Filter by Category:</label>
            <select
              className="bg-gray-700 px-3 py-1 rounded"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All</option>
              <option value="Emergency">Emergency</option>
              <option value="Savings">Savings</option>
              <option value="Vacation">Vacation</option>
              <option value="Education">Education</option>
            </select>
          </div>

          <div>
            <label className="mr-2">Sort by:</label>
            <select
              className="bg-gray-700 px-3 py-1 rounded"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="deadline">Deadline</option>
              <option value="category">Category</option>
            </select>
          </div>
        </div>

        <GoalList
          goals={goals}
          onEdit={setEditingGoal}
          onDelete={handleDeleteGoal}
          onDeposit={handleDeposit}
          selectedCategory={selectedCategory}
          sortBy={sortBy}
        />
      </div>
    </div>
  );
}

export default App;
