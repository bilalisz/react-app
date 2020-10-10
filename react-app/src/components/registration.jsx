import React from "react";
import Form from "./common/form";

class Registration extends Form {
  render() {
    return (
      <div>
        {this.renderInput("name", "Name")}
        {this.renderInput("email", "Email")}
        {this.renderInput("password", "Password")}
        {this.renderButton("Submit")}
      </div>
    );
  }
}
export default Registration;
