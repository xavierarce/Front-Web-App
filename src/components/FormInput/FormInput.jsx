import "./FormInput.css";

const FormInput = ({
  divClassName,
  type,
  label,
  onChange,
  name,
  value,
  pattern,
  placeholder,
  required
}) => {
  return (
    <div className={divClassName}>
      <label>{label}</label>
      <input
        type={type}
        className={`DateInput ${pattern}`}
        onChange={onChange}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required} // Update here
      />
    </div>
  );
};

export default FormInput;
