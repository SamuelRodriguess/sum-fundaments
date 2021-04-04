import {NUMBER_MIN, NUMBER_MAX} from './TAction'

export function minNumber(value) {
    return {
        type: NUMBER_MIN,
        payload: value
    }
}

export function maxNumber(value) {
    return {
        type: NUMBER_MAX,
        payload: value
    }
}