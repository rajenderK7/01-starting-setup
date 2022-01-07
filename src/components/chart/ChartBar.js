import "./ChartBar.css";

const ChartBar = (props) => {
  let barHeight = Math.round((props.value / props.maxValue) * 100);

  return (
    <div className="chart-bar">
      <div className="bar">
        <div className="bar-fill" style={{ height: barHeight }}></div>
      </div>
      <div className="bar-label fw-bold">{props.label}</div>
    </div>
  );
};

export default ChartBar;
