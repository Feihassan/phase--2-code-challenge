// src/components/GoalForm.jsx
import { useState } from "react";

function GoalForm({ onAddGoal }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    targetAmount: "",
    deadline: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newGoal = {
      ...formData,
      savedAmount: 0,
      targetAmount: parseFloat(formData.targetAmount),
    };

    onAddGoal(newGoal);
    setFormData({
      name: "",
      category: "",
      targetAmount: "",
      deadline: "",
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#1e293b] p-4 sm:p-6 rounded-lg shadow-md max-w-xl mx-auto"
    >
      <h2 className="text-lg sm:text-xl font-bold text-white mb-4">Add New Goal</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="name"
          type="text"
          placeholder="Goal Name"
          value={formData.name}
          onChange={handleChange}
          className="bg-[#0f172a] text-white border border-gray-600 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
        <input
          name="category"
          type="text"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="bg-[#0f172a] text-white border border-gray-600 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
        <input
          name="targetAmount"
          type="number"
          placeholder="Target Amount"
          value={formData.targetAmount}
          onChange={handleChange}
          className="bg-[#0f172a] text-white border border-gray-600 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
        <input
          name="deadline"
          type="date"
          value={formData.deadline}
          onChange={handleChange}
          className="bg-[#0f172a] text-white border border-gray-600 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
      </div>
      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        Add Goal
      </button>
    </form>
  );
}

export default GoalForm;
