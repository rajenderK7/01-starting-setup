import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  let dataPoints = [
    { month: "Jan", value: 0 },
    { month: "Feb", value: 0 },
    { month: "Mar", value: 0 },
    { month: "Apr", value: 0 },
    { month: "May", value: 0 },
    { month: "Jun", value: 0 },
    { month: "Jul", value: 0 },
    { month: "Aug", value: 0 },
    { month: "Sep", value: 0 },
    { month: "Oct", value: 0 },
    { month: "Nov", value: 0 },
    { month: "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    const currMonth = expense.date.getMonth(); // This will give the index where, Jan => 0 and Dec => 11
    dataPoints[currMonth].value += expense.amount;
  }
  const maxVALUES = dataPoints.map((object) => {
    return object.value;
  });

  let maxVal_ = Math.max(...maxVALUES);

  return (
    <div className="chart">
      <div className="chart-inner">
        {dataPoints.map((dataPoint) => {
          return (
            <ChartBar
              key={dataPoint.month}
              value={dataPoint.value}
              label={dataPoint.month}
              maxValue={maxVal_}
            ></ChartBar>
          );
        })}
      </div>
    </div>
  );
};

export default Chart;
