

export const ADD_COUNTER = 'ADD_COUNTER'

export const MIN_COUNTER = 'MIN_COUNTER'

export const RESET_COUNTER = 'RESET_COUNTER'

//actions describe what happened

export function addCounter(counter:any) {
    return {type: ADD_COUNTER, counter}
}

export function minCounter(counter:any) {
    return {type: MIN_COUNTER, counter}
}

export function resetCounter(counter:any) {
    return {type: RESET_COUNTER, counter}
}
