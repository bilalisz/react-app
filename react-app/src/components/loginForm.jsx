import React from "react";
import joi from "joi-browser";
import { ToastContainer, toast } from "react-toastify";
import Form from "./common/form";
import "react-toastify/dist/ReactToastify.css";
class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: joi.string().required(),
    password: joi.string().required(),
  };

  doSubmit = () => {
    // server call
    console.log("Submitted");
    toast.success("Login Successfull");
  };

  render() {
    const { renderButton, renderInput, handleSubmit } = this;
    return (
      <div className="shadow p-3">
        <div className="bg-dark text-white text-center text-uppercase">
          <h1>Login </h1>
        </div>
        <form onSubmit={handleSubmit}>
          {renderInput("username", "User Name")}
          {renderInput("password", "Password", "password")}

          {renderButton("Login")}
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default LoginForm;
