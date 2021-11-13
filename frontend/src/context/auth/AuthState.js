import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SEND_OTP_FAIL,
  SEND_OTP_SUCCESS,
  VERIFY_USER_FAIL,
  VERIFY_USER_SUCCESS,
  FETCH_EMPLOYEES_SUCCESS, 
  FETCH_EMPLOYEES_FAIL
} from "../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
    otpSent: false,
    employees: []
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  //Register a user
  const RegisterUser = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post("/api/user", formData, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.payload.msg,
      });
    }
  };

  //Send OTP
  const sendOtp = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post("/api/user/login", formData, config);
      dispatch({
        type: SEND_OTP_SUCCESS,
        payload: formData,
      });
    } catch (error) {
      //   dispatch({
      //     type: SEND_OTP_FAIL,
      //     payload: error.response.payload.msg,
      //   });
      console.log(error);
    }
  };

  //Verify a particular user using otp and phone number
  const verifyUser = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post("/api/user/verify", formData, config);
      dispatch({
        type: VERIFY_USER_SUCCESS,
        payload: data,
      });
      console.log({ jwt: data });
    } catch (error) {
      dispatch({
        type: VERIFY_USER_FAIL,
        payload: error.response.payload.msg,
      });
    }
  };

  //Get all the employees available for an employer
  const getEmployees = async()=> {
    try {
      const {data} = await axios.get('/api/user/all', {
        headers:{
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      dispatch({
        type: FETCH_EMPLOYEES_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: FETCH_EMPLOYEES_FAIL,
        payload: error
      })
    }
    
  }
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.user,
        otpSent: state.otpSent,
        RegisterUser,
        verifyUser,
        sendOtp,
        getEmployees
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
