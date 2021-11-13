import React, { useReducer } from "react";
import axios from "axios";
import EmployeesContext from "./employeesContext";
import employeesReducer from "./employeesReducer";
import { FETCH_EMPLOYEES_SUCCESS, FETCH_EMPLOYEES_FAIL } from "../types";

const AuthState = (props) => {
  const initialState = {
    employees: [],
    error: null,
  };
  const [state, dispatch] = useReducer(employeesReducer, initialState);

  //Get all the employees available for an employer
  const getEmployees = async () => {
    try {
      const { data } = await axios.get("/api/user/all", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      console.log({ data });
      dispatch({
        type: FETCH_EMPLOYEES_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_EMPLOYEES_FAIL,
        payload: error,
      });
    }
  };
  return (
    <EmployeesContext.Provider
      value={{
        employees: state.employees,
        error: state.error,
        getEmployees,
      }}
    >
      {props.children}
    </EmployeesContext.Provider>
  );
};

export default AuthState;
