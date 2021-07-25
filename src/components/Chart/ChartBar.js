import './ChartBar.css'

const ChartBar = (props) => {
  let barHFill = '0%'

  if (props.maxVal > 0) {
    barHFill = Math.round((props.value / props.maxVal) * 100) + '%'
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barHFill }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  )
}

export default ChartBar
