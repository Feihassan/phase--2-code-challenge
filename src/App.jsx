// src/App.jsx
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import GoalForm from "./components/GoalForm";
import GoalList from "./components/GoalList";
import DepositForm from "./components/DepositForm";
import Overview from "./components/Overview";
import GoalEditForm from "./components/GoalEditForm";

function App() {
  const [goals, setGoals] = useState([]);
  const [editingGoal, setEditingGoal] = useState(null);

  // Fetch goals
  useEffect(() => {
    fetch("https://smart-goal-api1.onrender.com/goals")
      .then((res) => res.json())
      .then(setGoals)
      .catch((err) => console.error("Fetch failed:", err));
  }, []);

  const addGoal = (newGoal) => setGoals([...goals, newGoal]);

  const deleteGoal = (id) => {
    fetch(`https://smart-goal-api1.onrender.com/goals/${id}`, { method: "DELETE" });
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  const updateGoal = (updatedGoal) => {
    fetch(`https://smart-goal-api1.onrender.com/goals/${updatedGoal.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedGoal),
    }).then(() => {
      setGoals(goals.map((g) => (g.id === updatedGoal.id ? updatedGoal : g)));
      setEditingGoal(null);
    });
  };

  const handleDeposit = (id, amount) => {
    setGoals((prevGoals) =>
      prevGoals.map((g) =>
        g.id === id ? { ...g, savedAmount: g.savedAmount + amount } : g
      )
    );
  };

  const handleEditGoal = (goal) => {
    setEditingGoal(goal);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <Overview goals={goals} />
        {editingGoal ? (
          <GoalEditForm goal={editingGoal} onUpdate={updateGoal} />
        ) : (
          <GoalForm onAddGoal={addGoal} />
        )}
        <GoalList
          goals={goals}
          onDelete={deleteGoal}
          onEdit={handleEditGoal} // ✅ make sure this is passed!
        />
        <DepositForm goals={goals} onDeposit={handleDeposit} />
      </div>
    </div>
  );
}

export default App;
