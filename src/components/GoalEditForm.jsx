// src/components/GoalEditForm.jsx
import React, { useState } from "react";

function GoalEditForm({ goal, onUpdateGoal, onCancel }) {
  const [name, setName] = useState(goal.name);
  const [targetAmount, setTargetAmount] = useState(goal.targetAmount);
  const [deadline, setDeadline] = useState(goal.deadline);

  function handleSubmit(e) {
    e.preventDefault();
    const updatedGoal = {
      id: goal.id, // Include the id property
      name,
      targetAmount,
      deadline,
    };
    onUpdateGoal(updatedGoal);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:max-w-xl mx-auto mt-4 bg-gray-800 p-5 rounded-lg shadow-md flex flex-col gap-4 text-white"
    >
      <h2 className="text-lg font-semibold">Edit Goal</h2>
      <input
        type="text"
        placeholder="Goal Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 rounded bg-gray-700 text-white"
      />
      <input
        type="number"
        placeholder="Target Amount"
        value={targetAmount}
        onChange={(e) => setTargetAmount(Number(e.target.value))}
        className="p-2 rounded bg-gray-700 text-white"
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        className="p-2 rounded bg-gray-700 text-white"
      />
      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default GoalEditForm;
