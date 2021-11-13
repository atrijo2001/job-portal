import { FETCH_EMPLOYEES_SUCCESS, FETCH_EMPLOYEES_FAIL } from "../types";

const employeeReducer = (state, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES_SUCCESS:
      return {
        ...state,
        employees: action.payload,
      };
    case FETCH_EMPLOYEES_FAIL:
      return {
        ...state,
        error: "Could not fetch employees",
      };
    default:
      return state;
  }
};

export default employeeReducer;
