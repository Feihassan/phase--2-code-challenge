// src/App.jsx
import { useEffect, useState } from "react";
import GoalForm from "./components/GoalForm";
import GoalList from "./components/GoalList";
import GoalEditForm from "./components/GoalEditForm";
import DepositForm from "./components/DepositForm";
import Overview from "./components/Overview";
import { Toaster, toast } from "react-hot-toast";

function App() {
  const [goals, setGoals] = useState([]);
  const [editingGoal, setEditingGoal] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/goals")
      .then((res) => res.json())
      .then(setGoals)
      .catch(() => toast.error("Failed to fetch goals"));
  }, []);

  function addGoal(newGoal) {
    fetch("http://localhost:3000/goals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGoal),
    })
      .then((res) => res.json())
      .then((data) => {
        setGoals([...goals, data]);
        toast.success("Goal added successfully!");
      });
  }

  function deleteGoal(id) {
    fetch(`http://localhost:3000/goals/${id}`, { method: "DELETE" }).then(() => {
      setGoals(goals.filter((goal) => goal.id !== id));
      toast.success("Goal deleted");
    });
  }

  function updateGoal(id, updatedData) {
    fetch(`http://localhost:3000/goals/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((updatedGoal) => {
        setGoals(goals.map((goal) => (goal.id === id ? updatedGoal : goal)));
        setEditingGoal(null);
        toast.success("Goal updated!");
      });
  }

  function handleDeposit(goalId, amount) {
    const goal = goals.find((g) => g.id === goalId);
    const updated = {
      ...goal,
      savedAmount: (goal.savedAmount || 0) + amount,
    };
    updateGoal(goalId, updated);
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 space-y-6">
      <Toaster />
      <h1 className="text-3xl font-bold text-center">Smart Goal Planner</h1>

      {editingGoal ? (
        <GoalEditForm
          goal={editingGoal}
          onUpdateGoal={updateGoal}
          onCancel={() => setEditingGoal(null)}
        />
      ) : (
        <GoalForm onAddGoal={addGoal} />
      )}

      <Overview goals={goals} />

      <GoalList
        goals={goals}
        onDeleteGoal={deleteGoal}
        onEditGoal={(goal) => setEditingGoal(goal)}
      />

      <DepositForm goals={goals} onDeposit={handleDeposit} />
    </div>
  );
}

export default App;
