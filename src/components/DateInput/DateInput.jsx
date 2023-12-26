import './DateInput.css'
const DateInput =({onChange ,name})=>{
  return(
      <input type="date" onChange={onChange} name={name} className="DateInput"/>
  )
}

export default DateInput