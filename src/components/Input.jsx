const Input = ({ label, name, value, onChange }) => {
  return (
    <div className="wrapper-input">
      <label className="label-input">{label}</label>
      <input
        className="input"
        type="text"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
