import { ADD, ADD2, ADD_NUMBER, MUL, SUB } from "./actionTypes";

export function add() {
    return {
        type: ADD
    }
}

export function sub() {
    return {
        type: SUB
    }
}

export function add2(number) {
    return {
        type: ADD2,
        payload: number
    }
}

export function addNumber(number) {
    return {
        type: ADD_NUMBER,
        payload: number
    }
}

export function mul(number) {
    return {
        type: MUL,
        payload: number
    }
}

export function asyncMul(number) {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(mul(number))
        }, 3000)
    }
}