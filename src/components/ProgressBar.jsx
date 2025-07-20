// src/components/ProgressBar.jsx
function ProgressBar({ percentage }) {
  const progress = Math.min(percentage, 100);

  return (
    <div className="w-full bg-gray-700 rounded-full h-4 mt-3">
      <div
        className="bg-blue-500 h-4 rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
