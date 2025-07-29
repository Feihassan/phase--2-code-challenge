// src/App.jsx
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import GoalForm from "./components/GoalForm";
import GoalList from "./components/GoalList";
import Overview from "./components/Overview";
import DepositForm from "./components/DepositForm";
import GoalEditForm from "./components/GoalEditForm";

const API_URL = "https://smart-goal-api1.onrender.com/goals";

function App() {
  const [goals, setGoals] = useState([]);
  const [editingGoal, setEditingGoal] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setGoals(data))
      .catch((error) => console.error("Error fetching goals:", error));
  }, []);

  const handleAddGoal = (newGoal) => {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGoal),
    })
      .then((res) => res.json())
      .then((data) => setGoals((prev) => [...prev, data]));
  };

  const handleDeleteGoal = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    }).then(() => setGoals((prev) => prev.filter((goal) => goal.id !== id)));
  };

  const handleUpdateGoal = (updatedGoal) => {
    fetch(`${API_URL}/${updatedGoal.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedGoal),
    })
      .then((res) => res.json())
      .then((data) =>
        setGoals((prev) =>
          prev.map((goal) => (goal.id === data.id ? data : goal))
        )
      );
  };

  const handleDeposit = (goalId, amount) => {
    const goalToUpdate = goals.find((goal) => goal.id === goalId);
    if (!goalToUpdate) return;

    const updatedGoal = {
      ...goalToUpdate,
      savedAmount: (goalToUpdate.savedAmount || 0) + amount,
    };

    handleUpdateGoal(updatedGoal);
  };

  const handleEdit = (goal) => {
    setEditingGoal(goal);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto p-4 space-y-6">
        <Overview goals={goals} />

        {editingGoal ? (
          <GoalEditForm
            goal={editingGoal}
            onUpdateGoal={(updated) => {
              handleUpdateGoal(updated);
              setEditingGoal(null);
            }}
            onClose={() => setEditingGoal(null)}
          />
        ) : (
          <>
            <button
              onClick={() => setShowForm((prev) => !prev)}
              className="bg-green-600 px-4 py-2 rounded text-white"
            >
              {showForm ? "Close Form" : "Add New Goal"}
            </button>

            {showForm && <GoalForm onAddGoal={handleAddGoal} />}
          </>
        )}

        <GoalList
          goals={goals}
          onDelete={handleDeleteGoal}
          onDeposit={handleDeposit}
          onEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default App;
