import React, { Component } from "react";
import joi from "joi-browser";
import InputField from "./input";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };
  validate = () => {
    const option = { abortEarly: false };
    const { error } = joi.validate(this.state.data, this.schema, option);
    console.log(error);

    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();

    if (errors) return this.setState({ errors: errors || {} });

    const success = this.doSubmit();
    if (success)
      return <div className="alert alert-success shadow">Submitted</div>;
  };
  handleChange = ({ currentTarget }) => {
    let data = { ...this.state.data };
    data[currentTarget.name] = currentTarget.value;
    this.setState({ data });
  };
  renderButton = (label) => {
    return <button className="btn btn-primary">{label}</button>;
  };

  renderInput = (name, label, textTypes = "text") => {
    const { data, errors } = this.state;

    return (
      <InputField
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        textType={textTypes}
        error={errors[name]}
      />
    );
  };
}
export default Form;
