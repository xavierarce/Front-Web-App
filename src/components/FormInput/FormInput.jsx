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
  minValue,
  defaultValue,
  required,
}) => {
  return (
    <div className={divClassName}>
      <label>{label}</label>
      <input
        type={type}
        className={`DateInput ${pattern}`}
        onChange={onChange}
        min={minValue}
        name={name}
        defaultValue={defaultValue}
        value={value}
        placeholder={placeholder}
        required={required} // Update here
      />
    </div>
  );
};

export default FormInput;
