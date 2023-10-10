// ProgressBar.js

function ProgressBar({progress, backgroundColor, outline}: any) {
  // Initial progress is 0%

  return (
    <div style={{outline: `${outline}`}} className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progress}%`, backgroundColor: `${backgroundColor}` }}></div>
      <div className="progress-info">
        <span>{progress}%</span>
      </div>
      <div className="progress-buttons">
      </div>
    </div>
  );
}

export default ProgressBar;
