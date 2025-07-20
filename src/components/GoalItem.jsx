// components/GoalItem.jsx
import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import EditGoalForm from "./GoalEditForm";

export default function GoalItem({ goal, onUpdateGoal }) {
  const [isEditing, setIsEditing] = useState(false);

  const remaining = goal.targetAmount - goal.savedAmount;
  const completed = goal.savedAmount >= goal.targetAmount;

  return (
    <div className="bg-white rounded shadow p-4 mb-4">
      {isEditing ? (
        <EditGoalForm
          goal={goal}
          onUpdate={onUpdateGoal}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          <h2 className="text-lg font-bold">{goal.name}</h2>
          <p>Target: ${goal.targetAmount}</p>
          <p>Saved: ${goal.savedAmount}</p>
          <p>Remaining: ${remaining}</p>
          <p>Category: {goal.category}</p>
          <p>Deadline: {goal.deadline}</p>

          <ProgressBar saved={goal.savedAmount} target={goal.targetAmount} />

          <button
            onClick={() => setIsEditing(true)}
            className="mt-2 px-3 py-1 bg-yellow-500 text-white rounded"
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
}
