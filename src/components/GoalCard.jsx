import ProgressBar from "./ProgressBar";

function GoalCard({ goal, onEdit, onDelete, onDeposit }) {
  const {
    id,
    name,
    category,
    targetAmount = 0,
    savedAmount = 0,
    deadline,
  } = goal;

  const formattedTarget = targetAmount.toLocaleString("en-KE");
  const formattedSaved = savedAmount.toLocaleString("en-KE");
  const formattedDate = new Date(deadline).toLocaleDateString("en-KE", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="bg-gray-800 text-white p-4 rounded-xl shadow-md space-y-3">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold">{name}</h2>
        <span className="text-xs text-gray-400">{category}</span>
      </div>

      <ProgressBar savedAmount={savedAmount} targetAmount={targetAmount} />

      <div className="text-sm text-gray-300">
        <p>
          <strong>Savings:</strong> KES {formattedSaved} / KES {formattedTarget}
        </p>
        <p>
          <strong>Deadline:</strong> {formattedDate}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 pt-2 text-sm">
        <button
          onClick={() => onDeposit(id)}
          className="bg-green-600 px-3 py-1 rounded hover:bg-green-700"
        >
          Deposit
        </button>
        <button
          onClick={() => onEdit(goal)}
          className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(id)}
          className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default GoalCard;
