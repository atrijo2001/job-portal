import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//import the states
import AuthState from "./context/auth/AuthState";
import EmployeesState from "./context/employees/EmployeesState";
import AlertState from "./context/alert/AlertState";

ReactDOM.render(
  <React.StrictMode>
    <AuthState>
      <AlertState>
        <EmployeesState>
          <App />
        </EmployeesState>
      </AlertState>
    </AuthState>
  </React.StrictMode>,
  document.getElementById("root")
);
