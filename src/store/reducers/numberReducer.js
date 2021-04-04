import {NUMBER_MIN, NUMBER_MAX} from '../actions/TAction'

const initialState = {
    min: 1,
    max: 9
}

const numberReducer = (state = initialState, action) => {
    switch (action.type) {
        case NUMBER_MIN:
            return {
                ...state,
                min: action.payload,
            };

        case NUMBER_MAX:
            return {
                ...state,
                max: action.payload,
            };

        default:
            return state//current state
    }
}

export default numberReducer