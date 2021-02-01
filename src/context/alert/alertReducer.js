import {
    SET_ALERT,
    REMOVE_ALERT,
    SET_INDICATOR,
    CLEAR_INDICATOR
} from '../types';

export default (state, action) =>{
    switch (action.type) {
        case SET_ALERT:
            return action.payload
        case REMOVE_ALERT:
            return null
        case SET_INDICATOR:
            return action.payload
        case CLEAR_INDICATOR:
            return null
        default:
            return state
    }
}