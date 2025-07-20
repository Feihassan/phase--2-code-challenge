import { useState } from "react";

function GoalEditForm({ goal, onUpdateGoal, onClose }) {
  const [formData, setFormData] = useState({
    ...goal,
    targetAmount: goal.targetAmount || 0,
    savedAmount: goal.savedAmount || 0,
    category: goal.category || "",
    deadline: goal.deadline || "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

  
    const updatedValue =
      name === "targetAmount" || name === "savedAmount"
        ? parseFloat(value) || 0
        : value;

    setFormData((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateGoal(formData);
    onClose();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="text"
        name="name"
        placeholder="Goal Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 rounded bg-gray-700 text-white"
      />
      <input
        type="number"
        name="targetAmount"
        placeholder="Target Amount (KES)"
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

      <div className="flex space-x-2">
        <button
          type="submit"
          className="bg-blue-600 px-4 py-2 rounded text-white"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 text-gray-300 underline"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default GoalEditForm;
