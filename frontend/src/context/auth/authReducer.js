import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  SEND_OTP_FAIL,
  SEND_OTP_SUCCESS,
  VERIFY_USER_FAIL,
  VERIFY_USER_SUCCESS,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_FAIL,
} from "../types";

const authReducer = (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      console.log("hi reducer");
      console.log({ payload: action.payload });
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: action.payload,
      };

    case REGISTER_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: action.payload,
      };
    case SEND_OTP_SUCCESS: {
      localStorage.setItem("phone", action.payload.phone);
      return {
        ...state,
        loading: false,
        otpSent: true,
      };
    }
    case SEND_OTP_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        otpSent: false,
      };
    }
    case VERIFY_USER_SUCCESS: {
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    }
    case VERIFY_USER_FAIL: {
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
      };
    }
    case FETCH_EMPLOYEES_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        employees: action.payload,
      };
    }
    case FETCH_EMPLOYEES_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
