import React, { useReducer } from 'react'
import axios from 'axios'
import AuthContext from './authContext'
import authReducer from './authReducer'
import {REGISTER_SUCCESS,
REGISTER_FAIL,
LOAD_USER,
SEND_OTP_FAIL,
SEND_OTP_SUCCESS,
VERIFY_USER_FAIL,
VERIFY_USER_SUCCESS} from '../types'

const AuthState = (props) => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
        error: null
    }
    const [state, dispatch] = useReducer(authReducer, initialState)


    //Register a user
    const RegisterUser = async(formData) => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        try {
            const {data} = await axios.post('/api/user', formData, config)
            dispatch({
                type: REGISTER_SUCCESS, 
                payload: data
            })
        } catch (error) {
            dispatch({
                type: REGISTER_FAIL,
                payload: error.response.payload.msg
            })
        }
    }

    //Send OTP 
    const sendOtp = async(formData) => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        try {
        const {data} = await axios.post('/api/user/login', formData, config);
            dispatch({
                type: SEND_OTP_SUCCESS,
                payload: data
            })
        } catch (error) {
            dispatch({
                type: REGISTER_FAIL,
                payload: error.response.payload.msg
            })
        }
    }

    //Verify a particular user using otp and phone number
    const verifyUser = async(formData) => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        try {
            const {data} = await axios.post('/api/user/verify', formData, config)
            dispatch({
                type: VERIFY_USER_SUCCESS,
                payload: data
            })
        } catch (error) {
            dispatch({
                type: REGISTER_FAIL,
                payload: error.response.payload.msg
            })
        }
    }
    return (
        <div>
            
        </div>
    )
}

export default AuthState
