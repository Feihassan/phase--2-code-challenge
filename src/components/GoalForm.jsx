import { useState } from "react";

function GoalForm({ onAddGoal }) {
  const [formData, setFormData] = useState({
    name: "",
    targetAmount: "",
    category: "",
    deadline: "",
    savedAmount: 0,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.name || !formData.targetAmount) return;
    onAddGoal(formData);
    setFormData({
      name: "",
      targetAmount: "",
      category: "",
      deadline: "",
      savedAmount: 0,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-4 rounded-xl space-y-3 shadow-md">
      <h2 className="text-lg font-bold text-white">Add New Goal</h2>
      <input
        type="text"
        name="name"
        placeholder="Goal name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 rounded bg-gray-700 text-white"
      />
      <input
        type="number"
        name="targetAmount"
        placeholder="Target amount"
        value={formData.targetAmount}
        onChange={handleChange}
        className="w-full p-2 rounded bg-gray-700 text-white"
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        className="w-full p-2 rounded bg-gray-700 text-white"
      />
      <input
        type="date"
        name="deadline"
        value={formData.deadline}
        onChange={handleChange}
        className="w-full p-2 rounded bg-gray-700 text-white"
      />
      <button type="submit" className="w-full bg-green-600 py-2 rounded text-white font-bold">
        Add Goal
      </button>
    </form>
  );
}

export default GoalForm;
