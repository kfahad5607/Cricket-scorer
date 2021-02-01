import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import {
    SET_ALERT,
    REMOVE_ALERT,
    SET_INDICATOR,
    CLEAR_INDICATOR
} from '../types';

const AlertState = props => {
    const initialState = null

    const [state, dispatch] = useReducer(alertReducer, initialState);

    // Set Alert
    const setAlert = (msg, type, timeout = 5000) => {
        dispatch({
            type: SET_ALERT,
            payload: { msg, type }
        });
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        setTimeout(() => {
            dispatch({
                type: REMOVE_ALERT,
            });
        }, timeout);
    }

    const setIndicator = (msg, type) => {

        dispatch({
            type: SET_INDICATOR,
            payload: { msg, type }
        })
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    const clearIndicator = () => {
        dispatch({
            type: CLEAR_INDICATOR
        })
    }

    return (
        <AlertContext.Provider
            value={{
                alert: state,
                setAlert,
                setIndicator,
                clearIndicator
            }}
        >
            {props.children}
        </AlertContext.Provider>
    );
};

export default AlertState;