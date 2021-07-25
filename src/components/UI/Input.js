const Input = ({ ...props }) => {
  return (
    <input
      type={props.type}
      min={props.min}
      mix={props.max}
      step={props.step}
      value={props.value}
      onChange={props.onChange}
    />
  )
}

export default Input
