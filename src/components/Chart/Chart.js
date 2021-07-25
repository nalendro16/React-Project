import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {
  const valArray = props.dataPoints.map((dataPoint) => dataPoint.value)
  const totalMax = Math.max(...valArray)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxVal={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  )
}

export default Chart
