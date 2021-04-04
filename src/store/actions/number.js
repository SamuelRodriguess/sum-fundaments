export function minNumber(newNumber) {
    return {
        type: 'numero minimo',
        payload: newNumber
    }
}

export function maxNumber(newNumber) {
    return {
        type: 'numero maximo',
        payload: newNumber
    }
}