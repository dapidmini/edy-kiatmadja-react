const Button = ({ color, text, extraClass }) => {
  return (
    <button
      color={{ color }}
      style={{ backgroundColor: color }}
      className={`btn ${extraClass}`}
    >{text}</button>
  )
}

export default Button