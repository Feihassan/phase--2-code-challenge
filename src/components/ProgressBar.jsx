function ProgressBar({ savedAmount = 0, targetAmount = 0 }) {
  const safeSaved = savedAmount || 0;
  const safeTarget = targetAmount || 0;
  const progress = Math.min((safeSaved / safeTarget) * 100, 100);

  return (
    <div className="w-full">
      <div className="flex justify-between text-xs text-gray-400 mb-1">
        <span>{`KES ${safeSaved.toLocaleString("en-KE")}`}</span>
        <span>{`KES ${safeTarget.toLocaleString("en-KE")}`}</span>
      </div>
      <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
