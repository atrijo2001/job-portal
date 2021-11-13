import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//import the states
import AuthState from "./context/auth/AuthState";
import EmployeesState from "./context/employees/EmployeesState";

ReactDOM.render(
  <React.StrictMode>
    <AuthState>
      <EmployeesState>
        <App />
      </EmployeesState>
    </AuthState>
  </React.StrictMode>,
  document.getElementById("root")
);
