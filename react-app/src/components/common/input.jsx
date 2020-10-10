import React from "react";

const InputField = (props) => {
  const { name, label, value, onChange, textType, error } = props;

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>

      <input
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        type={textType}
        className="form-control"
      />

      {error ? <div className="alert alert-danger shadow">{error}</div> : null}
    </div>
  );
};

export default InputField;
