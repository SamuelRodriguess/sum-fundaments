/* eslint-disable import/no-anonymous-default-export */
const initialState = {
    min: 1,
    max: 9
}

export default function (state = initialState, action) {
    switch (action.type) {
        case "numero minimo":
            return {
                ...state,
                min: action.payload,
            };

        case "numero maximo":
            return {
                ...state,
                max: action.payload,
            };

        default:
            return state//current state
    }
}